from django.urls import path
from Apps.coche.views import CocheView


app_name = "coche"
urlpatterns = [
    path('', CocheView.as_view()),
]
