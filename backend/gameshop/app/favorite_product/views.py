from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from ...models import Favorite_product, Product
from .serializer import Favorite_productSerializer


# Create your views here.
@api_view(['GET'])
def getFavorite_produce(request):
    try:
        favorite_product = Favorite_product.objects.all()
        serializer = Favorite_productSerializer(favorite_product, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);

@api_view(['GET'])
def getFavorite_produceByUser_id(request, user_id):
    try:
        favorite_product = Favorite_product.objects.get(user_id_id=user_id)
        serializer = Favorite_productSerializer(favorite_product, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);

@api_view(['GET'])
def getFavorite_productByProduct_id(request, product_id=None):
    try:
        if product_id is not None:
            favorite_product = Favorite_product.objects.filter(product_id_id=product_id)
        else:
            favorite_product = Favorite_product.objects.all()
        
        if favorite_product.exists():
            serializer = Favorite_productSerializer(favorite_product, many=True)
            return Response({'exists': True, 'favorites': serializer.data})
        else:
            return Response({'exists': False})
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def postFavorite_product(request):
    try:
        serializer = Favorite_productSerializer(data=request.data)
        valid = serializer.is_valid(); # ! validate the response 
        if valid:
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);

@api_view(['POST'])
def postFavorite_productByUser_idAndProduct_id(request, user_id, product_id):
    try:
        product = Product.objects.get(id=product_id) # get the Product instance based on the provided product_id
        favorite_product = Favorite_product.objects.create(user_id_id=user_id, product_id_id=product.id)
        serializer = Favorite_productSerializer(favorite_product, data=request.data)
        valid = serializer.is_valid() # validate the response
        if valid:
            serializer.save()
            return Response({"message": "Product added to favorites."}, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors)
    except Exception as e:
        return Response({'error': 'User or product does not exist'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deleteFavorite_productById(request,id):
    try:
        num_deleted, _ = Favorite_product.objects.filter(id=id).delete()
        if num_deleted == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)       
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def updateFavorite_productById(request,id):
    try:
        favorite_product = Favorite_product.objects.get(id=id)
        serializer = Favorite_productSerializer(favorite_product, data=request.data,partial=True )#? partial=True update only data provided by the body
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Favorite_product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

# ----------------------------------------------------------------------------------------------------------
