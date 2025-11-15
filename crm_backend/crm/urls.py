from rest_framework.routers import DefaultRouter
from .views import CompanyViewSet, ContactViewSet, DealViewSet, LeadViewSet, AccountViewSet

router = DefaultRouter()
router.register("companies", CompanyViewSet)
router.register("contacts", ContactViewSet)
router.register("deals", DealViewSet)
router.register("leads", LeadViewSet)
router.register("accounts", AccountViewSet)

urlpatterns = router.urls
