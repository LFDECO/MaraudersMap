from rest_framework import generics
from .models import Bustop
from .serializers import BusStopSerializer

class BusStopList(generics.ListAPIView):
    serializer_class = BusStopSerializer

    def get_queryset(self):
        return Bustop.objects.filter(highway='bus_stop')
