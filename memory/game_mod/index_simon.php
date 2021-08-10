<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8"/>
		<link rel="stylesheet" href="../style/game_simon.css"/>
		<!-- <link rel="icon" href="token/icons8-roiB-50.png"/> -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Jeu - Simon</title>
	</head>
	<header>
		<a href="../index.php">Retour</a>
	</header>
	<body>
		<p id="title">Jeu de mémoire - Simon</p>
		<section id="game">
			<div id="htp">
				<p>
					Le but du jeu est de répéter la séquence de couleur qui se joue</br>
					Vous pouvez répéter la séquence en cours mais cela ne vous fera pas progresser</br>
					Essayer de faire la plus grande série (et sans tricher)
				</p>
			</div>
			<div id="board">
				<div class="clr" id="red"></div>
				<div class="clr" id="yellow"></div>
				<div class="clr" id="blue"></div>
				<div class="clr" id="green"></div>
			</div>
			<div id="score">
				<p id="current">Série actuelle: 0</p>
				<p id="record">Meilleur série: 0</p>
			</div>
			<div>
				<button id="repeat">Répéter la séquence</button>
			</div>
		</section>
	</body>
	<script src="../script/simon/main.js"></script>
</html>