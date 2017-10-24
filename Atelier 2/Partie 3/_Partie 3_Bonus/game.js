var grid = [];
var xMax = 9, yMax = 9;	//this could be fetched in an alert
var currentPosition = { x:0 , y:0}
var hasWon = false;

document.getElementsByTagName("body").onLoad = (function () {
	generateMap ();
	bindPlayerInput();
})();

function generateMap () {
	addHTMLgrid ();
	generatePath();
	addRandomHoles(20);
	addSpecialCells();
}

function addHTMLgrid() {
	for (var i = 0; i < xMax; i++) {
		var row = addRowToContainer();
		grid[i] = []
		for (var j = 0; j < yMax; j++) {
			grid [i][j] = addCellToRow(row);
		}
	}
}

function addRowToContainer () {
	var row = document.createElement("div");
	row.className += "row";
	document.getElementById("container").appendChild(row);
	return row;
}

function addCellToRow (row) {
	var cell = document.createElement("div");
	cell.className += "wall";
	row.appendChild(cell);
	return cell;
}

function generatePath () {
	var oldStepEntry = 0, newStepEntry = 0, lastStepEntry = 8;

	for (var step = 0; step < yMax / 2; ++step) {
		while (oldStepEntry == newStepEntry)
			newStepEntry = Math.floor(Math.random() * yMax);
		removeWallsFromStep(step, oldStepEntry, newStepEntry);
		oldStepEntry = newStepEntry;
	}
	removeWallsFromStep(4, oldStepEntry, lastStepEntry);
}

function removeWallsFromStep(step, start, end ) {
	for (var i = Math.min(start, end); i <= Math.max(start, end); i++)
		grid [step * 2] [i].className = "";

	if (step * 2 + 1 < xMax ) //If we are not on the last step
		grid [step * 2 + 1] [end].className = "";
}

function addRandomHoles(wallsToRemove) {
	for (var i = 0; i < wallsToRemove; i++) {
		var randomHoleX = Math.floor(Math.random() * xMax);
		var randomHoleY = Math.floor(Math.random() * yMax);
		grid [randomHoleX][randomHoleY].className = "";
	}
}

function addSpecialCells() {
	grid[0][0].className = "player";
	grid[xMax - 1][yMax - 1].className = "goal";
}

function bindPlayerInput (){
	document.getElementById("left").onclick = function() {
		tryMove(currentPosition.x , currentPosition.y - 1);
	};
	document.getElementById("up").onclick = function() {
		tryMove(currentPosition.x - 1, currentPosition.y);
	};
	document.getElementById("right").onclick = function() {
		tryMove(currentPosition.x , currentPosition.y + 1);
	};
	document.getElementById("down").onclick = function() {
		tryMove(currentPosition.x + 1, currentPosition.y);
	};

	window.addEventListener("keydown", function (event) {
	    if (event.keyCode==38) tryMove(currentPosition.x - 1, currentPosition.y); 	//UP
		if (event.keyCode==37) tryMove(currentPosition.x, currentPosition.y - 1);	//LEFT
		if (event.keyCode==40) tryMove(currentPosition.x + 1, currentPosition.y); 	//DOWN
		if (event.keyCode==39) tryMove(currentPosition.x, currentPosition.y + 1);	//Right
	});
}

function tryMove(x, y) {

	if (hasWon)
		return;

	if ( x < 0 || y < 0 || x >= xMax || y >= yMax){
		message("error","You can't walk into a tree.");
		return;
	}
	if (grid[x][y].className == "wall"){
		message("error","You can't walk into a tree.");
		return;
	}
	if (playerIsTooFar(x,y)){
		message("error","You are too far");
		return;
	}

	move(x,y);
}

function message (type,message){
	var oldMessages = document.getElementsByClassName(type);
	for(var i = 0; i < oldMessages.length; i++){
		document.getElementsByTagName("body")[0].removeChild(oldMessages[i]);
	}
	var messageNode = document.createElement("div");
	messageNode.className += type;
	var textNode = document.createElement("p");
	textNode.appendChild(document.createTextNode(message));
	messageNode.appendChild(textNode);
	document.getElementsByTagName("body")[0].appendChild(messageNode);
	return messageNode;
}

function playerIsTooFar(x,y) {
	var distance = 0;
	distance += Math.abs(xMax - currentPosition.xMax);
	distance += Math.abs(y - currentPosition.y);
	return distance < 2;
}

function move (x,y) {
	message("action", "moved to position ( " + x + ", " + y + ")");
	grid[currentPosition.x][currentPosition.y].className = "";
	grid[x][y].className = "player";
	currentPosition.x = x;
	currentPosition.y = y;
	if (x == xMax -1 && y == yMax -1)
		endGame();
}

function endGame(){
	hasWon = true;
	grid[xMax-1][yMax-1].className = "gameWon";
	var replayButton = message("replay", "Replay?");
	replayButton.addEventListener("click", function() {
		location.reload();
	});
}
