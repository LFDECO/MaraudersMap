from django.contrib.gis.db import models

# Create your models here.
class Bustop(models.Model):
    osm_id = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    highway = models.CharField(max_length=63, null=True, blank=True)
    way = models.PointField(srid=3857)
    
    class Meta:
        managed = False
        db_table = 'planet_osm_point'
        