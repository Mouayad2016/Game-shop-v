from rest_framework import serializers
from ...models import Shopping_cart
from ..product.serializer import ProductSerializer

class Shopping_cartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shopping_cart
        fields = '__all__'


class GetShopping_cartSerializer(serializers.ModelSerializer):
    Shopping_cart_product = ProductSerializer(many=True)
    # category_id = serializers.IntegerField()
    class Meta:
        model = Shopping_cart
        fields = '__all__'