from rest_framework.response import Response
from rest_framework.views import APIView

from Apps.marca.models import Marca

class MarcaView(APIView):
    def get(self, request):
        Marca = Marca.objects.all()
        return Response({"marca": Marca})

