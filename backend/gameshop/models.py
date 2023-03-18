from django.db import models
from django.db.models import Deferrable, UniqueConstraint
import datetime
from django.db import models
from django.contrib.auth.models import User

# Create your models here.



class Administrators(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=500)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)

class Categories(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    creator_admin_id = models.ForeignKey(Administrators, on_delete=models.CASCADE, null=True, related_name ="creator_admin_id") # *sDjango is unable to generate unique names for many foreign keys so here you should use related_name
    deleted_by_admin_id = models.ForeignKey(Administrators, on_delete=models.CASCADE, null= True , related_name="deleted_by_admin_id")
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)



class Favorite_product(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, null=True,on_delete=models.CASCADE)
    product_id = models.ForeignKey('Product', null=True,on_delete=models.CASCADE)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    stock = models.IntegerField(null= True)
    discount_id = models.ForeignKey('Discount', on_delete=models.CASCADE,null= True)
    creator_admin_id = models.IntegerField(null=True)
    price = models.IntegerField(null= False,default=0)
    is_deleted= models.BooleanField(default=False)
    deleted_by_admin_id = models.IntegerField(null=True)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)
    prod_category = models.ManyToManyField(Categories) # * Many-to-many relationships will create a third table no need to manually creating the third table in this case it created gameshop_prod_cat table.


class Shopping_cart(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, null=True,on_delete=models.CASCADE)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)
    prod_cart = models.ManyToManyField(Product, null=True, through="CartItem")


class CartItem(models.Model):
    cart  = models.ForeignKey(Shopping_cart, on_delete=models.CASCADE)
    product  = models.ForeignKey(Product , on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)


class Product_images(models.Model):
    id: models.AutoField(primary_key=True)
    product_id= models.ForeignKey('Product', on_delete=models.CASCADE)
    image=models.ImageField()

class Order_product(models.Model):
    id = models.AutoField(primary_key=True)
    order_id = models.ForeignKey('Order', null=True,on_delete=models.CASCADE)
    product_id = models.ForeignKey('Product', null=True,on_delete=models.CASCADE)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)

class Discount(models.Model):
    id = models.AutoField(primary_key=True)
    start_date = models.DateField(default=datetime.date.today)
    end_date  = models.TextField(blank=True ,)
    title = models.TextField(blank=True)
    discount_type= models.TextField(blank=True)
    rate = models.FloatField(null=True)
    code = models.TextField(blank=True)
    admin_id= models.ForeignKey(Administrators, on_delete=models.CASCADE)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)
    
class Order(models.Model):
    id = models.AutoField(primary_key=True)
    payment_way = models.CharField(max_length=500)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE , null=True)
    discount_code = models.CharField(max_length=8,null=True)
    state = models.BooleanField(default=False)
    discount_id = models.ForeignKey(Discount, on_delete=models.CASCADE, null=True)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)

class Adress(models.Model):
    id = models.AutoField(primary_key=True)
    order_id = models.OneToOneField(Order,on_delete=models.CASCADE,null=True)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    post_number = models.IntegerField(null=True)
    street_name = models.CharField(max_length=100)
    co_adress = models.CharField(max_length=100)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)

class Review(models.Model):
    id = models.AutoField(primary_key=True)
    rating = models.IntegerField(null=True)
    feedback = models.TextField(blank=True)
    prod_id = models.ForeignKey('Product', on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    hidden = models.BooleanField(default=False)
    reported = models.BooleanField(default=False)
    created_at = models.DateField(default=datetime.date.today)
    updated_at = models.DateField(default=datetime.date.today)
    
# Create your models here.
