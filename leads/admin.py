from django.contrib import admin
from .models import Lead


class LeadAdmin(admin.ModelAdmin):
    fields = ['name', 'email', 'message', 'owner']
    list_display = ('name', 'email', 'message', 'owner', 'created_at')


admin.site.register(Lead, LeadAdmin)
