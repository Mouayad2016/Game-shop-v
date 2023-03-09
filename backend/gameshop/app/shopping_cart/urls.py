from django.urls import path
from . import views



urlpatterns = [
    # ? Note No need to add / att the end i already configured the setting so it will be there automatically
    # * Method : Post 
    # * link:  http://127.0.0.1:8000/shopping_cart/post
    # * Form : { "user_id": 1}
    path('get', views.getShopping_cart),
    # * Method : Get
    # * link:  http://127.0.0.1:8000/cart/id/get
    path('<int:id>/get', views.getShopping_caartByUser_id), 

    # * Method : Post
    # * link:  http://127.0.0.1:8000/cart/userId/product_id/postProduct
    path('<int:userId>/<int:product_id>/postProduct', views.addProductToShopping_cart),
    # * Method : Post
    # * link:  http://127.0.0.1:8000/cart/null/product_id/postProduct
    path('null/<int:product_id>/postProduct', views.addProductToShopping_cart),

    # * Method : Post
    path('post', views.postShopping_cart),
    # * Method : Delete
    # * link:  http://127.0.0.1:8000/shopping_cart/id/delete 
    path('<int:id>/delete', views.deleteShopping_cartById),
    # * Method : PUT
    # * link:  http://127.0.0.1:8000/shopping_cart/id/update 
    # * the data you pass will be uppdated ex : { "user_id": 2} 
    path('<int:id>/update', views.updateShopping_cartById),

]      
