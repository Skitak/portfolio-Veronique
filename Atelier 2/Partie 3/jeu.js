var position = {x:0, y:0};
var tableau = [];
var htmlTable = document.createElement("table");
var body = document.getElementsByTagName("body")[0];
body.appendChild(htmlTable);

for(var i = 0; i < 9; i++){
	tableau[i] = [];
	var htmlLines = document.createElement("tr");
	htmlTable.appendChild(htmlLines);
	for(var j = 0; j < 9; j++){
		tableau[i][j] = document.createElement("td");
		htmlLines.appendChild(tableau[i][j]);
	}
}

for(var i = 0; i < 10; i++){
	var randomGreyX = Math.floor(Math.random() * 9);
	var randomGreyY = Math.floor(Math.random() * 9);
	tableau[randomGreyX][randomGreyY].className="greyed";
}

function reset (){
	tableau[0][0].className = "chat";
	tableau[8][8].className = "fin";
}

reset();

window.addEventListener("keydown", function (event) {
    if (event.keyCode==38) move(-1,0, "Déplacement vers le haut");
	if (event.keyCode==37) move(0,-1, "Déplacement vers la gauche");
	if (event.keyCode==40) move(1,0, "Déplacement vers le bas");
	if (event.keyCode==39) move(0,1, "Déplacement vers la droite");
});

function move (x,y, message){
	var newPosition = {x:0, y:0};
	newPosition.x = position.x+x;
	newPosition.y = position.y+y;
	if (newPosition.x < 0 || newPosition.x > 8 || newPosition.y < 0 || newPosition.y > 8){
		window.alert("Vous sortez du tableau!");
		document.getElementById("message").innerHTML="Entré dans le mur";
		return;
	}
	if (tableau[newPosition.x][newPosition.y].className == "greyed"){
		window.alert("Vous ne pouvez passer par là!");
		document.getElementById("message").innerHTML="Entré dans un obstacle";
		return;
	}
	tableau[position.x][position.y].className = "";
	tableau[newPosition.x][newPosition.y].className = "chat";
	position = newPosition;

	document.getElementById("message").innerHTML=message;

	if (position.x == 8 && position.y == 8){
		window.alert("Vous avez gagné!");
		document.getElementsByTagName("button")[0].className="";
		document.getElementById("message").innerHTML="Victoire!";
	}
}

document.getElementsByTagName("button")[0].addEventListener("click", function(){
	position = {x:0, y:0};
	reset();
	document.getElementsByTagName("button")[0].className="hidden";
	document.getElementById("message").innerHTML="Start";
});
