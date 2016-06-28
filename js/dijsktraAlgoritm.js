
var startPoint;
var endPoint;
var selection;
var map;

var adjMatrix = 

[[0,4,2,999,999,999],
[4,0,1,5,999,999],
[2,1,0,8,10,999],
[999,5,8,0,2,6],
[999,999,10,2,0,2],
[999,999,999,6,2,0]];

//findShortestPath(adjMatrix,2,0);



function findShortestPath(adjMatrix,start,end){

	var min = infinity;

	var path = [];
	path.push(start);

	var initial = start;
	var nextNode = [];
	var distance = 0;

	for(var i=0; i < adjMatrix[0].length; i++){
		for(var k=0; k < adjMatrix[0].length; i++){
			if(initial != k){
				if(adjMatrix[initial][k]+distance < min){
					min = adjMatrix[initial][k];
				}
				distance += min;
			}
		}
		if(k == end){
			console.log(path);
			return;
		}else{
			path.push(k);
			initial = k;
		}

	}
	console.log(path);
}

