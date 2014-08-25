var a = $('section.work1');
var b = $('section.work2');

b.hover(
	function(){
		a.css('background','#ecf0f1');
		$(this).css('background','#E67E22');
	}
)

a.hover(
	function(){
		$(this).css('background','#1dd2af');
		b.css('background','#ecf0f1');
	}
)






