from rest_framework import viewsets, filters, permissions
from .models import Lead, Contact, Account, Company, Deal
from .serializers import LeadSerializer, ContactSerializer, AccountSerializer, CompanySerializer, DealSerializer


class IsReadCreateUpdateDelete(permissions.IsAuthenticatedOrReadOnly):
    pass

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all().order_by("-created_at")
    serializer_class = CompanySerializer
    permission_classes = [IsReadCreateUpdateDelete]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["name", "domain"]
    ordering_fields = ["created_at", "name"]

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all().order_by("-created_at")
    serializer_class = ContactSerializer
    permission_classes = [IsReadCreateUpdateDelete]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["first_name", "last_name", "email", "title"]
    ordering_fields = ["created_at", "last_name"]

class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

class DealViewSet(viewsets.ModelViewSet):
    queryset = Deal.objects.all().order_by("-created_at")
    serializer_class = DealSerializer
    permission_classes = [IsReadCreateUpdateDelete]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["name", "stage", "owner"]
    ordering_fields = ["created_at", "amount", "expected_close"]