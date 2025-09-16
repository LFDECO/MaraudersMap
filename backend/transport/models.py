from django.contrib.gis.db import models

# Create your models here.
class Bustop(models.Model):
    ogc_fid = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    highway = models.CharField(max_length=63, null=True, blank=True)
    geom = models.PointField(srid=4326)
    
    class Meta:
        managed = False
        db_table = 'chennai_bus_stops'
        