from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from ...models import Order_product
from .serializer import Order_productSerializer


# Create your views here.
@api_view(['GET'])
def getOrder_product(request):
    try:
        order_product = Order_product.objects.all()
        serializer = Order_productSerializer(order_product, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);

@api_view(['GET'])
def getOrder_productByOrder_id(request, order_id):
    try:
        order_product = Order_product.objects.filter(order_id_id=order_id)
        serializer = Order_productSerializer(order_product, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);

@api_view(['POST'])
def postOrder_product(request):
    try:
        serializer = Order_productSerializer(data=request.data)
        valid = serializer.is_valid(); # ! validate the response 
        if valid:
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);

@api_view(['DELETE'])
def deleteOrder_productById(request,id):
    try:
        num_deleted, _ = Order_product.objects.filter(id=id).delete()
        if num_deleted == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)       
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def updateOrder_productById(request,id):
    try:
        order_product = Order_product.objects.get(id=id)
        serializer = Order_productSerializer(Order_product, data=request.data,partial=True )#? partial=True update only data provided by the body
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Order_product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

# ----------------------------------------------------------------------------------------------------------
