from django.urls import path
from . import views
from django.conf import settings


urlpatterns = [

    # * Method : Get
    # * link:  http://127.0.0.1:8000/favorite_product/get
    path('get', views.getFavorite_produce),
    # * Method : Get
    # * link:  http://127.0.0.1:8000/favorite_product/get/user_id
    path('get/<int:user_id>', views.getFavorite_produceByUser_id),
    # * Method : Post 
    # * link:  http://127.0.0.1:8000/favorite_product/post
    # * Form : { "product_id": 1, "user_id": 1}
    path('post', views.postFavorite_product),
    # * Method : Delete
    # * link:  http://127.0.0.1:8000/favorite_product/id/delete 
    path('<int:id>/delete', views.deleteFavorite_productById),
    # * Method : PUT
    # * link:  http://127.0.0.1:8000/favorite_product/id/update 
    # * the data you pass will be uppdated ex : { "product_id": 1, "user_id": 1} 
    path('<int:id>/update', views.updateFavorite_productById),
]      
