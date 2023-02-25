from django.urls import path
from . import views

urlpatterns = [
    # ? Note No need to add / att the end i already configured the setting so it will be there automatically
    # * Method : Get
    # * link:  http://127.0.0.1:8000/order/get
    path('get', views.getAllUsers),
    # * Method : Post 
    # * link:  http://127.0.0.1:8000/order/post 
    # * Form : {"payment_way": "Credit Card", "user_id": null, "discount_code": "ABC123","state": true, "discount_id": 2}
    path('<int:id>', views.getUserById),

    path('post', views.postUser),
    # * Method : Delete
    # * link:  http://127.0.0.1:8000/order/id/delete 
    path('<int:id>/delete', views.deleteUserById),
    # * Method : PUT
    # * link:  http://127.0.0.1:8000/order/id/update 
    # * Form : {"payment_way": "Credit Card", "user_id": null, "discount_code": "ABC123","state": true, "discount_id": 2}
    path('<int:id>/update', views.updateUserById),

]      
