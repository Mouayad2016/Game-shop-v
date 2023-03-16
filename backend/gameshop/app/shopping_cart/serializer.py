from rest_framework import serializers
from ...models import Shopping_cart



class GetShopping_cartSerializer(serializers.ModelSerializer):
    # user = serializers.PrimaryKeyRelatedField(read_only=True, default=serializers.CurrentUserDefault())
    products = serializers.StringRelatedField(many=True, read_only=True, source='prod_cart')

    class Meta:
        model = Shopping_cart
        fields = '__all__'

