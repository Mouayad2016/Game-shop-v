from rest_framework import serializers
from ...models import Administrators
class AdministratorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Administrators
        fields = '__all__'