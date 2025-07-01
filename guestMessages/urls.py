from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.aboutme, name='aboutme'),
    path('webcomic/', views.webcomic, name='webcomic'),
    path('portfolio/', views.portfolio, name='portfolio'),
    path('links/', views.links, name='links'),
    path('post-message/', views.post_message, name='post_message'),
] + static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])