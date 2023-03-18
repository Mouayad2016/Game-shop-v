from rest_framework import serializers
from ...models import Shopping_cart
from ...models import Product
from ..product.serializer import ProductSerializer

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class GetShopping_cartSerializer(serializers.ModelSerializer):
    prod_cart = ProductSerializer(many=True)

    class Meta:
        model = Shopping_cart
        fields = '__all__'


# class GetShopping_cartSerializer(serializers.ModelSerializer):
#     # user = serializers.PrimaryKeyRelatedField(read_only=True, default=serializers.CurrentUserDefault())
#     products = serializers.StringRelatedField(many=True, source='prod_cart')

#     class Meta:
#         model = Shopping_cart
#         fields = '__all__'
