from django.urls import path
from . import views
from django.conf import settings


urlpatterns = [

    # ? Note No need to add / att the end i already configured the setting so it will be there automatically

    # * Method : Get
    # * link:  http://127.0.0.1:8000/adress/get
    path('get', views.getAdress),
    # * Method : Post 
    # * link:  http://127.0.0.1:8000/adress/post
    # * Form : { "order_id": 1, "city": "xxx", "country": "xxx", "post_number": 1, "street_name": "xxx", "co_adress": "xxx"}
    path('post', views.postAdress),
    # * Method : Delete
    # * link:  http://127.0.0.1:8000/adress/id/delete 
    path('<int:id>/delete', views.deleteAdressById),
    # * Method : PUT
    # * link:  http://127.0.0.1:8000/adress/id/update 
    # * the data you pass will be uppdated ex : { "order_id": 1, "city": "xxx", "country": "xxx", "post_number": 1, "street_name": "xxx", "co_adress": "xxx"} 
    path('<int:id>/update', views.updateAdressById),
]      
