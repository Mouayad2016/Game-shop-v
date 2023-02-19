from django.urls import path
from . import views

categoryRout ="order";
urlpatterns = [
    # ? Note No need to add / att the end i already configured the setting so it will be there automatically
    # * Method : Get
    # * link:  http://127.0.0.1:8000/order/get
    path('get', views.getOrders),
    # * Method : Post 
    # * link:  http://127.0.0.1:8000/order/post 
    # * Form : {"payment_way": "Credit Card", "user_id": null, "discount_code": "ABC123","state": true, "discount_id": 2}

    path('post', views.postOrder),
    # * Method : Delete
    # * link:  http://127.0.0.1:8000/order/id/delete 
    path('<int:id>/delete', views.deleteOrderById),
    # * Method : PUT
    # * link:  http://127.0.0.1:8000/order/id/update 
    # * Form : {"payment_way": "Credit Card", "user_id": null, "discount_code": "ABC123","state": true, "discount_id": 2}
    path('<int:id>/update', views.updateOrderById),

]      
