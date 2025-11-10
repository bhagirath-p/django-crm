import rest_framework
from rest_framework import serializers

from .models import Lead, Contact, Account, Deal, Company


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'


class DealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deal
        fields = "__all__"


class CompanySerializer(serializers.ModelSerializer):
    contacts = ContactSerializer(many=True, read_only=True)
    deals = DealSerializer(many=True, read_only=True)

    class Meta:
        model = Company
        fields = ["id", "name", "domain", "created_at", "contacts", "deals"]