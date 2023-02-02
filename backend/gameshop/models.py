from django.db import models


from django.db import models

# Create your models here.
class Games(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)




# Create your models here.
