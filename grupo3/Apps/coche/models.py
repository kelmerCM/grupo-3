from django.db import models
from Apps.cliente.models import Cliente
from Apps.marca.models import Marca
# Create your models here.


class Coche(models.Model):
    matriculaCoche = models.CharField(max_length=8, help_text="Ingrese el Matricula ")
    nodeloCoche = models.CharField(max_length=100, help_text="Ingrese el Modelo ")
    colorCoche = models.CharField(max_length=100, help_text="Ingrese el Color")
    pvcCoche = models.CharField(max_length=100, help_text="Ingrese el PVC")
   # cliente = models.ForeignKey(Cliente,null=True, blank=True, on_delete=models.CASCADE)
    codigoMarca = models.ForeignKey(Marca,null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.matriculaCoche

    class Meta:
        verbose_name = "coche"
        verbose_name_plural = "coche"