from django.shortcuts import render

# Create your views here.

def home(request):
	return render(request,'siteframework/home.html')

def work(request):
	return render(request, 'siteframework/work.html')

def contact(request):
	return render(request, 'siteframework/contact.html')

def cmumap(request):
	return render(request,'siteframework/cmumap.html')

