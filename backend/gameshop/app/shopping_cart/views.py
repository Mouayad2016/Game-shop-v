from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.utils import timezone
from datetime import timedelta
from ...models import Shopping_cart, Product,CartItem
from django.contrib.auth.models import User

from .serializer import GetShopping_cartSerializer
from django.shortcuts import get_object_or_404
# ---------------------------------------------------------------------------------------------- -------------------------------------------
@api_view(['GET'])
def getShopping_cart(request):
    try:
        shopping_cart = Shopping_cart.objects.all()
        serializer = GetShopping_cartSerializer(shopping_cart, many=True)
        print(request.user.id)
        return Response(serializer.data)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);

@api_view(['GET'])
def getShopping_cart_by_id(request, id):
    try:
        shopping_cart = Shopping_cart.objects.get(id=id)
        serializer = GetShopping_cartSerializer(shopping_cart)
        return Response(serializer.data)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);

@api_view(['GET'])
def getShoppingCartByUserId(request, id):
    try:
        print(request)
        shopping_cart = Shopping_cart.objects.get(user_id_id=id)
        serializer = GetShopping_cartSerializer(shopping_cart, context={'request': request})
        return Response(serializer.data)
    except Shopping_cart.DoesNotExist:
        return Response([],status=status.HTTP_200_OK)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);



@api_view(['POST'])
def addProductToShopping_cartAuthUser(request, userId, product_id=None):
    try:
        user = User.objects.get(id=userId)
        product = get_object_or_404(Product, id=product_id)
        shopping_carts = Shopping_cart.objects.filter(user_id=userId)
        if shopping_carts.exists():
            shopping_cart = shopping_carts.first()
            cart_item, created = CartItem.objects.get_or_create(cart=shopping_cart, product=product)
            if not created:
                cart_item.quantity += 1
                cart_item.save()
        else:
            shopping_cart = Shopping_cart.objects.create(user_id=user)
            cart_item = CartItem.objects.create(cart=shopping_cart, product=product)
        return Response({'cart_id': shopping_cart.id}, status=200)
    except Exception as e:
        print(str(e))
        return Response({'error': str(e)}, status=400)
    
@api_view(['DELETE'])
def DeleteProductFromShoppingCartByCartId(request, cartId, product_id=None):
    try:
        shopping_cart = get_object_or_404(Shopping_cart, id=cartId)
        product = get_object_or_404(Product, id=product_id)
       
        cart_item  = CartItem.objects.get(cart=shopping_cart, product=product)
        if cart_item.quantity > 1:
            cart_item.quantity -= 1
            cart_item.save()
        else:
            cart_item.delete()
        return Response({'cart_id': shopping_cart.id}, status=200)
    except Exception as e:
        print(str(e))
        return Response({'error': str(e)}, status=400)

@api_view(['POST'])
def addProductToShopping_cart_by_cart_id(request, cart_id, product_id=None):
    try:
        product = get_object_or_404(Product, id=product_id)
        shopping_carts = Shopping_cart.objects.filter(id=cart_id)
        if shopping_carts.exists():
            shopping_cart = shopping_carts.first()
            cart_item, created = CartItem.objects.get_or_create(cart=shopping_cart, product=product)
            if not created:
                cart_item.quantity += 1
                cart_item.save()
        else:
            shopping_cart = Shopping_cart.objects.create(id=cart_id)
            cart_item = CartItem.objects.create(cart=shopping_cart, product=product)
        return Response({'cart_id': shopping_cart.id}, status=200)
    except Exception as e:
        print(str(e))
        return Response({'error': str(e)}, status=400)
    

    

@api_view(['POST'])
def addToShopingCartNoAuthUser(request , product_id):
    product = get_object_or_404(Product,id=product_id)  # This will return 404 if no product exist 
    try:   
        shopping_cart = Shopping_cart.objects.create(user_id=None)
        shopping_cart.delete_after = timezone.now() + timedelta(hours=1)
        shopping_cart.save()

        shopping_cart.prod_cart.add(product)
        return Response({'cart_id': shopping_cart.id}, status=200)
    except Exception as e:
        print(str(e))
        return Response({'error': str(e)}, status=400)


@api_view(['POST'])
def postShopping_cart(request):
    try:
        serializer = Shopping_cartSerializer(data=request.data)
        valid = serializer.is_valid(); # ! validate the response 
        if valid:
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);
@api_view(['DELETE'])
def deleteShopping_cartById(request,id):
    try:
        num_deleted, _ = Shopping_cart.objects.filter(id=id).delete()
        if num_deleted == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)       
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def updateShopping_cartById(request,id):
    try:
        shopping_cart = Shopping_cart.objects.get(id=id)
        serializer = Shopping_cartSerializer(shopping_cart, data=request.data,partial=True )#? partial=True update only data provided by the body
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Shopping_cart.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
# ---------------------------------------------------------------------------------------------- -------------------------------------------

