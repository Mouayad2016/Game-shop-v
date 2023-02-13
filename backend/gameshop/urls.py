from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    path('', views.getProduct),
    path('post/', views.postProdcut),
    path('category/', views.getCategory),
    path('category/post/', views.postCategory),
]  