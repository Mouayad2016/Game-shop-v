from django.urls import path
from . import views
urlpatterns = [

    # ? Note No need to add / att the end i already configured the setting so it will be there automatically
    path('get', views.download_file, name='download_local_file'),

]      
