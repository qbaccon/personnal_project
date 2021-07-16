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

function chk_move(tile_s, tile_e, coo_s, coo_e, type, inv_clr)
{
	let bad_move = 0;
	if (tile_s.src.search("pion") > 0)
		bad_move = move_pion(tile_s, tile_e, coo_s, coo_e, type);
	else if (tile_s.src.search("tour") > 0)
		bad_move = move_tour(tile_s, tile_e, coo_s, coo_e, type, inv_clr);
	else if (tile_s.src.search("chevalier") > 0)
		bad_move = move_chev(tile_s, tile_e, coo_s, coo_e, type, inv_clr);
	else if (tile_s.src.search("fou") > 0)
		bad_move = move_fou(tile_s, tile_e, coo_s, coo_e, type, inv_clr);
	else if (tile_s.src.search("reine") > 0)
		bad_move = move_reine(tile_s, tile_e, coo_s, coo_e, type, inv_clr);
	else if (tile_s.src.search("roi") > 0)
		bad_move = move_roi(tile_s, tile_e, coo_s, coo_e, type, inv_clr);
	else
		return 1;
	return bad_move;
}

function chk_mv_mate(tile_e, coo_s, coo_e, inv_clr)
{
	let col_tmp = "a";
	let row_tmp = 1;
	let coo_tmp = col_tmp + row_tmp;
	let tile_tmp = document.querySelector("." + coo_tmp + " img");
	while (row_tmp != 6)
	{
		while (col_tmp != "f")
		{
			coo_tmp = col_tmp + row_tmp;
			tile_tmp = document.querySelector("." + coo_tmp + " img");
			if (coo_tmp != coo_s && coo_tmp != coo_e)
			{	
				if (!(chk_move(tile_tmp, tile_e, coo_tmp, coo_e, "C", inv_clr)))
					return 1;
			}
			col_tmp = String.fromCharCode(col_tmp.charCodeAt(0) + 1);
		}
		col_tmp = "a";
		row_tmp++;
	}
	return 0;
}

const btn_move = document.querySelector("#send_m");
const btn_ctn = document.querySelector("#continue");
let goal = document.querySelector("p#goal");
let p_msg = document.querySelector("p.msg");
let till_goal1;

btn_move.addEventListener('click', function() {
	let bad_move = 0;
	let coo_s = document.querySelector(".col_s").value + document.querySelector(".row_s").value;
	let coo_e = document.querySelector(".col_e").value + document.querySelector(".row_e").value;
	let tile_s = document.querySelector("." + coo_s + " img");
	let tile_e = document.querySelector("." + coo_e + " img");
	if (tile_s.src.search("roiW") > 0)
		bad_move = move_roi(tile_s, tile_e, coo_s, coo_e, "M", "B");
	else
		bad_move = 1;
	if (bad_move == 1)
	{
		p_msg.style.filter = "opacity(100%)";
		window.setTimeout(function(){
			p_msg.style.filter = "opacity(0%)";
		}, 3500);
	}
	till_goal1 = document.querySelector(".b4 img");
	if (till_goal1.src.search("pionB") < 0)
	{
		btn_move.style.display = "none";
		btn_ctn.style.display = "inline";
		goal.textContent = "Objectif rempli, vous avez terminer toutes les initiations";
	}
});