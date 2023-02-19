from rest_framework import serializers
from ...models import Shopping_cart

class Shopping_cartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shopping_cart
        fields = '__all__'