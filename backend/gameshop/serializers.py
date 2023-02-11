from  rest_framework import serializers
from gameshop.models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        models = Product
        fields=('id',
                'name',
                'description',
                'stock',
                'review_id',
                'discout_id',
                'creator_admin_id',
                'is_deleted',
                'deleted_by_admin_id',
                'created_at',
                'updated_at')