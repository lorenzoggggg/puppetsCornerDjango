from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('submit/', views.submit_message, name='submit_message'),
    path('', views.index, name='index'),
    path('post-message/', views.post_message, name='post_message'),
    path('messages/', views.message_list, name='message_list'),
] + static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])