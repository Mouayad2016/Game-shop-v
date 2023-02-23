from django.urls import path
from . import views
from django.conf import settings


urlpatterns = [

    # ? Note No need to add / att the end i already configured the setting so it will be there automatically

    # * Method : Get
    # * link:  http://127.0.0.1:8000/discount
    path('get', views.getReview),
    # * Method : Post 
    # * link:  http://127.0.0.1:8000/discount/post
    # * Form : { "rating": 1, "feedback": "good", "prod_id": 1, "user_id": 1}
    path('post', views.postReview),
    # * Method : Delete
    # * link:  http://127.0.0.1:8000/discount/id/delete 
    path('<int:id>/delete', views.deleteReviewById),
    # * Method : PUT
    # * link:  http://127.0.0.1:8000/discount/id/update 
    # * the data you pass will be uppdated ex : { "rating": 2, "feedback": "not good", "prod_id": 1, "user_id": 1} 
    path('<int:id>/update', views.updateReviewById),
]      
