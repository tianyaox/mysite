from django.shortcuts import render

# Create your views here.

def home(request):
	return render(request,'siteframework/index.html')

def cmumap(request):
	return render(request,'siteframework/cmumap.html')

