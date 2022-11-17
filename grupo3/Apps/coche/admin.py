from django.contrib import admin
from Apps.coche.models import Coche

# Register your models here.

class CocheAdmin(admin.ModelAdmin):
    readonly_fields = ('matriculaCoche',) #No permite edicion de create y update
    # readonly_fields = ('created', 'updated') #No permite edicion de create y update
    list_display = ('colorCoche', 'nodeloCoche', 'matriculaCoche')
    ordering = ('colorCoche', 'nodeloCoche', 'matriculaCoche')  # En caso que sea una sola ordering('column',)
    #form de busqueda
    search_fields = ('colorCoche','matriculaCoche') #Campo relacionado

    list_filter = ('colorCoche', 'matriculaCoche','nodeloCoche') # Campos relacionados


admin.site.register(Coche,CocheAdmin)
