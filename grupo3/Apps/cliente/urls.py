from django.urls import path
from Apps.cliente.views import ClienteList, ClienteDetail

app_name = "cliente"
urlpatterns = [
    path('', ClienteList.as_view()),
    path('<int:pk>', ClienteDetail.as_view()),
]
