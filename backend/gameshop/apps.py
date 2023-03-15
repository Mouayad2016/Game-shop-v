from django.apps import AppConfig


class GameshopConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'gameshop'

    def ready(self):
        import app.shopping_cart.signals
