from rest_framework import serializers
from ...models import Favorite_product
class Favorite_productSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite_product
        fields = '__all__'