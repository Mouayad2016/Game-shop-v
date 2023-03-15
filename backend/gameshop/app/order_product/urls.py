from django.urls import path
from . import views
from django.conf import settings


urlpatterns = [

    # ? Note No need to add / att the end i already configured the setting so it will be there automatically

    # * Method : Get
    # * link:  http://127.0.0.1:8000/order_product/get
    path('get', views.getOrder_product),
    # * Method : Get
    # * link:  http://127.0.0.1:8000/order_product/get/order_id
    path('get/<int:order_id>', views.getOrder_productByOrder_id),
    # * Method : Post 
    # * link:  http://127.0.0.1:8000/order_product/post
    # * Form : { "order_id": 1, "product_id": 1}
    path('post', views.postOrder_product),
    # * Method : Delete
    # * link:  http://127.0.0.1:8000/order_product/id/delete 
    path('<int:id>/delete', views.deleteOrder_productById),
    # * Method : PUT
    # * link:  http://127.0.0.1:8000/order_product/id/update 
    # * the data you pass will be uppdated ex : { "order_id": 1, "product_id": 1}
    path('<int:id>/update', views.updateOrder_productById),
]      
