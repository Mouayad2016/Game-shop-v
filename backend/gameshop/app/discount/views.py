from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from ...models import Discount
from .serializer import DiscountSerializer


# Create your views here.
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

# ----------------------------------------------------------------------------------------------------------
