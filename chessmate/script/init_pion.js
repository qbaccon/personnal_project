function act_move(tile_s, tile_e)
{
	let pctr;
	pctr = tile_s.src;
	tile_s.src = 'Z';
	tile_s.width = "0";
	tile_s.height = "0";
	tile_e.src = pctr;
	tile_e.width = "40";
	tile_e.height = "40";
}

const btn_move = document.querySelector("#send_m");
const btn_ctn = document.querySelector("#continue");
let goal = document.querySelector("p#goal");
let p_msg = document.querySelector("p.msg");
let till_goal1;
let till_goal2;

btn_move.addEventListener('click', function() {
	let bad_move = 0;
	let coo_s = document.querySelector(".col_s").value + document.querySelector(".row_s").value;
	let coo_e = document.querySelector(".col_e").value + document.querySelector(".row_e").value;
	let tile_s = document.querySelector("." + coo_s + " img");
	let tile_e = document.querySelector("." + coo_e + " img");
	if (tile_s.src.search("pionW") > 0)
		bad_move = move_pion(tile_s, tile_e, coo_s, coo_e, "M");
	else
		bad_move = 1;
	if (bad_move == 1)
	{
		p_msg.style.filter = "opacity(100%)";
		window.setTimeout(function(){
			p_msg.style.filter = "opacity(0%)";
		}, 3500);
	}
	till_goal1 = document.querySelector(".d4 img");
	till_goal2 = document.querySelector(".d5 img");
	if (till_goal1.src.search("pionW") > 0 || till_goal2.src.search("pionW") > 0)
	{
		btn_move.style.display = "none";
		btn_ctn.style.display = "inline";
		goal.textContent = "Objectif rempli, vous pouvez passer à l'initiation suivante";
	}
});