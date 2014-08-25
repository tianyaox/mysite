from django.shortcuts import render

# Create your views here.

def home(request):
	return render(request,'siteframework/home.html')

def work(request):
	return render(request, 'siteframework/work.html')

def contact(request):
	return render(request, 'siteframework/contact.html')

def knotgallery(request):
	return render(request, 'siteframework/knotgallery.html')

def bandgallery(request):
	return render(request, 'siteframework/bandgallery.html')


def cmumap(request):
	return render(request,'siteframework/cmumap.html')

