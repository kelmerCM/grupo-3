from django.urls import path
from Apps.marca.views import MarcaView

app_name = "marca"
urlpatterns = [
    path('', MarcaView.as_view()),
]
