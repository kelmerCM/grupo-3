
from django.db import models

# Create your models here.


class Cliente(models.Model):
    nitCliente = models.CharField(max_length=20, help_text="Ingrese el Nit del Cliente")
    nombreCliente = models.CharField(max_length=100, help_text="Ingrese el Nombre del Cliente")
    apellidoCliente = models.CharField(max_length=100, help_text="Ingrese el apellido del Cliente")
    direccionCliente = models.CharField(max_length=100, help_text="Ingrese la Direccion del Cliente")
    ciudadCliente = models.CharField(max_length=100, help_text="Ingrese el ciudad del Cliente")
    correoCliente = models.EmailField(max_length=100, help_text="Ingrese el Correo del Cliente")

    def __str__(self):
        return self.nitCliente

    class Meta:
        verbose_name = "cliente"
        verbose_name_plural = "clientes"
