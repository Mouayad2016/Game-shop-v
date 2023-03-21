from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from ...models import Product_images
from .serializer import Product_ImageSerializer
import os
from PIL import Image
from django.http import HttpResponse
from django.conf import settings

# Create your views here.
@api_view(['GET'])
def getProduct_images(request):
    try:
        product_images = Product_images.objects.all()
        serializer = Product_ImageSerializer(product_images, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);


@api_view(['GET'])
def getProduct_images_by_name(request):
    try:
        search_query = page = request.GET.get('imgName')
        with open( f'{settings.BASE_DIR}{search_query}', 'rb') as f:
            image_data = f.read()
        return HttpResponse(image_data, content_type='image/jpeg')
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);


@api_view(['GET'])
def get_product_image_id(request, product_id):
    try:
        product_images = Product_images.objects.filter(product_id=product_id)
    except Product_images.DoesNotExist:
        return Response({'error': 'Product images not found'}, status=
                        status.HTTP_404_NOT_FOUND)

    serializer = Product_ImageSerializer(product_images, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postProduct_images(request):
    try:
        serializer = Product_ImageSerializer(data=request.data)
        valid = serializer.is_valid(); # ! validate the response 
        if valid:
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);

@api_view(['DELETE'])
def deleteProduct_imagesById(request,id):
    try:
        num_deleted, _ = Product_images.objects.filter(id=id).delete()
        if num_deleted == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)       
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def updateProduct_imagesById(request,id):
    try:
        product_images = Product_images.objects.get(id=id)
        serializer = Product_ImageSerializer(product_images, data=request.data,partial=True )#? partial=True update only data provided by the body
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Product_images.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

# ----------------------------------------------------------------------------------------------------------
