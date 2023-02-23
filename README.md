#

![Logo](https://cdn3.f-cdn.com/contestentries/24294/898789/51b88d6bedfe6_thumb900.jpg)

![GitHub last commit](https://img.shields.io/github/last-commit/Mouayad2016/Game-shop-v)

![PyPI - Python Version](https://img.shields.io/pypi/pyversions/django)

![npm](https://img.shields.io/npm/v/npm)

## E-commerce website

This project is an e-commerce website selling video games.

## Frameworks

We've decided to use Python and Django for our backend structure.

For the frontend the framework in use is React with Bootstrap.

And for the API the application in use is Postman.

## API Endpoints

| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /products/post| To create a new product |
| POST | /category/post | To create a new category |
| POST | /shopping_cart/post | To create a new shopping cart |
| POST | /discount/post | To create a new discount |
| GET | /products | To retrieve all products |
| GET | /category | To retrieve all categories |
| GET | /shopping_cart | To retrieve all shopping carts |
| GET | /discount | To retrieve all discounts  |
| PUT | /products/<int:id>/update | To edit the details of product |
| PUT | /category/<int:id>/update | To edit the details of a category |
| PUT | /shopping_cart/<int:id>/update | To edit the details of a shopping cart |
| PUT | /discount/<int:id>/update | To edit the details of a discount |
| DELETE | /products/<int:id>/delete | To delete a product |
| DELETE | /category/<int:id>/delete | To delete a category |
| DELETE | /shopping_cart/<int:id>/delete | To a shopping cart |
| DELETE | /discount/<int:id>/delete | To delete a discount |

## Installation

First install globally

```bash
  pip install pipenv
```

On Mac

```bash
  pip3 install pipenv
```

Then go into backend directory and install django

```bash
  cd backend
  pipenv install django
```

And activate the environment

```bash
  pipenv shell
```

## Deployment

To deploy this project run

```bash
  python manage.py runserver
```

## Usage/Examples

We're using serializers instead of regular django form.

```python
serializers.py

from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
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
----

views.py

from .serializers import ProductSerializer

@api_view(['GET'])
def getProduct(request):
    try:
        product = Product.objects.all()
        serializer = ProductSerializer(product, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response(str(e), status= status.HTTP_400_BAD_REQUEST);
```

## Documentation

[Documentation](https://dalarnauniversity-my.sharepoint.com/:w:/g/personal/h17mohao_du_se/EVmgNsWvvP9AvFGXYsWU_gAByXA_GOFfB1LPlco5qVEEqw?e=BaXcSm)

## License

[Need to add!](https://choosealicense.com/licenses/mit/)
