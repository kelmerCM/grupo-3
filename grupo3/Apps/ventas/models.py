from django.db import models
from Apps.cliente.models import Cliente
from Apps.coche.models import Coche

# Create your models here.


class Ventas(models.Model):
    nitCliente = models.ForeignKey(Cliente,null=True, blank=True, on_delete=models.CASCADE)  
    matriculaCoche = models.ForeignKey(Coche,null=True, blank=True, on_delete=models.CASCADE)
  
    

    class Meta:
        verbose_name = "ventas"
        verbose_name_plural = "ventas"
