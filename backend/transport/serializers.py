from rest_framework_gis.serializers import GeoFeatureModelSerializer
from .models import Bustop

class BusStopSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = Bustop
        geo_field = "geom"
        fields = ('ogc_fid', 'name', 'highway')
        