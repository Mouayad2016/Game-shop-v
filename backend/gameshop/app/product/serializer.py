from rest_framework import serializers
from ...models import Product , Categories
from ..category.serializer import CategorySerializer

class ProductSerializer(serializers.ModelSerializer):
    # category_id = serializers.IntegerField()
    class Meta:
        model = Product
        fields = '__all__'
  

class GetProductSerializer(serializers.ModelSerializer):
    prod_category = CategorySerializer(many=True)
    # category_id = serializers.IntegerField()
    class Meta:
        model = Product
        fields = '__all__'