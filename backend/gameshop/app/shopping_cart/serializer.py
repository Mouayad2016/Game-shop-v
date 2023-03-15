from rest_framework import serializers
from ...models import Shopping_cart, Product
from ..product.serializer import ProductSerializer

class Shopping_cartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shopping_cart
        fields = '__all__'


class GetShopping_cartSerializer(serializers.ModelSerializer):
    prod_cart = Shopping_cartSerializer(many=True)
    # category_id = serializers.IntegerField()
    class Meta:
        model = Shopping_cart
        fields = '__all__'

class GetDetailShopping_cartSerializer(serializers.ModelSerializer):
    # category_id = serializers.IntegerField()
    class Meta:
        model = Product
        fields = '__all__'