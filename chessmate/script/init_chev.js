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
let till_goal3;
let till_goal4;
let till_goal5;

btn_move.addEventListener('click', function() {
	let bad_move = 0;
	let coo_s = document.querySelector(".col_s").value + document.querySelector(".row_s").value;
	let coo_e = document.querySelector(".col_e").value + document.querySelector(".row_e").value;
	let tile_s = document.querySelector("." + coo_s + " img");
	let tile_e = document.querySelector("." + coo_e + " img");
	if (tile_s.src.search("chevalierW") > 0)
		bad_move = move_chev(tile_s, tile_e, coo_s, coo_e, "M", "B");
	else
		bad_move = 1;
	if (bad_move == 1)
	{
		p_msg.style.filter = "opacity(100%)";
		window.setTimeout(function(){
			p_msg.style.filter = "opacity(0%)";
		}, 3500);
	}
	till_goal1 = document.querySelector(".a3 img");
	till_goal2 = document.querySelector(".b5 img");
	till_goal3 = document.querySelector(".d5 img");
	till_goal4 = document.querySelector(".e3 img");
	till_goal5 = document.querySelector(".c2 img");
	if (till_goal1.src.search("pionB") < 0 && till_goal2.src.search("pionB") < 0
	&& till_goal3.src.search("pionB") < 0 && till_goal4.src.search("pionB") < 0
	&& till_goal5.src.search("pionB") < 0)
	{
		btn_move.style.display = "none";
		btn_ctn.style.display = "inline";
		goal.textContent = "Objectif rempli, vous pouvez passer à l'initiation suivante";
	}
});