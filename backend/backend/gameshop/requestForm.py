from django import forms
class prodFrom(forms.Form):
    name = forms.CharField(max_length=200)
    description = forms.CharField()
    stock = forms.IntegerField()