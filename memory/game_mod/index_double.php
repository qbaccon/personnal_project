<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8"/>
		<link rel="stylesheet" href="../style/game_double.css"/>
		<!-- <link rel="icon" href="token/icons8-roiB-50.png"/> -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Jeu - Double</title>
	</head>
	<header>
	</header>
	<body>
		<p id="title">Jeu de mémoire - Double</p>
		<div>
			<p>Vous pouvez choisir un niveau de difficulté ici</p>
		</div>
		<div id="level">
			<button id="ez">Facile</button>
			<button id="casu">Normal</button>
			<button id="hard">Difficile</button>
		</div>
		<div id="htp">
			<p>
				Le but du jeu est de trouver toutes les pairs de nombres avec le moins de coups possibles</br>
				Pour séléctionner un bloc cliquer simplement dessus
			</p>
		</div>
		<div id="grid_game">
			<div class="ez" id="a1"><p></p></div>
			<div class="ez" id="b1"><p></p></div>
			<div class="ez" id="c1"><p></p></div>
			<div class="ez" id="d1"><p></p></div>
			<div class="casu" id="e1"><p></p></div>
			<div class="hard" id="f1"><p></p></div>

			<div class="ez" id="a2"><p></p></div>
			<div class="ez" id="b2"><p></p></div>
			<div class="ez" id="c2"><p></p></div>
			<div class="ez" id="d2"><p></p></div>
			<div class="casu" id="e2"><p></p></div>
			<div class="hard" id="f2"><p></p></div>

			<div class="ez" id="a3"><p></p></div>
			<div class="ez" id="b3"><p></p></div>
			<div class="ez" id="c3"><p></p></div>
			<div class="ez" id="d3"><p></p></div>
			<div class="casu" id="e3"><p></p></div>
			<div class="hard" id="f3"><p></p></div>

			<div class="casu" id="a4"><p></p></div>
			<div class="casu" id="b4"><p></p></div>
			<div class="casu" id="c4"><p></p></div>
			<div class="casu" id="d4"><p></p></div>
			<div class="casu" id="e4"><p></p></div>
			<div class="hard" id="f4"><p></p></div>

			<div class="hard" id="a5"><p></p></div>
			<div class="hard" id="b5"><p></p></div>
			<div class="hard" id="c5"><p></p></div>
			<div class="hard" id="d5"><p></p></div>
			<div class="hard" id="e5"><p></p></div>
			<div class="hard" id="f5"><p></p></div>
		</div>
		<div id="counter">
			<p id="hit">Nombre de coups ratés: 0</p>
			<p id="dbl_number">Nombre de pairs restantes:</p>
		</div>
		<form action="index_double.php" method="post">
			<div id="end">
				<p>Félécitation vous avez terminé cette grille</p>
				<button>Nouveau jeu</button>
				<input type="hidden" value="1"></input>
			</div>
		</form>
	</body>
	<script src="../script/double/main.js"></script>
</html>