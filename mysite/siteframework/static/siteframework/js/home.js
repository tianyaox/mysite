var w = window.screen.width, h = window.screen.height*2/3;

var labelDistance = 0;

var vis = d3.select(".home-graph").append("svg:svg").attr("width", w).attr("height", h);

var nodes = [];
var labelAnchors = [];
var labelAnchorLinks = [];
var links = [];

var wordArr1 = ["django","python","javascript","css3","html5","ajax","sql"];
var wordArr2 = ["node.js","javascript","css3","html5","phonegap","mongodb"];
var wordArr3 = ["d3","java","c"];


for (var i =0;i<wordArr1.length;i++){
	var node = {label:wordArr1[i]};
	nodes.push(node);
	labelAnchors.push({
		node : node
	});
	labelAnchors.push({
		node : node
	});		
}

for (var i =0;i<wordArr2.length;i++){
	var node = {label:wordArr2[i]};
	nodes.push(node);
	labelAnchors.push({
		node : node
	});
	labelAnchors.push({
		node : node
	});		
}

for (var i =0;i<wordArr3.length;i++){
	var node = {label:wordArr3[i]};
	nodes.push(node);
	labelAnchors.push({
		node : node
	});
	labelAnchors.push({
		node : node
	});		
}


for(var i = 0; i < nodes.length; i++) {
	labelAnchorLinks.push({
		source : i * 2,
		target : i * 2 + 1,
		weight : 1
	});
};

// var linksToBePushed = [[1,2],[2,3],[3,4],[4,5],[3,4],[4,5],[5,9],[9,10]];

for (var i=0;i<wordArr1.length-1;i++){
	links.push({
		source: i,
		target: i+1,
		weight: 1
	});
}

for (var i=0;i<wordArr2.length-1;i++){
	links.push({
		source: wordArr1.length+i,
		target: wordArr1.length+i+1,
		weight: 1
	});
}



var force = d3.layout.force().size([w, h]).nodes(nodes).links(links).gravity(1).linkDistance(50).charge(-3000).linkStrength(function(x) {
return x.weight * 10
});


force.start();

var force2 = d3.layout.force().nodes(labelAnchors).links(labelAnchorLinks).gravity(0).linkDistance(0).linkStrength(8).charge(-100).size([w, h]);
force2.start();

var link = vis.selectAll("line.link").data(links).enter().append("svg:line").attr("class", "link").style("stroke", "#CCC");

var node = vis.selectAll("g.node").data(force.nodes()).enter().append("svg:g").attr("class", "node");
node.append("svg:circle").attr("r", 5).style("fill", "#555").style("stroke", "#FFF").style("stroke-width", 3);
node.call(force.drag);


var anchorLink = vis.selectAll("line.anchorLink").data(labelAnchorLinks)//.enter().append("svg:line").attr("class", "anchorLink").style("stroke", "#999");

var anchorNode = vis.selectAll("g.anchorNode").data(force2.nodes()).enter().append("svg:g").attr("class", "anchorNode");
anchorNode.append("svg:circle").attr("r", 0).style("fill", "#FFF");
anchorNode.append("svg:text").text(function(d, i) {
return i % 2 == 0 ? "" : d.node.label
}).style("fill", "#555").style("font-family", "Didot, 'Didot LT STD', 'Hoefler Text', Garamond, 'Times New Roman', serif").style("font-size", 12);

var updateLink = function() {
this.attr("x1", function(d) {
	return d.source.x;
}).attr("y1", function(d) {
	return d.source.y;
}).attr("x2", function(d) {
	return d.target.x;
}).attr("y2", function(d) {
	return d.target.y;
});

}

var updateNode = function() {
this.attr("transform", function(d) {
	return "translate(" + d.x + "," + d.y + ")";
});

}


force.on("tick", function() {

force2.start();

node.call(updateNode);

anchorNode.each(function(d, i) {
	if(i % 2 == 0) {
		d.x = d.node.x;
		d.y = d.node.y;
	} else {
		var b = this.childNodes[1].getBBox();

		var diffX = d.x - d.node.x;
		var diffY = d.y - d.node.y;

		var dist = Math.sqrt(diffX * diffX + diffY * diffY);

		var shiftX = b.width * (diffX - dist) / (dist * 2);
		shiftX = Math.max(-b.width, Math.min(0, shiftX));
		var shiftY = 5;
		this.childNodes[1].setAttribute("transform", "translate(" + shiftX + "," + shiftY + ")");
	}
});


anchorNode.call(updateNode);

link.call(updateLink);
anchorLink.call(updateLink);

});
