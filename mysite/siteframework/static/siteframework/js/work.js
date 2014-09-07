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
	$('.work1 img').css('-webkit-filter','grayscale(0)','filter','grayscale(0)','filter','none');
	$('.work3-browser img').css('-webkit-filter','grayscale(100%)','filter','grayscale(100%)','filter','url(#greyscale)','filter','gray');

}).mouseout(function() {
	$(this).css('background','#ccc');
	$('.work1 img').css('-webkit-filter','grayscale(100%)','filter','grayscale(100%)','filter','url(#greyscale)','filter','gray');


})


b.mouseover(function(){
	$(this).css('background','#555');
	$('.work2 img').css('-webkit-filter','grayscale(0)','filter','grayscale(0)','filter','none');
	$('.work3-browser img').css('-webkit-filter','grayscale(100%)','filter','grayscale(100%)','filter','url(#greyscale)','filter','gray');


}).mouseout(function() {
	$(this).css('background','#ccc');
	$('.work2 img').css('-webkit-filter','grayscale(100%)','filter','grayscale(100%)','filter','url(#greyscale)','filter','gray');

})

c.mouseover(function(){
	$(this).css('background','#555');
	$('.work3-browser img').css('-webkit-filter','grayscale(0)','filter','grayscale(0)','filter','none');


}).mouseout(function() {
	$(this).css('background','#ccc');
	$('.work3-browser img').css('-webkit-filter','grayscale(100%)','filter','grayscale(100%)','filter','url(#greyscale)','filter','gray');
})


