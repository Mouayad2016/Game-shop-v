from django.urls import path
from . import views
from django.conf import settings



urlpatterns = [

    # ? Note No need to add / att the end i already configured the setting so it will be there automatically

    # * Method : Get
    # * link:  http://127.0.0.1:8000/products/get/id
    path('get/<int:id>', views.getProductByProductId),
    # * Method : Get
    # * link:  http://127.0.0.1:8000/products 
    path('get', views.getProduct),     
    # * Method : Get
    # * link:  http://127.0.0.1:8000/products/category_id/get
    path('<int:id>/get', views.getProductByCategory),  
    # * Method : Get
    # * link:  http://127.0.0.1:8000/products/get/text
    path('get/<str:text>', views.getProductFuzzyQuery),
    # * Method : Post
    # * link:  http://127.0.0.1:8000/products/post 
    # * Form : { "name": "prod_1","description": "aösmdöasmdas dlkas dlkas dkas dl askld asld kas","stock":123 }
    path('post', views.postProdcut),
    # * Method : Delete
    # * link:  http://127.0.0.1:8000/products/id/delete 
    path('<int:id>/delete', views.deleteProdcutById),
    # * Method : PUT
    # * link:  http://127.0.0.1:8000/products/id/update 
    # * the data you pass will be uppdated ex : { "name":"mouayad", "description": "uppdated", "stock": 22}
    path('<int:id>/update', views.updateProductById),
]