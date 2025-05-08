from django.http import JsonResponse
from .models import GuestMessage
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Message
from django.utils.timezone import now

def submit_message(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        message = request.POST.get('message')
        GuestMessage.objects.create(name=name, message=message)
        return JsonResponse({'status': 'success'})
    return JsonResponse({'error': 'Invalid request'}, status=400)

def index(request):
    messages = Message.objects.all().order_by('-timestamp')  # Fetch messages, ordered by most recent
    return render(request, 'guestMessages/index.html', {'messages': messages})


@csrf_exempt  # Only for testing! In production, use CSRF tokens instead.
def post_message(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        message = data.get('message')

        if name and message:
            new_message = Message.objects.create(
                name=name,
                message=message,
                timestamp=now()
            )
            return JsonResponse({
                'status': 'success',
                'message_data': {
                    'name': new_message.name,
                    'message': new_message.message,
                    'timestamp': new_message.timestamp.strftime('%Y-%m-%d %H:%M:%S'),
                }
            })
        return JsonResponse({'status': 'error', 'message': 'Name and message required'})
    
def message_list(request):
    # Fetch all messages from the Message model
    messages = Message.objects.all().order_by('-timestamp')  # Orders messages by most recent
    return render(request, 'guestMessages/message_list.html', {'messages': messages})
