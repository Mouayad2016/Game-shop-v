from rest_framework import serializers
from ...models import Product_images

class Product_ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product_images
        fields = '__all__'