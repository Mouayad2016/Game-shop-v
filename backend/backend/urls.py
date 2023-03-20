"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include('gameshop.urls')),
    path('auth/', include('gameshop.app.auth.urls')),
    path('user/', include('gameshop.app.user.urls')),
    path('products/', include('gameshop.app.product.urls')),
    path('category/', include('gameshop.app.category.urls')),
    path('cart/', include('gameshop.app.shopping_cart.urls')),
    path('order/', include('gameshop.app.order.urls')),
    path('discount/', include('gameshop.app.discount.urls')),
    path('review/', include('gameshop.app.review.urls')),
    path('administrators/', include('gameshop.app.administrators.urls')),
    path('payment/', include('gameshop.app.paybal.urls')),
    path('product_image/', include('gameshop.app.product_image.urls')),
    path('favorite_product/', include('gameshop.app.favorite_product.urls')),
    path('order_product/', include('gameshop.app.order_product.urls')),
    path('adress/', include('gameshop.app.adress.urls')),
    path('file/', include('gameshop.app.download.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
