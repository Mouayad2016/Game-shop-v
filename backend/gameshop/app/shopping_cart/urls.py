from django.urls import path
from . import views



urlpatterns = [
    # ? Note No need to add / att the end i already configured the setting so it will be there automatically
    path('get', views.getShopping_cart),
    path('<int:id>/get/cartId', views.getShopping_cart_by_id),
    path('<int:id>/get', views.getShoppingCartByUserId), 

    

    # * Method : Post
    # * link:  http://127.0.0.1:8000/cart/userId/product_id/postProduct
    path('<int:cart_id>/<int:product_id>/postProduct/cartId', views.addProductToShopping_cart_by_cart_id),

    
    path('<int:product_id>/postProduct', views.addToShopingCartNoAuthUser),
    path('<int:userId>/<int:product_id>/postProduct', views.addProductToShopping_cartAuthUser),
    path('<int:cartId>/<int:product_id>/deleteProduct', views.DeleteProductFromShoppingCartByCartId),

    # * Method : Post
    # * link:  http://127.0.0.1:8000/cart/null/product_id/postProduct
    # path('null/<int:product_id>/postProduct', views.addProductToShopping_cart),

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
