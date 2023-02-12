from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from gameshop.models import Product
from gameshop.serializers import ProductSerializer

from .models import Categories
from .serializers import CategorySerializer


# Create your views here.
@api_view(['GET'])
def getProduct(request):
    product = Product.objects.all()
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postProdcut(request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
def getCategory(request):
    category = Categories.objects.all()
    serializer = CategorySerializer(category, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postCategory(request):
    serializer = CategorySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)