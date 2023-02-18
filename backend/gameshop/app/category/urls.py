from django.urls import path
from ..category import views

categoryRout ="category";
urlpatterns = [

    # ? Note No need to add / att the end i already configured the setting so it will be there automatically
    
    # * Method : Get
    # * link:  http://127.0.0.1:8000/category
    path('get', views.getCategory),
    # * Method : Post 
    # * link:  http://127.0.0.1:8000/category/post 
    # * Form : { "name":"CAT_1","creator_admin_id_id": 1, "description":"asdaaaaaaaaaaaa" }
    path('post', views.postCategory),
    # * Method : Delete
    # * link:  http://127.0.0.1:8000/category/id/delete 
    path('<int:id>/delete', views.deleteCategoryById),
    # * Method : PUT
    # * link:  http://127.0.0.1:8000/category/id/update 
    # * the data you pass will be uppdated ex : { "name":"mouayad", "description": "uppdated"} 
    path('<int:id>/update', views.updateCategoryById),

]      
