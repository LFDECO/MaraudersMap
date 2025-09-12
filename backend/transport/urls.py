from django.urls import path
from .views import BusStopList

urlpatterns = [
    path('busstops/', BusStopList.as_view(), name='busstop-list'),
]
