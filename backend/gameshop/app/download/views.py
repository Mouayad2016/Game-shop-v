import os
from django.http import FileResponse
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from django.conf import settings

@api_view(['GET'])
def download_file(request):
    BASE_DIR = settings.BASE_DIR
    file_path = os.path.join(BASE_DIR, 'gameshop/app/download/zip_2MB.zip') 
    try:
        file = open(file_path, 'rb')
        response = FileResponse(file)
            # Set the appropriate headers for downloading the file
        response['Content-Disposition'] = f'attachment; filename="{os.path.basename(file_path)}"'
        response['Content-Type'] = 'application/octet-stream'

        return response
    except FileNotFoundError:
        # Handle the case where the file is not found
        return Response('File not found', status=404)
    except Exception as e:
        # Handle other exceptions that may occur
        return Response(f'Error: {e}', status=500)

