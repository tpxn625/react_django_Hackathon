from django.contrib import admin
from post.models import Post

@admin.register(Post)
class Post(admin.ModelAdmin):
    pass