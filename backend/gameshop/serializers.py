from rest_framework import serializers
from gameshop.models import Product
from .models import Categories


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

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Categories
        fields=(
            'id',
            'name',
            'description',
            'creator_admin_id',
            'deleted_by_admin_id',
            'created_at',
            'updated_at')