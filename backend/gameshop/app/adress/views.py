from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from ...models import Adress
from .serializer import AdressSerializer


# Create your views here.
@api_view(['GET'])
def getAdress(request):
    try:
        adress = Adress.objects.all()
        serializer = AdressSerializer(adress, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);

@api_view(['POST'])
def postAdress(request):
    try:
        serializer = AdressSerializer(data=request.data)
        valid = serializer.is_valid(); # ! validate the response 
        if valid:
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);

@api_view(['DELETE'])
def deleteAdressById(request,id):
    try:
        num_deleted, _ = Adress.objects.filter(id=id).delete()
        if num_deleted == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)       
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def updateAdressById(request,id):
    try:
        adress = Adress.objects.get(id=id)
        serializer = AdressSerializer(adress, data=request.data,partial=True )#? partial=True update only data provided by the body
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Adress.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

# ----------------------------------------------------------------------------------------------------------
