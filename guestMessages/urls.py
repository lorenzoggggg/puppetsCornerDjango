from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from .views import MessageListCreateView, StatusMessageListCreateView

urlpatterns = [
    path('', views.index, name='index'),
    path('commissions/', views.commissions, name='commissions'),
    path('webcomic/', views.webcomic, name='webcomic'),
    path('portfolio/', views.portfolio, name='portfolio'),
    path('links/', views.links, name='links'),
    path('post-message/', views.submit_message, name='post_message'),
    path('api/messages/', MessageListCreateView.as_view(), name='message-list'),
    path('api/status-messages/', StatusMessageListCreateView.as_view(), name='status-message-list'),
] + static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])