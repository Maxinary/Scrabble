function Player(name){//class
	this.name = name;
	this.scores = [];
}

function updateCookie(){
        document.cookie = JSON.stringify(players);
}

function getInfo(){
        raw = document.cookie;
	return JSON.parse(raw);
}

function updatePlayer(player){
	var invalid = false;
	var pcolumn = column(player);
	var cell=pcolumn.join('');
        for(var i=0;i<cell.length;i++){//check for only numbers in cell
                if(cell.charCodeAt(i)<48 || cell.charCodeAt(i)>57){
                	invalid = true;
        	}
        }
	if(invalid == false){
		fullScore = sum(column(player));
		for(var i=0;i<pcolumn.length;i++){
			players[player].scores[i] = pcolumn[i];
		}
		updateCookie();
	}else{fullScore = "Invalid Input";}
	player = parseInt(player)+1;
	$("#score td:nth-child("+player+")").html(fullScore);
}

function newRow(){
	$("tbody").append("<tr></tr>");
	$final = $("tbody tr:last");
	for(var i=0;i<players.length;i++){
		$final.append("<td><input type='text' class='scoreCell' autocomplete='off' value='0'></input></td>");
	}
}

function sum(arry){
	var countvar = 0;
	for(var i=0;i<arry.length;i++){
		countvar += Math.round(arry[i]);
	}
	return countvar;
}

function column(colnum){
        arry = [];
	var table = document.getElementById("table");
        for(var i=2;i<table.rows.length;i++){ 
	        //return all of the values in the nth column
                arry.push(table.rows[i].cells[colnum].firstChild.value);
        }
        return arry;
}

function setup(){
	var names="";
	var scores="";
	for(var i=0;i<players.length;i++){
		names+=("<td>"+players[i].name+"</td>");
		scores+=("<td>"+sum(players[i].scores)+"</td>");
	}
	$("#name").append(names);
	$("#score").append(scores);
}
