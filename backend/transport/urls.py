from django.urls import path
from .views import AllHighwaysList

urlpatterns = [
    path('all-highways/', AllHighwaysList.as_view(), name='all-highways'),
]
