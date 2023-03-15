from django.urls import path
from . import views
from django.conf import settings


urlpatterns = [

    # * Method : Get
    # * link:  http://127.0.0.1:8000/product_image/get
    path('get', views.getProduct_images),
    # * Method : Post 
    # * link:  http://127.0.0.1:8000/product_image/post
    # * Form : { "product_id": 1, "image": imagePath}
    path('post', views.postProduct_images),
    # * Method : Delete
    # * link:  http://127.0.0.1:8000/product_image/id/delete 
    path('<int:id>/delete', views.deleteProduct_imagesById),
    # * Method : PUT
    # * link:  http://127.0.0.1:8000/product_image/id/update 
    # * the data you pass will be uppdated ex : { "product_id": 1, "image": imagePath} 
    path('<int:id>/update', views.updateProduct_imagesById),
]      
