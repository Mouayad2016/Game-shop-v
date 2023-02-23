from django.urls import path
from . import views
from django.conf import settings


urlpatterns = [

    # ? Note No need to add / att the end i already configured the setting so it will be there automatically

    # * Method : Get
    # * link:  http://127.0.0.1:8000/discount
    path('get', views.getDiscount),
    # * Method : Post 
    # * link:  http://127.0.0.1:8000/discount/post
    # * Form : { "title": 1, "discount_type": 1, "rate": 1, "code": 1, "admin_id": 1}
    path('post', views.postDiscount),
    # * Method : Delete
    # * link:  http://127.0.0.1:8000/discount/id/delete 
    path('<int:id>/delete', views.deleteDiscountById),
    # * Method : PUT
    # * link:  http://127.0.0.1:8000/discount/id/update 
    # * the data you pass will be uppdated ex : { "title": 2, "discount_type": 2, "rate": 2, "code": 2, "admin_id": 2} 
    path('<int:id>/update', views.updateDiscountById),
]      
