# Generated by Django 4.1.5 on 2023-02-02 14:04

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Administrators',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=200)),
                ('password', models.CharField(max_length=500)),
                ('created_at', models.DateField(default=datetime.date.today)),
                ('updated_at', models.DateField(default=datetime.date.today)),
            ],
        ),
        migrations.CreateModel(
            name='Categories',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True)),
                ('created_at', models.DateField(default=datetime.date.today)),
                ('updated_at', models.DateField(default=datetime.date.today)),
            ],
        ),
        migrations.CreateModel(
            name='Discount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('end_date', models.TextField(blank=True)),
                ('created_at', models.DateField(default=datetime.date.today)),
                ('updated_at', models.DateField(default=datetime.date.today)),
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
            name='Prod_category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateField(default=datetime.date.today)),
                ('updated_at', models.DateField(default=datetime.date.today)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True)),
                ('created_at', models.DateField(default=datetime.date.today)),
                ('updated_at', models.DateField(default=datetime.date.today)),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('feedback', models.TextField(blank=True)),
                ('created_at', models.DateField(default=datetime.date.today)),
                ('updated_at', models.DateField(default=datetime.date.today)),
            ],
        ),
    ]