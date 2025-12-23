from django.http import JsonResponse
from .models import GuestMessage
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Message, StatusMessage
from django.utils.timezone import now
import random
from rest_framework import generics
from .serializers import MessageSerializer, StatusMessageSerializer

def submit_message(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        message = request.POST.get('message')
        GuestMessage.objects.create(name=name, message=message)
        return JsonResponse({'status': 'success'})
    return JsonResponse({'error': 'Invalid request'}, status=400)

def message_list(request):
    # Fetch all messages from the Message model
    messages = Message.objects.all().order_by('-timestamp')  # Orders messages by most recent
    return render(request, 'guestMessages/message_list.html', {'messages': messages})

def index(request):
    messages = Message.objects.all().order_by('-timestamp')
    statusmessages = StatusMessage.objects.all().order_by('-created_at')
    return render(request, 'guestMessages/index.html', {'messages': messages, 'statusmessages': statusmessages})

def aboutme(request):
    return render(request, 'guestMessages/aboutmeIndex.html')

def webcomic(request):
    return render(request, 'guestMessages/webcomicIndex.html')

def portfolio(request):
    return render(request, 'guestMessages/portfolioIndex.html')

def links(request):
    return render(request, 'guestMessages/linksIndex.html')

class MessageListCreateView(generics.ListCreateAPIView):
    queryset = Message.objects.all().order_by('-timestamp')
    serializer_class = MessageSerializer

class StatusMessageListCreateView(generics.ListCreateAPIView):
    queryset = StatusMessage.objects.all().order_by('-created_at')
    serializer_class = StatusMessageSerializer
