from django.contrib import admin
from .models import Message

class MessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'message', 'timestamp')  # Columns to display
    search_fields = ('name', 'message')  # Allow searching by name or message
    list_filter = ('timestamp',)  # Allow filtering by timestamp

admin.site.register(Message)
