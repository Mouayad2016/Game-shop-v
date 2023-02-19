from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from .models import Product
from .serializers import ProductSerializer
from .models import Categories
from .serializers import CategorySerializer
from .requestForm import prodFrom
from .models import Shopping_cart
from .serializers import Shopping_cartSerializer
from .models import Discount
from .serializers import DiscountSerializer
# Create your views here.
@api_view(['GET'])
def getProduct(request):
    try:
        product = Product.objects.all()
        serializer = ProductSerializer(product, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);
        
    

@api_view(['POST'])
def postProdcut(request):

    try:
        serializer = ProductSerializer(data=request.data) # ! make it json
        valid = serializer.is_valid(); # ! validate the response 
        if valid:
            serializer.save() # ! save to db 
            return Response(serializer.data) # ! return the response
        else:
            return Response(serializer.errors)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deleteProdcutById(request,id):
    try:
        num_deleted, _ = Product.objects.filter(id=id).delete()
        if num_deleted == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)       
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def updateProductById(request,id):
    try:
        product = Product.objects.get(id=id)
        serializer = ProductSerializer(product, data=request.data,partial=True )#? partial=True update only data provided by the body
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

# ----------------------------------------------------------------------------------------------------------

@api_view(['GET'])
def getCategory(request):
    try:
        category = Categories.objects.all()
        serializer = CategorySerializer(category, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);


@api_view(['POST'])
def postCategory(request):
    try:
        serializer = CategorySerializer(data=request.data)
        valid = serializer.is_valid(); # ! validate the response 
        if valid:
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);
@api_view(['DELETE'])
def deleteCategoryById(request,id):
    try:
        num_deleted, _ = Categories.objects.filter(id=id).delete()
        if num_deleted == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)       
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def updateCategoryById(request,id):
    try:
        cat = Categories.objects.get(id=id)
        serializer = ProductSerializer(cat, data=request.data,partial=True )#? partial=True update only data provided by the body
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

# ---------------------------------------------------------------------------------------------- -------------------------------------------

@api_view(['GET'])
def getShopping_cart(request):
    try:
        shopping_cart = Shopping_cart.objects.all()
        serializer = Shopping_cartSerializer(shopping_cart, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);

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

@api_view(['GET'])
def getDiscount(request):
    try:
        discount = Discount.objects.all()
        serializer = DiscountSerializer(discount, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);

@api_view(['POST'])
def postDiscount(request):
    try:
        serializer = DiscountSerializer(data=request.data)
        valid = serializer.is_valid(); # ! validate the response 
        if valid:
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);
@api_view(['DELETE'])
def deleteDiscountById(request,id):
    try:
        num_deleted, _ = Discount.objects.filter(id=id).delete()
        if num_deleted == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)       
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def updateDiscountById(request,id):
    try:
        discount = Discount.objects.get(id=id)
        serializer = DiscountSerializer(discount, data=request.data,partial=True )#? partial=True update only data provided by the body
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Discount.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

# ---------------------------------------------------------------------------------------------- -------------------------------------------

