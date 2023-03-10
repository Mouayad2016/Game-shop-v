# Generated by Django 4.1.5 on 2023-02-04 17:43

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('gameshop', '0005_categories_creator_admin_id_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Adress',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('order_id', models.IntegerField(null=True)),
                ('city', models.CharField(max_length=50)),
                ('country', models.CharField(max_length=50)),
                ('post_number', models.IntegerField(null=True)),
                ('street_name', models.CharField(max_length=100)),
                ('co_adress', models.CharField(max_length=100)),
                ('created_at', models.DateField(default=datetime.date.today)),
                ('updated_at', models.DateField(default=datetime.date.today)),
            ],
        ),
        migrations.CreateModel(
            name='Discount',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('start_date', models.DateField(default=datetime.date.today)),
                ('end_date', models.TextField(blank=True)),
                ('title', models.IntegerField(null=True)),
                ('discount_type', models.IntegerField(null=True)),
                ('rate', models.IntegerField(null=True)),
                ('code', models.IntegerField(null=True)),
                ('created_at', models.DateField(default=datetime.date.today)),
                ('updated_at', models.DateField(default=datetime.date.today)),
                ('admin_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gameshop.administrators')),
            ],
        ),
        migrations.CreateModel(
            name='Games',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True)),
                ('created_at', models.DateField(default=datetime.date.today)),
                ('updated_at', models.DateField(default=datetime.date.today)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True)),
                ('stock', models.IntegerField(null=True)),
                ('creator_admin_id', models.IntegerField(null=True)),
                ('is_deleted', models.BooleanField(default=False)),
                ('deleted_by_admin_id', models.IntegerField(null=True)),
                ('created_at', models.DateField(default=datetime.date.today)),
                ('updated_at', models.DateField(default=datetime.date.today)),
                ('discout_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gameshop.discount')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
                ('e_mail', models.CharField(max_length=300)),
                ('created_at', models.DateField(default=datetime.date.today)),
                ('updated_at', models.DateField(default=datetime.date.today)),
            ],
        ),
        migrations.CreateModel(
            name='Shopping_cart',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('created_at', models.DateField(default=datetime.date.today)),
                ('updated_at', models.DateField(default=datetime.date.today)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gameshop.user')),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('rating', models.IntegerField(null=True)),
                ('feedback', models.TextField(blank=True)),
                ('hidden', models.BooleanField(default=False)),
                ('reported', models.BooleanField(default=False)),
                ('created_at', models.DateField(default=datetime.date.today)),
                ('updated_at', models.DateField(default=datetime.date.today)),
                ('prod_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gameshop.product')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gameshop.user')),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='review_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gameshop.review'),
        ),
        migrations.CreateModel(
            name='Prod_category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateField(default=datetime.date.today)),
                ('updated_at', models.DateField(default=datetime.date.today)),
                ('car_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gameshop.categories')),
                ('prod_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gameshop.product')),
            ],
        ),
        migrations.CreateModel(
            name='Prod_cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateField(default=datetime.date.today)),
                ('updated_at', models.DateField(default=datetime.date.today)),
                ('cart_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gameshop.shopping_cart')),
                ('prod_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gameshop.product')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('payment_way', models.CharField(max_length=500)),
                ('discount_code', models.CharField(max_length=8)),
                ('state', models.BooleanField(default=False)),
                ('created_at', models.DateField(default=datetime.date.today)),
                ('updated_at', models.DateField(default=datetime.date.today)),
                ('discount_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gameshop.discount')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gameshop.user')),
            ],
        ),
    ]
