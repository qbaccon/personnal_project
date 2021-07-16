<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8"/>
		<link rel="stylesheet" href="style/game.css"/>
		<link rel="icon" href="token/icons8-roiB-50.png"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Echec</title>
	</head>
	<a href="index.php">Retour</a>
	<h1>Tour des pièces blanches</h1>
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
			<button name="send_upg" id="send_upg">Valider</button>
		</section>
		<section class='board'>
			<div class='coo_num'><p>8</p></div>
			<div class='a8' id='white'><img src='token/icons8-tourB-50.png' width='40px' height='40px'/></div>
			<div class='b8' id='black'><img src='token/icons8-chevalierB-50.png' width='40px' height='40px'/></div>
			<div class='c8' id='white'><img src='token/icons8-fouB-50.png' width='40px' height='40px'/></div>
			<div class='d8' id='black'><img src='token/icons8-reineB-50.png' width='40px' height='40px'/></div>
			<div class='e8' id='white'><img src='token/icons8-roiB-50.png' width='40px' height='40px'/></div>
			<div class='f8' id='black'><img src='token/icons8-fouB-50.png' width='40px' height='40px'/></div>
			<div class='g8' id='white'><img src='token/icons8-chevalierB-50.png' width='40px' height='40px'/></div>
			<div class='h8' id='black'><img src='token/icons8-tourB-50.png' width='40px' height='40px'/></div>
			
			<div class='coo_num'><p>7</p></div>
			<div class='a7' id='black'><img src='token/icons8-pionB-50.png' width='40px' height='40px'/></div>
			<div class='b7' id='white'><img src='token/icons8-pionB-50.png' width='40px' height='40px'/></div>
			<div class='c7' id='black'><img src='token/icons8-pionB-50.png' width='40px' height='40px'/></div>
			<div class='d7' id='white'><img src='token/icons8-pionB-50.png' width='40px' height='40px'/></div>
			<div class='e7' id='black'><img src='token/icons8-pionB-50.png' width='40px' height='40px'/></div>
			<div class='f7' id='white'><img src='token/icons8-pionB-50.png' width='40px' height='40px'/></div>
			<div class='g7' id='black'><img src='token/icons8-pionB-50.png' width='40px' height='40px'/></div>
			<div class='h7' id='white'><img src='token/icons8-pionB-50.png' width='40px' height='40px'/></div>
			
			<div class='coo_num'><p>6</p></div>
			<div class='a6' id='white'><img src='Z' width='0px' height='0px'/></div>
			<div class='b6' id='black'><img src='Z' width='0px' height='0px'/></div>
			<div class='c6' id='white'><img src='Z' width='0px' height='0px'/></div>
			<div class='d6' id='black'><img src='Z' width='0px' height='0px'/></div>
			<div class='e6' id='white'><img src='Z' width='0px' height='0px'/></div>
			<div class='f6' id='black'><img src='Z' width='0px' height='0px'/></div>
			<div class='g6' id='white'><img src='Z' width='0px' height='0px'/></div>
			<div class='h6' id='black'><img src='Z' width='0px' height='0px'/></div>

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
			<div class='a2' id='white'><img src='token/icons8-pionW-50.png' width='40px' height='40px'/></div>
			<div class='b2' id='black'><img src='token/icons8-pionW-50.png' width='40px' height='40px'/></div>
			<div class='c2' id='white'><img src='token/icons8-pionW-50.png' width='40px' height='40px'/></div>
			<div class='d2' id='black'><img src='token/icons8-pionW-50.png' width='40px' height='40px'/></div>
			<div class='e2' id='white'><img src='token/icons8-pionW-50.png' width='40px' height='40px'/></div>
			<div class='f2' id='black'><img src='token/icons8-pionW-50.png' width='40px' height='40px'/></div>
			<div class='g2' id='white'><img src='token/icons8-pionW-50.png' width='40px' height='40px'/></div>
			<div class='h2' id='black'><img src='token/icons8-pionW-50.png' width='40px' height='40px'/></div>

			<div class='coo_num'><p>1</p></div>
			<div class='a1' id='black'><img src='token/icons8-tourW-50.png' width='40px' height='40px'/></div>
			<div class='b1' id='white'><img src='token/icons8-chevalierW-50.png' width='40px' height='40px'/></div>
			<div class='c1' id='black'><img src='token/icons8-fouW-50.png' width='40px' height='40px'/></div>
			<div class='d1' id='white'><img src='token/icons8-reineW-50.png' width='40px' height='40px'/></div>
			<div class='e1' id='black'><img src='token/icons8-roiW-50.png' width='40px' height='40px'/></div>
			<div class='f1' id='white'><img src='token/icons8-fouW-50.png' width='40px' height='40px'/></div>
			<div class='g1' id='black'><img src='token/icons8-chevalierW-50.png' width='40px' height='40px'/></div>
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
		<!-- <section class="form_select">
			<p id="piece">Séléctionner une pièce</p>
			<div class="slct">
				<select name="col_s" class="col_s">
					<option value="a">A</option>
					<option value="b">B</option>
					<option value="c">C</option>
					<option value="d">D</option>
					<option value="e">E</option>
					<option value="f">F</option>
					<option value="g">G</option>
					<option value="h">H</option>
				</select>
				<select name="row_s" class="row_s">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
				</select>
			</div>
			<p id="end">Séléctionner la destination</p>
			<div class="slct">
				<select name="col_e" class="col_e">
					<option value="a">A</option>
					<option value="b">B</option>
					<option value="c">C</option>
					<option value="d">D</option>
					<option value="e">E</option>
					<option value="f">F</option>
					<option value="g">G</option>
					<option value="h">H</option>
				</select>			
				<select name="row_e" class="row_e">
					<option value="1">1</option>				
					<option value="2">2</option>				
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
				</select>
			</div>
			</br>
			<button name="send_m" id="send_m">Valider</button>
		</section> -->
	</section>
	<p id="chess_msg">Votre Roi est en échec</p>
	<script src="class/token_captured.js"></script>
	<script src="script/pat_ending.js"></script>
	<script src="script/token_move.js"></script>
	<script src="script/move.js"></script>
	<script src="script/king_move_mate.js"></script>
	<script src="script/special_move.js"></script>
	<script src="script/upgrade.js"></script>
</html>