from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.utils import timezone
from datetime import timedelta
from ...models import Shopping_cart, Product
from .serializer import GetShopping_cartSerializer

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
def getShoppingCartByUserId(request, id):

    try:
        shopping_cart = Shopping_cart.objects.get(user_id_id=id)
        serializer = GetShopping_cartSerializer(shopping_cart, context={'request': request})
        return Response(serializer.data)
    except Shopping_cart.DoesNotExist:
        return Response([],status=status.HTTP_200_OK)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);


@api_view(['POST'])
def addProductToShopping_cart(request, userId=None, product_id=None):
    try:
        # Retrieve the product instance
        product = Product.objects.get(id=product_id)
        

        # Get or create the user's shopping cart
        if userId is None:
            shopping_cart, created = Shopping_cart.objects.get_or_create(user_id=None)
            shopping_cart.delete_after = timezone.now() + timedelta(hours=1)
        else:
            shopping_cart, created = Shopping_cart.objects.get_or_create(user_id=userId)

        # Add the product to the shopping cart
        shopping_cart.prod_cart.add(product)

        # Return a success response
        if created:
            return Response({'cart_id': shopping_cart.id, 'success': 'Product added to new cart'}, status=200)
        else:
            return Response({'success': 'Product added to existing cart'}, status=200)
    except Product.DoesNotExist as e:
        print(str(e))
        return Response({'error': 'Product does not exist'}, status=400)
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

