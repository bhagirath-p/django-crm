from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from crm.views import LeadViewSet, ContactViewSet, AccountViewSet, CompanyViewSet, DealViewSet

router = DefaultRouter()
router.register(r'leads', LeadViewSet)
router.register(r'contacts', ContactViewSet)
router.register(r'accounts', AccountViewSet)
router.register(r'companies', CompanyViewSet, basename='company')
router.register(r'deals', DealViewSet, basename='deal')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
