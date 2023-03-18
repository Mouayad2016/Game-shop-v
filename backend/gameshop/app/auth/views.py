import json
from django.shortcuts import redirect
from django.conf import settings
from django.urls import reverse
from urllib.parse import urlencode
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response

from google.oauth2 import id_token
from rest_framework import status

from google.auth.transport import requests
import requests as httpreq

@api_view(['GET'])
def google_login(request):
    # Define the URL of the Google authentication endpoint
    google_auth_url = "https://accounts.google.com/o/oauth2/auth"
    print(request.build_absolute_uri(reverse("google-auth-callback")))
    # Set the parameters for the authentication request
    params = {
        "response_type": "code",
        "client_id": settings.GOOGLE_OAUTH_CLIENT_ID,
        "redirect_uri": request.build_absolute_uri(reverse("google-auth-callback")),
        "scope": "openid email profile"
    }
    
    # Redirect the user to the Google authentication page
    return redirect(google_auth_url + "?" + urlencode(params))


@api_view(['GET'])
def google_auth_callback(request):
    # Verify the Google authentication response
    try:
        token_url = "https://oauth2.googleapis.com/token"
        token_params = {
            "grant_type": "authorization_code",
            "code": request.GET.get("code"),
            "redirect_uri": request.build_absolute_uri(reverse("google-auth-callback")),
            "client_id": settings.GOOGLE_OAUTH_CLIENT_ID,
            "client_secret": settings.GOOGLE_OAUTH_CLIENT_SECRET
        }
        token_response =httpreq.request("POST",token_url, data=token_params)
        access_token = token_response.json()["access_token"]
        # req = requests.Request()

        id_token_info = id_token.verify_oauth2_token(
            token_response.json()["id_token"], requests.Request(), settings.GOOGLE_OAUTH_CLIENT_ID, clock_skew_in_seconds =10)
        
        # Create or update the user profile
        user, created = User.objects.get_or_create(email=id_token_info["email"])
        user.username = id_token_info["email"]
        user.first_name = id_token_info.get("given_name", "")
        user.last_name = id_token_info.get("family_name", "")
        user.save()
        
        # Log the user in and redirect to the home page
        user.backend = "django.contrib.auth.backends.ModelBackend"
        if user is not None:
            login(request, user)
            return redirect(f"http://localhost:3000/?first_name={user.first_name}&last_name={user.last_name}&id={user.id}&email={user.email}")        
        else:
            return Response({"error": "Unable to log in."}, status=status.HTTP_400_BAD_REQUEST)
    except ValueError as err: 
        print(err)
        return err