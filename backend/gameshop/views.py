from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from gameshop.models import Product
from gameshop.serializers import ProductSerializer
from rest_framework import status
from .models import Categories
from .serializers import CategorySerializer
from .requestForm import prodFrom
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
