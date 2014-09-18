var a = $('section.work1');
var b = $('section.work2');
var c = $('section.work3');
// b.hover(
// 	function(){
// 		a.css('background','#ecf0f1');
// 		$(this).css('background','#E67E22');
// 	}
// )

// a.hover(
// 	function(){
// 		$(this).css('background','#1dd2af');
// 		b.css('background','#ecf0f1');
// 	}
// )

a.mouseover(function(){
	$(this).css('background','#555');
	$('.work1 img').css('-webkit-filter','grayscale(0%)','filter','grayscale(0%)','-webkit-filter','none','filter','none');
	$('.work3-browser img').css('-webkit-filter','grayscale(100%)','filter','grayscale(100%)','-webkit-filter','url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'saturate\' values=\'0.0\'/></filter></svg>#grayscale")','filter','url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'saturate\' values=\'0.0\'/></filter></svg>#grayscale")','filter','gray','-webkit-filter','gray');

}).mouseout(function() {
	$(this).css('background','#ccc');
	$('.work1 img').css('-webkit-filter','grayscale(100%)','filter','grayscale(100%)','-webkit-filter','url(#greyscale1)','filter','url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'saturate\' values=\'0.0\'/></filter></svg>#grayscale")','filter','gray','-webkit-filter','gray');


})
	// -webkit-filter: grayscale(100%);
	// -moz-filter: grayscale(100%);
	// filter: grayscale(100%);

	// -webkit-filter: url(#greyscale1);
	// -moz-filter: url(#greyscale1);
	// filter: url(#greyscale1);
	
	// filter: gray;
	// -moz-filter: gray;
	// -webkit-filter: gray;
	
	// transition: 0.5s;
	// -webkit-transition: 0.5s;
	// -moz-transition: 0.5s;


b.mouseover(function(){
	$(this).css('background','#555');
	$('.work2 img').css('-webkit-filter','grayscale(0)','-moz-filter','grayscale(0)','filter','grayscale(0)','-webkit-filter','none','-moz-filter','none','filter','none');
	$('.work3-browser img').css('-webkit-filter','grayscale(100%)','-moz-filter','grayscale(100%)','filter','grayscale(100%)','-webkit-filter','url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'saturate\' values=\'0.0\'/></filter></svg>#grayscale")','filter','url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'saturate\' values=\'0.0\'/></filter></svg>#grayscale")','filter','gray','-moz-filter','gray','-webkit-filter','gray');


}).mouseout(function() {
	$(this).css('background','#ccc');
	$('.work2 img').css('-webkit-filter','grayscale(100%)','-moz-filter','grayscale(100%)','filter','grayscale(100%)','-webkit-filter','url(url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'saturate\' values=\'0.0\'/></filter></svg>#grayscale"))','-moz-filter','url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'saturate\' values=\'0.0\'/></filter></svg>#grayscale")','filter','url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'saturate\' values=\'0.0\'/></filter></svg>#grayscale")','filter','gray','-webkit-filter','gray');

})

c.mouseover(function(){
	$(this).css('background','#555');
	$('.work3-browser img').css('-webkit-filter','grayscale(0)','-moz-filter','grayscale(0)','filter','grayscale(0)','-webkit-filter','none','-moz-filter','none','filter','none');


}).mouseout(function() {
	$(this).css('background','#ccc');
	$('.work3-browser img').css('-webkit-filter','grayscale(100%)','filter','grayscale(100%)','-webkit-filter','url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'saturate\' values=\'0.0\'/></filter></svg>#grayscale")','filter','url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'saturate\' values=\'0.0\'/></filter></svg>#grayscale")','filter','gray','-moz-filter','gray','-webkit-filter','gray');
})


