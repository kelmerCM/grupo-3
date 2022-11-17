from django.contrib import admin
from django.urls import path
from django.urls import include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('cliente/', include('Apps.cliente.urls')),
    path('coche/', include('Apps.coche.urls')),
    path('marca/', include('Apps.marca.urls')),
    path('ventas/', include('Apps.ventas.urls')),
]
