<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8"/>
		<link rel="stylesheet" href="style/init.css"/>
		<link rel="icon" href="token/icons8-roiB-50.png"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Initiation</title>
	</head>
	<body>
		<?php include "fct/fct_nav.php"?>
		<a href="index.php">Retour</a>
		<h1>Initiation - Chevalier <img src='token/icons8-chevalierW-50.png' width='50px' height='50px'/>
			<img src='token/icons8-chevalierB-50.png' width='50px' height='50px'/></h1>
		<p class="msg">Mouvement incorrect</p>
		<section class="game">
			<section class='board'>
				<div class='coo_num'><p>5</p></div>
				<div class='a5' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='b5' id='white'><img src='token/icons8-pionB-50.png' width='40px' height='40px'/></div>
				<div class='c5' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='d5' id='white'><img src='token/icons8-pionB-50.png' width='40px' height='40px'/></div>
				<div class='e5' id='black'><img src='Z' width='0px' height='0px'/></div>

				<div class='coo_num'><p>4</p></div>
				<div class='a4' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='b4' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='c4' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='d4' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='e4' id='white'><img src='Z' width='0px' height='0px'/></div>

				<div class='coo_num'><p>3</p></div>
				<div class='a3' id='black'><img src='token/icons8-pionB-50.png' width='40px' height='40px'/></div>
				<div class='b3' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='c3' id='black'><img src='token/icons8-chevalierW-50.png' width='40px' height='40px'/></div>
				<div class='d3' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='e3' id='black'><img src='token/icons8-pionB-50.png' width='40px' height='40px'/></div>

				<div class='coo_num'><p>2</p></div>
				<div class='a2' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='b2' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='c2' id='white'><img src='token/icons8-pionB-50.png' width='40px' height='40px'/></div>
				<div class='d2' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='e2' id='white'><img src='Z' width='0px' height='0px'/></div>

				<div class='coo_num'><p>1</p></div>
				<div class='a1' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='b1' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='c1' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='d1' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='e1' id='black'><img src='Z' width='0px' height='0px'/></div>
					
				<div class='coo_x'></div>
				<div class='coo_chr'><p>A</p></div>
				<div class='coo_chr'><p>B</p></div>
				<div class='coo_chr'><p>C</p></div>
				<div class='coo_chr'><p>D</p></div>
				<div class='coo_chr'><p>E</p></div>
			</section>
		</section>
		<section id="train">
			<p>Le chevalier peut se d??placer dans toutes les directions. En revanche ses mouvements doivent</br>
			d??crires un 'L' de deux cases pour une.</br>
			Il poss??de ??galement une particularit?? qui est de pouvoir travers?? n'importe quelle pi??ce.</br>
			Enfin, comme pour toutes les pi??ces, s'il fini son d??placement sur une pi??ce adverse celle-ci sera captur??.
			</p>
			<p id="goal">Votre objectif est de capturer les cinq pions adverse</p>
			<div id="btn">
				<form action="init_chev.php" method="post">
					<button name="replay" id="replay">Recommencer initiation</button>
					<button name="continue_to_jester" id="continue">Initiation suivante</button>
				</form>	
			</div>
		</section>
	</body>
	<script src="script/init_chev.js"></script>
	<script src="script/token_move.js"></script>
</html>