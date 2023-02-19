from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from ...models import Product
from .serializer import ProductSerializer


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
