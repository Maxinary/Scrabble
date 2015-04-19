<html>
	<head>
                <!-- My personal CSS file -->
                <link rel="stylesheet" type="text/css" href="css/scrabble.css">

                <!-- jQuery library -->
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

		<!--JS Functions-->
		<script src="js/scrabble.f.js"></script>

		<!-- Php Handle and JS Rear End-->
		<?php

		function posted(){
		        if(isset($_POST[playerNum])){
		                return 1;
		        }else{
        	 	       return 0;
        		}
		}
		function getPlayerName($player){
		        if($player<=$_POST["playerNum"]){
		                return $_POST["p".$player."In"];
			}
		}
		function playerNum(){
		        if(posted()){
				return  $_POST["playerNum"];
			}else{
				return 1;
			}
		}

		$localNames = array();
		for($i = 1; $i <= playerNum(); $i++){
			array_push($localNames,getPlayerName($i));
		}
		$encryptedNames = json_encode($localNames);

		 ?>

		<script>
		var saved = [];
		if( <?php echo posted(); ?> ){
			var playerNum = <?php echo playerNum(); ?>;
			for(i=0;i<playerNum;i++){
				saved.push(new Player(<?php echo($encryptedNames); ?>[i]));
			}
		}else if(document.cookie!=""){
			//decrypt the cookie and save to saved variable
			saved = getInfo();
		}else{
			window.location.replace("newScrabble.html");
		}
		var players = saved;
		</script>
	</head>
	<body>
		<h1><strong>SCRABBLE</strong></h1>
		<div id="container">
			<table class="table table-bordered" id="table">
				<thead>
					<tr id="name"></tr>
					<tr id="score"></tr>
				</thead>
				<tbody></tbody>
			</table>
		</div>
		<button id="rowBtn" onClick="newRow()">+</button>
		<a href="newScrabble.html"><button id="redirectBtn">New Game</button></a>
		<script src="js/scrabble.js"></script>
	</body>
</html>
