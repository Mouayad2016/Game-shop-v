# Generated by Django 4.1.5 on 2023-02-04 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gameshop', '0006_adress_discount_games_product_user_shopping_cart_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='prod_category',
            field=models.ManyToManyField(to='gameshop.categories'),
        ),
        migrations.DeleteModel(
            name='Prod_category',
        ),
    ]
