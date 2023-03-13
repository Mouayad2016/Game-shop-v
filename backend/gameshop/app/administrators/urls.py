from django.urls import path
from . import views
from django.conf import settings


urlpatterns = [

    # ? Note No need to add / att the end i already configured the setting so it will be there automatically

    # * Method : Get
    # * link:  http://127.0.0.1:8000/administrators/get
    path('get', views.getAdministrators),
    # * Method : Get
    # * link:  http://127.0.0.1:8000/administrators/id/get
    path('<int:id>/get', views.getAdministratorByID),
    # * Method : Get
    # * link:  http://127.0.0.1:8000/administrators/get/username/password
    # * Form : { "username": "1", "password": "1"}
    path('get/<str:username>/<str:password>', views.getAdministratorByUsernameAndPassword),
    # * Method : Post 
    # * link:  http://127.0.0.1:8000/administrators/post
    # * Form : { "username": "1", "password": "1"}
    path('post', views.postAdministrators),
    # * Method : Delete
    # * link:  http://127.0.0.1:8000/administrators/id/delete 
    path('<int:id>/delete', views.deleteAdministratorsById),
    # * Method : PUT
    # * link:  http://127.0.0.1:8000/administrators/id/update 
    # * the data you pass will be uppdated ex : { "username": "2", "password": "2"} 
    path('<int:id>/update', views.updateAdministratorsById),
]      
