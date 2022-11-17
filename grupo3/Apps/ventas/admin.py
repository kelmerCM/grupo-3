from django.contrib import admin
from Apps.ventas.models import Ventas

# Register your models here.

class VentasAdmin(admin.ModelAdmin):
    pass


admin.site.register(Ventas, VentasAdmin)    