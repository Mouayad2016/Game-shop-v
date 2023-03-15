from django.db.models.signals import pre_delete
from django.dispatch import receiver
from ...models import Product, Shopping_cart

@receiver(pre_delete, sender=Shopping_cart)
def delete_related_products(sender, instance, **kwargs):
    instance.products.clear()