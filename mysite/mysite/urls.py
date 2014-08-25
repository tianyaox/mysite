from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'mysite.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', 'siteframework.views.home', name='home'),
    url(r'^work/$', 'siteframework.views.work', name='work'),  
    url(r'^contact/$', 'siteframework.views.contact', name='contact'),  
    url(r'^knotgallery/$', 'siteframework.views.knotgallery', name='knotgallery'),  
    url(r'^bandgallery/$', 'siteframework.views.bandgallery', name='bandgallery'),  
    url(r'^admin/', include(admin.site.urls)),
    # url(r'^cmumap$', 'siteframework.views.cmumap', name='cmumap'),
)
