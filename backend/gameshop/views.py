from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from gameshop.models import Product
from gameshop.serializers import ProductSerializer


# Create your views here.
@api_view(['GET'])
def getProduct(request):
    product = Product.objects.all()
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.date)

@api_view(['POST'])
def postProdcut(request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
