from django.db import models
import random

class StatusMessage(models.Model):
    name = models.CharField(max_length=100)
    name = models.CharField(
    max_length=100,
    choices=[
        ("Puppet", "Puppet"),
        ("Lolo", "Lolo"),
        ]
    )
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class GuestMessage(models.Model):
    name = models.CharField(max_length=100)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Message(models.Model):
    name = models.CharField(max_length=100)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    profile_image_id = models.PositiveSmallIntegerField(null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.profile_image_id is None:
            self.profile_image_id = random.randint(1, 21)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} at {self.timestamp}"