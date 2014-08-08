// var mouseover1 = false;
$('section img').mousemove(
	function(e){
		var mx = e.pageX;
		var my = e.pageY;
		var ix = $(this).position().left;
		var iy = $(this).position().top;
		var ox = $(this).width()/2;
		var oy = $(this).height()/2;
		var curx = mx-ix-ox;
		var cury = my-iy-oy;
		var px = curx/ox*10+10+"%";
		var py = cury/oy*10+10+"%";
		// $(this).css("background","url(/static/siteframework/img/KNOT_mycard.png) "+px+" "+py);
		// $(this).css("background","url(/static/siteframework/img/KNOT_browser.svg) "+px+" "+py);
		// console.log(px);
		// console.log(py);
	}
)
