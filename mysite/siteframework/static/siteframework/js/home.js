var w = $(window).width(), h = $(window).height()*2/3;


// var color = d3.scale.category20();

// var force = d3.layout.force()
//     .charge(-120)
//     .linkDistance(30)
//     .size([width, height]);

// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height);

// var graph = {
// 	"nodes": [
// 		{"name":"html5","group":1},
// 		{"name":"css3","group":1},
// 		{"name":"javascript","group":1},
// 		{"name":"django","group":2}
// 	],
// 	"links":[
// 		{"source":1,"target":0,"value":1},
// 		{"source":2,"target":0,"value":1},
// 		{"source":3,"target":0,"value":1}
// 	]
// }


// d3.json("static/siteframework/json/words.json", function(error, graph) {
//   console.log(graph);
//   force
//       .nodes(graph.nodes)
//       .links(graph.links)
//       .start();

//   var link = svg.selectAll(".link")
//       .data(graph.links)
//     .enter().append("line")
//       .attr("class", "link")
//       .style("stroke-width", function(d) { return Math.sqrt(d.value); });

//   var node = svg.selectAll(".node")
//       .data(graph.nodes)
//     .enter().append("circle")
//       .attr("class", "node")
//       .attr("r", 5)
//       .style("fill", function(d) { return color(d.group); })
//       .call(force.drag);

//   node.append("title")
//       .text(function(d) { return d.name; });

//   force.on("tick", function() {
//     link.attr("x1", function(d) { return d.source.x; })
//         .attr("y1", function(d) { return d.source.y; })
//         .attr("x2", function(d) { return d.target.x; })
//         .attr("y2", function(d) { return d.target.y; });

//     node.attr("cx", function(d) { return d.x; })
//         .attr("cy", function(d) { return d.y; });
//   });
// });



var labelDistance = 0;

var vis = d3.select(".home-graph").append("svg:svg").attr("width", w).attr("height", h);

var nodes = [];
var labelAnchors = [];
var labelAnchorLinks = [];
var links = [];

// 0-3
var wordArr1 = ["javascript","css3","html5","ajax"];
// 4-6
var wordArr2 = ["django","python","sql"];
// 7-9
var wordArr3 = ["node.js","phonegap","mongodb"];
var wordArr4 = ["d3","java","c","c++","LESS"];

var linksList1 = [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]];
var linksList2 = [[4,5],[5,6],[6,4]];
var linksList3 = [[7,8],[8,9],[9,7]];
var linksList4 = [[0,7],[0,8],[0,10],[2,4],[11,3],[14,1]];

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

for (var i =0;i<wordArr4.length;i++){
	var node = {label:wordArr4[i]};
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


for (var i=0;i<linksList1.length;i++){
	
	links.push({
		source: linksList1[i][0],
		target: linksList1[i][1],
		weight: 1
	});
}

for (var i=0;i<linksList2.length;i++){
	
	links.push({
		source: linksList2[i][0],
		target: linksList2[i][1],
		weight: 1
	});
}
for (var i=0;i<linksList3.length;i++){
	
	links.push({
		source: linksList3[i][0],
		target: linksList3[i][1],
		weight: 1
	});
}

for (var i=0;i<linksList4.length;i++){
	
	links.push({
		source: linksList4[i][0],
		target: linksList4[i][1],
		weight: 1
	});
}
// for (var i=0;i<wordArr1.length-1;i++){
// 	links.push({
// 		source: i,
// 		target: i+1,
// 		weight: 1
// 	});
// }

// for (var i=0;i<wordArr2.length-1;i++){
// 	links.push({
// 		source: wordArr1.length+i,
// 		target: wordArr1.length+i+1,
// 		weight: 1
// 	});
// }



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
}).style("fill", "#999").style("font-family", "Didot, 'Didot LT STD', 'Hoefler Text', Garamond, 'Times New Roman', serif").style("font-size", 12);

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
