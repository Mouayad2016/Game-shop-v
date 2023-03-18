from rest_framework import serializers
from ...models import Favorite_product, Product

class ProductField(serializers.RelatedField):
    def to_representation(self, value):
        return value.id

class Favorite_productSerializer(serializers.ModelSerializer):
    product_id = ProductField(queryset=Product.objects.all(), required=False)

    class Meta:
        model = Favorite_product
        fields = ["user_id", "product_id"]
