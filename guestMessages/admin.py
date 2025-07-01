from django.contrib import admin
from .models import Message, StatusMessage

class MessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'message', 'timestamp', 'profile_image_id')
    search_fields = ('name', 'message')
    list_filter = ('timestamp',)

admin.site.register(Message, MessageAdmin)

class StatusMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'message', 'created_at')
    search_fields = ('name', 'message')
    list_filter = ('created_at',)

admin.site.register(StatusMessage, StatusMessageAdmin)
