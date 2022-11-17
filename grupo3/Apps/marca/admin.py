from django.contrib import admin
from Apps.marca.models import Marca

# Register your models here.

class MarcaAdmin(admin.ModelAdmin):
    readonly_fields = ('codigoMarca',) #No permite edicion de create y update
    # readonly_fields = ('created', 'updated') #No permite edicion de create y update
    #list_display = ( 'descripcionMarca', 'codigoMarca')
    #ordering = ('descripcionMarca', 'codigoMarca')  # En caso que sea una sola ordering('column',)
    #form de busqueda
    #search_fields = ('codigoMarca') #Campo relacionado

    #list_filter = ( 'codigoMarca','descripcionMarca') # Campos relacionados

admin.site.register(Marca,MarcaAdmin)