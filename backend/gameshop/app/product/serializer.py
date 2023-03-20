from rest_framework import serializers
from ...models import Product , Categories, Product_images
from ..category.serializer import CategorySerializer
from ..product_image.serializer import Product_ImageSerializer

class ProductSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'

    def get_images(self, product):
        product_images = Product_images.objects.filter(product_id=product.id)
        return [image.image.url for image in product_images]


class GetProductSerializer(serializers.ModelSerializer):
    prod_category = CategorySerializer(many=True)
    images = serializers.SerializerMethodField()
    # category_id = serializers.IntegerField()

    class Meta:
        model = Product
        fields = '__all__'

    def get_images(self, product):
        product_images = Product_images.objects.filter(product_id=product.id)
        return [image.image.url for image in product_images]