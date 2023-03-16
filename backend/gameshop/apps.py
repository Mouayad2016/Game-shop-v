from django.apps import AppConfig
# import app.shopping_cart.signals

class GameshopConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'gameshop'

    def ready(self):
        import gameshop.app.shopping_cart.signals

