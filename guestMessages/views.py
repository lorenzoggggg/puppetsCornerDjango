from django.http import JsonResponse
from .models import GuestMessage
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Message, StatusMessage
from django.utils.timezone import now
import random

def submit_message(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        message = request.POST.get('message')
        GuestMessage.objects.create(name=name, message=message)
        return JsonResponse({'status': 'success'})
    return JsonResponse({'error': 'Invalid request'}, status=400)

def index(request):
    messages = Message.objects.all().order_by('-timestamp')
    statusmessages = StatusMessage.objects.all().order_by('-created_at')
    return render(request, 'guestMessages/index.html', {
        'messages': messages,
        'statusmessages': statusmessages,
    })


@csrf_exempt  # Only for testing! In production, use CSRF tokens instead.
def post_message(request):
    if request.method == 'POST':
        import json
        from django.utils.timezone import now
        import random
        from .models import Message

        try:
            data = json.loads(request.body)
            name = data.get('name')
            message = data.get('message')
            if name and message:
                new_message = Message.objects.create(
                    name=name,
                    message=message,
                    timestamp=now(),
                    profile_image_id=random.randint(1, 21)
                )
                return JsonResponse({
                    'status': 'success',
                    'message_data': {
                        'name': new_message.name,
                        'message': new_message.message,
                        'timestamp': new_message.timestamp.strftime('%Y-%m-%d %H:%M:%S'),
                        'profile_image_id': new_message.profile_image_id,
                    }
                })
            return JsonResponse({'status': 'error', 'message': 'Name and message required'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})
    return JsonResponse({'error': 'Invalid request'}, status=400)

def message_list(request):
    # Fetch all messages from the Message model
    messages = Message.objects.all().order_by('-timestamp')  # Orders messages by most recent
    return render(request, 'guestMessages/message_list.html', {'messages': messages})

def aboutme(request):
    return render(request, 'guestMessages/index.html')

def aboutme(request):
    return render(request, 'guestMessages/aboutmeIndex.html')

def webcomic(request):
    return render(request, 'guestMessages/webcomicIndex.html')

def portfolio(request):
    return render(request, 'guestMessages/portfolioIndex.html')

def links(request):
    return render(request, 'guestMessages/linksIndex.html')
