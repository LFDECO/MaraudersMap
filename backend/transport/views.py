from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Bustop
from .serializers import BusStopSerializer

class AllHighwaysList(APIView):

    def get(self, request):
        data = {}

        # Filter by each category
        bus_stops = Bustop.objects.filter(highway='bus_stop')
        crossings = Bustop.objects.filter(highway='crossing')
        traffic_signals = Bustop.objects.filter(highway='traffic_signals')

        # Serialize each queryset
        data['bus_stops'] = BusStopSerializer(bus_stops, many=True).data
        data['crossings'] = BusStopSerializer(crossings, many=True).data
        data['traffic_signals'] = BusStopSerializer(traffic_signals, many=True).data

        return Response(data)
