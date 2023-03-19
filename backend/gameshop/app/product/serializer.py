from rest_framework import serializers
from ...models import Product , Categories, Product_images
from ..category.serializer import CategorySerializer
from ..product_image.serializer import Product_ImageSerializer

class ProductSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'

    def get_image(self, product):
        try:
            product_image = Product_images.objects.get(product_id=product.id)
            return product_image.image.url  # return the image path
        except Product_images.DoesNotExist:
            return None

class GetProductSerializer(serializers.ModelSerializer):
    prod_category = CategorySerializer(many=True)
    # category_id = serializers.IntegerField()
    class Meta:
        model = Product
        fields = '__all__'

