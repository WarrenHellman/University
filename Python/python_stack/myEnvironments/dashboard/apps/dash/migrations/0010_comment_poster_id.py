# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-07-05 18:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dash', '0009_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='poster_id',
            field=models.IntegerField(null=True),
        ),
    ]
