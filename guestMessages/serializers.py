from rest_framework import serializers
from .models import Message, StatusMessage

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'

class StatusMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = StatusMessage
        fields = '__all__'