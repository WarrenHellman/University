# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class UserManager(models.Manager):
    def validator(self, postData):
        errors = {}
        if len(postData['first_name'])<1:
            errors['first_name'] = 'First name cannot be empty'
        if len(postData['last_name']) <1:
            errors['last_name'] = 'Last name cannot be empty'
        if len(postData['email']) <1:
            errors['email'] = 'Email name cannot be empty'
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    objects = UserManager()