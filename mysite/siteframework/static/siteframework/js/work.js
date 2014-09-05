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
	$(this).css('background','#aaa');

}).mouseout(function() {
	$(this).css('background','#ccc');

})


b.mouseover(function(){
	$(this).css('background','#aaa');

}).mouseout(function() {
	$(this).css('background','#ccc');

})

c.mouseover(function(){
	$(this).css('background','#aaa');
	
}).mouseout(function() {
	$(this).css('background','#ccc');

})


