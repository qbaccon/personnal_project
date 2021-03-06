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
		<h1>Initiation - Pions <img src='token/icons8-pionW-50.png' width='50px' height='50px'/>
			<img src='token/icons8-pionB-50.png' width='50px' height='50px'/></h1>
		<p class="msg">Mouvement incorrect</p>
		<section class="game">
		<section class='upgrade'>
			<p>Promotion en:</p>
			<div class="slct">
				<select name="token" class="token">
					<option value="tour">Tour</option>
					<option value="chevalier">Chevalier</option>
					<option value="fou">Fou</option>
					<option value="reine">Reine</option>
				</select>
			</div>
			</br>
			<button name="send_upg_ini" id="send_upg_ini">Valider</button>
		</section>
			<section class='board'>
				<div class='coo_num'><p>5</p></div>
				<div class='a5' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='b5' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='c5' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='d5' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='e5' id='black'><img src='Z' width='0px' height='0px'/></div>

				<div class='coo_num'><p>4</p></div>
				<div class='a4' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='b4' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='c4' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='d4' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='e4' id='white'><img src='Z' width='0px' height='0px'/></div>

				<div class='coo_num'><p>3</p></div>
				<div class='a3' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='b3' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='c3' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='d3' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='e3' id='black'><img src='Z' width='0px' height='0px'/></div>

				<div class='coo_num'><p>2</p></div>
				<div class='a2' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='b2' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='c2' id='white'><img src='token/icons8-pionW-50.png' width='40px' height='40px'/></div>
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
			<p>
			Le pion peut ??galement ??tre promu, c'est ?? dire qu'il peut ??tre ??chang?? contre une autre pi??ce</br>
			Cependant pour ce faire il doit atteindre la derni??re ligne en face de lui (la ligne 8</br>
			pour les pi??ces blanches et la ligne 1 pour les pi??ces noir).</br>
			Dans notre exemple, ce sera la ligne 5 pour les pi??ces blanches.
			</p>
			<p id="goal">Votre objectif est de promouvoir votre pion</p>
			<div id="btn">
				<form action="init_pion2.php" method="post">
					<button name="replay" id="replay">Recommencer initiation</button>
					<button name="continue_to_tower" id="continue">Initiation suivante</button>
				</form>	
			</div>
		</section>
	</body>
	<!-- <script src="script/upgrade.js"></script> -->
	<script src="script/init_pion2.js"></script>
	<script src="script/token_move.js"></script>
</html>