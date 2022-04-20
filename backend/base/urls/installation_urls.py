from django.urls import path
from base.views import installation_views as views


urlpatterns = [
    path('', views.createInstallation, name="installation-create"),
]