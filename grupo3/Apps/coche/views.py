from rest_framework.response import Response
from rest_framework.views import APIView

from Apps.coche.models import Coche

class CocheView(APIView):
    def get(self, request):
        Coche = Coche.objects.all()
        return Response({"coche": Coche})

