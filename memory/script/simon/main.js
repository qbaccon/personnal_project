function rdm_hit()
{
	let clr_hit = Math.floor(Math.random() * 4);
	switch (clr_hit) {
		case 0:
			clr_div[0].style.backgroundColor = "#e50000";
			window.setTimeout(function(){
				clr_div[0].style.backgroundColor = "#500000";
			}, 500);
			break;
		case 1:
			clr_div[1].style.backgroundColor = "#e5e500";
			window.setTimeout(function(){
				clr_div[1].style.backgroundColor = "#505000";
			}, 500);
			break;
		case 2:
			clr_div[2].style.backgroundColor = "#0000e5";
			window.setTimeout(function(){
				clr_div[2].style.backgroundColor = "#000050";
			}, 500);
			break;
		case 3:
			clr_div[3].style.backgroundColor = "#00e500";
			window.setTimeout(function(){
				clr_div[3].style.backgroundColor = "#005000";
			}, 500);
			break;
	}
	return clr_hit;
}

function play_seq()
{
	let interID;
	interID = setInterval(function(){
		playable = 0;
		tmp_clr = rdm_hit();
		seq.push(tmp_clr);
	}, 1000);
	window.setTimeout(function(){
		playable = 1;
		repeatable = 1;
		clearInterval(interID);
	}, seq_length * 1000);
}

function repeat_seq()
{
	let i = 0;
	let inter_rep_ID = setInterval(function(){
		switch(seq[i]) {
			case 0:
				clr_div[0].style.backgroundColor = "#e50000";
				window.setTimeout(function(){
					clr_div[0].style.backgroundColor = "#500000";
				}, 500);
				break;
			case 1:
				clr_div[1].style.backgroundColor = "#e5e500";
				window.setTimeout(function(){
					clr_div[1].style.backgroundColor = "#505000";
				}, 500);
				break;
			case 2:
				clr_div[2].style.backgroundColor = "#0000e5";
				window.setTimeout(function(){
					clr_div[2].style.backgroundColor = "#000050";
				}, 500);
				break;
			case 3:
				clr_div[3].style.backgroundColor = "#00e500";
				window.setTimeout(function(){
					clr_div[3].style.backgroundColor = "#005000";
				}, 500);
				break;
		}
		i++;
	}, 1000);
	window.setTimeout(function(){
		playable = 1;
		clearInterval(inter_rep_ID);
	}, seq.length * 1000);
}

function check_seq(seq, player_seq)
{
	let i = 0;
	while (i != seq.length)
	{
		if (seq[i] != player_seq[i])
			return 0;
		i++;
	}
	return 1;
}

function res(check, seq_length)
{
	if (check == 1)
		seq_length++;
	else
		seq_length = 3;
	return seq_length;
}

function score()
{
	p_current_seq.textContent = "Série actuelle: " + current_seq;
	if (hight_score < current_seq)
	{
		hight_score = current_seq
		p_hight_score.textContent = "Meilleur série: " + hight_score;
	}
}

const clr_div = document.querySelectorAll(".clr");
const board_game = document.querySelector("#board");
const p_hight_score = document.querySelector("p#record");
const p_current_seq = document.querySelector("p#current");
const btn_start = document.querySelector("button#start");
const btn_repeat = document.querySelector("button#repeat");
let tmp_clr;
let plr_tmp_clr;
let seq = [];
let player_seq = [];
let seq_length = 3;
let playable = 0;
let repeatable = 0;
let current_seq = 0;
let hight_score = 0;

btn_start.addEventListener('click', function(){
	btn_start.style.display = "none";
	btn_repeat.style.display = "inline-block";
	play_seq(repeatable, playable, seq, seq_length);
});

clr_div.forEach(item => {
	item.addEventListener('click', function(){
		if (playable == 1)
		{
			if (item.id == "red")
			{	
				player_seq.push(0);
				item.style.backgroundColor = "#e50000";
				playable = 0;
				window.setTimeout(function(){
					item.style.backgroundColor = "#500000";
					playable = 1;
				}, 300);
			}
			if (item.id == "yellow")
			{
				player_seq.push(1);
				item.style.backgroundColor = "#e5e500";
				playable = 0;
				window.setTimeout(function(){
					item.style.backgroundColor = "#505000";
					playable = 1;
				}, 300);
			}
			if (item.id == "blue")
			{
				player_seq.push(2);
				item.style.backgroundColor = "#0000e5";
				playable = 0;
				window.setTimeout(function(){
					item.style.backgroundColor = "#000050";
					playable = 1;
				}, 300);
			}
			if (item.id == "green")
			{
				player_seq.push(3);
				item.style.backgroundColor = "#00e500";
				playable = 0;
				window.setTimeout(function(){
					item.style.backgroundColor = "#005000";
					playable = 1;
				}, 300);
			}
		}	
	});
});

board_game.addEventListener('click', function()
{
	if (player_seq.length == seq_length)
	{
		if (check_seq(seq, player_seq) == 1)
		{
			if (repeatable == 1)
			{
				seq_length++;
				current_seq++;
				p_current_seq.style.color = "#008000";
			}
		}
		else
		{
			seq_length = 3;
			current_seq = 0;
			p_current_seq.style.color = "#800000";
		}
		window.setTimeout(function(){
			p_current_seq.style.color = "#000000";
		}, 1000);
		seq.splice(0, seq.length);
		player_seq.splice(0, player_seq.length);
		playable = 0;
		btn_repeat.style.display = "inline-block";
		play_seq(repeatable, playable, seq, seq_length);
		score();
	}
});

btn_repeat.addEventListener('click', function(){
	if (playable == 1 && repeatable == 1)
	{
		player_seq.splice(0, player_seq.length);
		btn_repeat.style.display = "none";
		repeatable = 0;
		playable = 0;
		repeat_seq(seq, playable);
	}
});