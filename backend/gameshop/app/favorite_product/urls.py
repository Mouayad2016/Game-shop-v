from django.urls import path
from . import views
from django.conf import settings


urlpatterns = [

    # * Method : Get
    # * link:  http://127.0.0.1:8000/favorite_product/get
    path('get', views.getFavorite_produce),
    # * Method : Get
    # * link:  http://127.0.0.1:8000/favorite_product/get/user/user_id
    path('get/user/<int:user_id>', views.getFavorite_produceByUser_id),
    # * Method : Get
    # * link:  http://127.0.0.1:8000/favorite_product/get/product/product_id
    path('get/product/<int:product_id>', views.getFavorite_productByProduct_id),
    # * Method : Post 
    # * link:  http://127.0.0.1:8000/favorite_product/post
    # * Form : { "product_id": 1, "user_id": 1}
    path('post', views.postFavorite_product),
    # * Method : Post 
    # * link:  http://127.0.0.1:8000/favorite_product/post/user_id/product_id
    # * Form : { "product_id": 1, "user_id": 1}
    path('post/<int:user_id>/<int:product_id>', views.postFavorite_productByUser_idAndProduct_id),
    # * Method : Deletes
    # * link:  http://127.0.0.1:8000/favorite_product/id/delete 
    path('<int:id>/delete', views.deleteFavorite_productById),
    # * Method : PUT
    # * link:  http://127.0.0.1:8000/favorite_product/id/update 
    # * the data you pass will be uppdated ex : { "product_id": 1, "user_id": 1} 
    path('<int:id>/update', views.updateFavorite_productById),
]      
