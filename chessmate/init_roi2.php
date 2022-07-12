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
		<h1>Initiation - Roi <img src='token/icons8-roiW-50.png' width='50px' height='50px'/>
			<img src='token/icons8-roiB-50.png' width='50px' height='50px'/></h1>
		<p class="msg">Mouvement incorrect</p>
		<section class="game">
			<section class='board_initK2'>
				<div class='coo_num'><p>5</p></div>
				<div class='a5' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='b5' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='c5' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='d5' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='e5' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='f5' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='g5' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='h5' id='white'><img src='Z' width='0px' height='0px'/></div>

				<div class='coo_num'><p>4</p></div>
				<div class='a4' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='b4' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='c4' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='d4' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='e4' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='f4' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='g4' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='h4' id='black'><img src='Z' width='0px' height='0px'/></div>

				<div class='coo_num'><p>3</p></div>
				<div class='a3' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='b3' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='c3' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='d3' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='e3' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='f3' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='g3' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='h3' id='white'><img src='Z' width='0px' height='0px'/></div>

				<div class='coo_num'><p>2</p></div>
				<div class='a2' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='b2' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='c2' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='d2' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='e2' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='f2' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='g2' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='h2' id='black'><img src='Z' width='0px' height='0px'/></div>

				<div class='coo_num'><p>1</p></div>
				<div class='a1' id='black'><img src='token/icons8-tourW-50.png' width='40px' height='40px'/></div>
				<div class='b1' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='c1' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='d1' id='white'><img src='token/icons8-reineW-50.png' width='40px' height='40px'/></div>
				<div class='e1' id='black'><img src='token/icons8-roiW-50.png' width='40px' height='40px'/></div>
				<div class='f1' id='white'><img src='Z' width='0px' height='0px'/></div>
				<div class='g1' id='black'><img src='Z' width='0px' height='0px'/></div>
				<div class='h1' id='white'><img src='token/icons8-tourW-50.png' width='40px' height='40px'/></div>
					
				<div class='coo_x'></div>
				<div class='coo_chr'><p>A</p></div>
				<div class='coo_chr'><p>B</p></div>
				<div class='coo_chr'><p>C</p></div>
				<div class='coo_chr'><p>D</p></div>
				<div class='coo_chr'><p>E</p></div>
				<div class='coo_chr'><p>F</p></div>
				<div class='coo_chr'><p>G</p></div>
				<div class='coo_chr'><p>H</p></div>
			</section>
		</section>
		<section id="train">
			<p>
			Le roi peut effectuer un mouvement spécial appellé le roque.</br>
			Ce mouvement consiste à déplacer le roi de deux cases vers la tour et de placer cette dernière de l'autre côté du roi.</br>
			Il y a cependant trois règles à respecter: toutes les cases entre le roi est la tour doivent être vide</br>
			,le roi ne doit pas pouvoir être mis en échec sur les cases où il vas se déplacer et le roi et la tour doivent se trouver à leur position d'origine.</br>
			Pour effectuer ce mouvement séléctionnez le roi et déplacer le à deux cases de celui-ci vers la gauche ou la droite</br>
			Si toutes les conditions sont réunies, le roi et la tour se déplaceront en même temps.
			</p>
			<p id="goal">Votre objectif est de roquer (soit à droite, soit à gauche)</p>
			<div id="btn">
				<form action="init_roi2.php" method="post">
					<button name="replay" id="replay">Recommencer initiation</button>
					<button name="continue_to_king3" id="continue">Initiation suivante</button>
				</form>	
			</div>
		</section>
	</body>
	<script src="script/special_move.js"></script>
	<script src="script/token_move.js"></script>
	<script src="script/init_roi2.js"></script>
</html>