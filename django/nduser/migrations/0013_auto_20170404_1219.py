# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-04-04 16:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nduser', '0012_auto_20161215_2004'),
    ]

    operations = [
        migrations.AlterField(
            model_name='channel',
            name='channel_datatype',
            field=models.CharField(choices=[(b'uint8', b'uint8'), (b'uint16', b'uint16'), (b'uint32', b'uint32'), (b'uint64', b'uint64'), (b'int8', b'int8'), (b'int16', b'int16'), (b'int32', b'int32'), (b'int64', b'int64'), (b'float32', b'float32')], max_length=255),
        ),
        migrations.AlterField(
            model_name='channel',
            name='endtime',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='project',
            name='kvengine',
            field=models.CharField(choices=[(b'MySQL', b'MySQL'), (b'Redis', b'Redis')], default=b'MySQL', max_length=255),
        ),
        migrations.AlterField(
            model_name='project',
            name='nd_version',
            field=models.CharField(default=b'1.2.0', max_length=255),
        ),
        migrations.AlterField(
            model_name='project',
            name='schema_version',
            field=models.CharField(default=b'1.1.0', max_length=255),
        ),
    ]