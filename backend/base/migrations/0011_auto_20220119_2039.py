# Generated by Django 3.1.7 on 2022-01-19 15:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0010_installation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='installation',
            name='date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
