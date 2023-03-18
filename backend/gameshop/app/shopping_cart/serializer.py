from rest_framework import serializers
from ...models import Shopping_cart
from ...models import Product,CartItem
from ..product.serializer import ProductSerializer

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'



class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    class Meta:
        model = CartItem
        fields = ('id', 'product', 'quantity')

class GetShopping_cartSerializer(serializers.ModelSerializer):
    cart_items = CartItemSerializer(source='cartitem_set', many=True)
    class Meta:
        model = Shopping_cart
        fields = ('id', 'user_id', 'created_at', 'updated_at', 'cart_items')


# class GetShopping_cartSerializer(serializers.ModelSerializer):
#     # user = serializers.PrimaryKeyRelatedField(read_only=True, default=serializers.CurrentUserDefault())
#     products = serializers.StringRelatedField(many=True, source='prod_cart')

#     class Meta:
#         model = Shopping_cart
#         fields = '__all__'
