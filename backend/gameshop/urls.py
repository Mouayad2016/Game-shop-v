from django.urls import path
from . import views
from django.conf import settings


prodRout ="products";
categoryRout ="category";

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

]      
