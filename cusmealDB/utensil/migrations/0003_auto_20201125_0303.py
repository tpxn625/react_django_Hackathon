# Generated by Django 3.1.1 on 2020-11-24 18:03

from django.db import migrations, models
import utensil.models


class Migration(migrations.Migration):

    dependencies = [
        ('utensil', '0002_auto_20201125_0117'),
    ]

    operations = [
        migrations.AlterField(
            model_name='utensil',
            name='photo',
            field=models.ImageField(upload_to=utensil.models.uuid_name, verbose_name='사진'),
        ),
    ]
