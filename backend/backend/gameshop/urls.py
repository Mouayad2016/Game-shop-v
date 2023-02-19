from django.urls import path
from . import views
from django.conf import settings


prodRout ="products";
categoryRout ="category";
shopping_cartRout = "shopping_cart"
discountRout = "discount"

urlpatterns = [

    # ? Note No need to add / att the end i already configured the setting so it will be there automatically

    # * Method : Get
    # * link:  http://127.0.0.1:8000/products 
    path(f'{prodRout}', views.getProduct),     
    # * Method : Post
    # * link:  http://127.0.0.1:8000/products/post 
    # * Form : { "name": "prod_1","description": "aösmdöasmdas dlkas dlkas dkas dl askld asld kas","stock":123 }
    path(f'{prodRout}/post', views.postProdcut),
    # * Method : Delete
    # * link:  http://127.0.0.1:8000/products/id/delete 
    path(f'{prodRout}/<int:id>/delete', views.deleteProdcutById),
    # * Method : PUT
    # * link:  http://127.0.0.1:8000/products/id/update 
    # * the data you pass will be uppdated ex : { "name":"mouayad", "description": "uppdated", "stock": 22}
    path(f'{prodRout}/<int:id>/update', views.updateProductById),
    
    # * Method : Get
    # * link:  http://127.0.0.1:8000/category
    path(f'{categoryRout}', views.getCategory),
    # * Method : Post 
    # * link:  http://127.0.0.1:8000/category/post 
    # * Form : { "name":"CAT_1","creator_admin_id_id": 1, "description":"asdaaaaaaaaaaaa" }
    path(f'{categoryRout}/post', views.postCategory),
    # * Method : Delete
    # * link:  http://127.0.0.1:8000/category/id/delete 
    path(f'{categoryRout}/<int:id>/delete', views.deleteCategoryById),
    # * Method : PUT
    # * link:  http://127.0.0.1:8000/category/id/update 
    # * the data you pass will be uppdated ex : { "name":"mouayad", "description": "uppdated"} 
    path(f'{categoryRout}/<int:id>/update', views.updateCategoryById),

    # * Method : Get
    # * link:  http://127.0.0.1:8000/shopping_cart
    path(f'{shopping_cartRout}', views.getShopping_cart),
    # * Method : Post 
    # * link:  http://127.0.0.1:8000/shopping_cart/post
    # * Form : { "user_id": 1}
    path(f'{shopping_cartRout}/post', views.postCategory),
    # * Method : Delete
    # * link:  http://127.0.0.1:8000/shopping_cart/id/delete 
    path(f'{shopping_cartRout}/<int:id>/delete', views.deleteShopping_cartById),
    # * Method : PUT
    # * link:  http://127.0.0.1:8000/shopping_cart/id/update 
    # * the data you pass will be uppdated ex : { "user_id": 2} 
    path(f'{shopping_cartRout}/<int:id>/update', views.updateShopping_cartById),

     # * Method : Get
    # * link:  http://127.0.0.1:8000/discount
    path(f'{discountRout}', views.getDiscount),
    # * Method : Post 
    # * link:  http://127.0.0.1:8000/discount/post
    # * Form : { "title": 1, "discount_type": 1, "rate": 1, "code": 1, "admin_id": 1}
    path(f'{discountRout}/post', views.postDiscount),
    # * Method : Delete
    # * link:  http://127.0.0.1:8000/discount/id/delete 
    path(f'{discountRout}/<int:id>/delete', views.deleteDiscountById),
    # * Method : PUT
    # * link:  http://127.0.0.1:8000/discount/id/update 
    # * the data you pass will be uppdated ex : { "title": 2, "discount_type": 2, "rate": 2, "code": 2, "admin_id": 2} 
    path(f'{discountRout}/<int:id>/update', views.updateDiscountById),

]      
