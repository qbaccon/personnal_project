function play_seq(clr_div)
{
	let clr_hit = Math.floor(Math.random() * 4);
	switch (clr_hit) {
		case 0:
			clr_div[0].style.backgroundColor = "#e50000";
			window.setTimeout(function(){
				clr_div[0].style.backgroundColor = "#500000";
			}, 1500);
			break;
		case 1:
			clr_div[1].style.backgroundColor = "#e5e500";
			window.setTimeout(function(){
				clr_div[1].style.backgroundColor = "#505000";
			}, 1500);
			break;
		case 2:
			clr_div[2].style.backgroundColor = "#0000e5";
			window.setTimeout(function(){
				clr_div[2].style.backgroundColor = "#000050";
			}, 1500);
			break;
		case 3:
			clr_div[3].style.backgroundColor = "#00e500";
			window.setTimeout(function(){
				clr_div[3].style.backgroundColor = "#005000";
			}, 1500);
			break;
	}
	return clr_hit;
}

function player_seq()
{
	console.log("hhh");
}

const clr_div = document.querySelectorAll(".clr");
let tmp_clr;
let seq = [];
let seq_length = 3;
let playable = 0;
let interID = setInterval(function(){
	tmp_clr = play_seq(clr_div);
	seq.push(tmp_clr);
}, 2000);
window.setTimeout(function(){
	playable = 1;
	clearInterval(interID);
}, seq_length * 2000);
clr_div.forEach(item => {
	item.addEventListener('click', function(){

	});
});