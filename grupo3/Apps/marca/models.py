from django.db import models

# Create your models here.


class Marca(models.Model):
    descripcionMarca = models.CharField(max_length=300, help_text="Decriccion")
    codigoMarca = models.CharField(max_length=10, help_text="Decriccion")
 

    def __str__(self):
        return self.codigoMarca

    class Meta:
        verbose_name = "marca"
        verbose_name_plural = "marca"