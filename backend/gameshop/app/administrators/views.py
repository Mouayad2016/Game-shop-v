from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from ...models import Administrators
from .serializer import AdministratorsSerializer
import hashlib
from django.contrib.auth.hashers import make_password


# Create your views here.
@api_view(['GET'])
def getAdministrators(request):
    try:
        administrators = Administrators.objects.all()
        serializer = AdministratorsSerializer(administrators, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);

@api_view(['GET'])
def getAdministratorByID(request,id):
    try:
        administrators = Administrators.objects.get(id=id)
        serializer = AdministratorsSerializer(administrators)
        return Response(serializer.data)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);

@api_view(['GET'])
def getAdministratorByUsernameAndPassword(request, username, password):
    try:
        raw_password = password
        encrypted_password = hashlib.sha256((raw_password + username).encode()).hexdigest()
        administrators = Administrators.objects.get(password=encrypted_password)
        serializer = AdministratorsSerializer(administrators)
        return Response(serializer.data)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);

@api_view(['POST'])
def postAdministrators(request):
    try:
        serializer = AdministratorsSerializer(data=request.data)
        valid = serializer.is_valid(); # ! validate the response 
        if valid:
            username = request.data.get("username")
            raw_password = request.data.get("password")

            # encrypted_password = make_password(raw_password)
            encrypted_password = hashlib.sha256((raw_password + username).encode()).hexdigest()

            serializer.save(password=encrypted_password)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);

@api_view(['DELETE'])
def deleteAdministratorsById(request,id):
    try:
        num_deleted, _ = Administrators.objects.filter(id=id).delete()
        if num_deleted == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)       
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def updateAdministratorsById(request,id):
    try:
        administrators = Administrators.objects.get(id=id)

        serializer = AdministratorsSerializer(administrators, data=request.data,partial=True )#? partial=True update only data provided by the body
        if serializer.is_valid():
            username = request.data.get("username")
            raw_password = request.data.get("password")

            # encrypted_password = make_password(raw_password)
            encrypted_password = hashlib.sha256((raw_password + username).encode()).hexdigest()

            serializer.save(password=encrypted_password)
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Administrators.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

# ----------------------------------------------------------------------------------------------------------
