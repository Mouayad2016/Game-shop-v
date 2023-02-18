from django.urls import path
from . import views





urlpatterns = [
    path('google-login', views.google_login, name='google-login'), #!  the name parameter in a URL pattern is used to give a name to the URL so that it can be referred to in your code using the name instead of the URL itself.
    path('google-auth-callback', views.google_auth_callback, name='google-auth-callback'),
    # ...
]