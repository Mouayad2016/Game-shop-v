from rest_framework import serializers
from ...models import Order_product

class Order_productSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order_product
        fields = '__all__'