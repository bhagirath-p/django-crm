from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from crm.views import LeadViewSet, ContactViewSet, AccountViewSet, CompanyViewSet, DealViewSet

router = DefaultRouter()
router.register(r'leads', LeadViewSet)
router.register(r'contacts', ContactViewSet)
router.register(r'accounts', AccountViewSet)
router.register(r'companies', CompanyViewSet, basename='company')
router.register(r'deals', DealViewSet, basename='deal')

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),

    # JWT Auth
    path("api/auth/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/auth/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
