from rest_framework import serializers
from ...models import Product_images

class Product_ImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True)

    class Meta:
        model = Product_images
        fields = ('id', 'product_id', 'image')

    def create(self, validated_data):
        # Get the uploaded file
        image = validated_data.pop('image')

        # Create a new Product_images object
        product_image = Product_images.objects.create(**validated_data)

        # Associate the uploaded file with the new Product_images object
        product_image.image.save(image.name, image)

        return product_image
