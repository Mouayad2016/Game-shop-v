from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from ...models import Product, Categories
from .serializer import ProductSerializer,GetProductSerializer


# Create your views here.
@api_view(['GET'])
def getProductByProductId(request, id):
    try:
        product = Product.objects.get(id=id)
        serializer = ProductSerializer(product)
        return Response(serializer.data)
        
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);


@api_view(['GET'])
def getProduct(request):
    try:
        limit = request.GET.get('limit', 6)
        offset = request.GET.get('offset', 0)
        products = Product.objects.all()[int(offset):int(offset)+int(limit)]
        serializer = ProductSerializer(products, many=True)
        data = serializer.data
        return Response(data)
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getProductByCategory(request, id):
    try:
        limit = request.GET.get('limit', 6) # get the limit parameter from the query string, default to 6
        offset = request.GET.get('offset', 0) # get the offset parameter from the query string, default to 0
        category = Categories.objects.get(id=id)
        products = category.product_set.all()[int(offset):int(offset)+int(limit)]
        serializer = GetProductSerializer(products, many=True, context={'request': request})
        return Response(serializer.data)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST)
        
@api_view(['GET'])
def getProductFuzzyQuery(request, text):
    try:
        product = Product.objects.filter(name__icontains=text)
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
