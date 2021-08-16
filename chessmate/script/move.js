function chk_move(tile_s, tile_e, coo_s, coo_e, type, inv_clr, clr)
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
		bad_move = move_roi(tile_s, tile_e, coo_s, coo_e, type, inv_clr, clr);
	else
		return 1;
	return bad_move;
}

function chk_spe_move(coo_s, coo_e, inv_clr, clr)
{
	let bad_move = 0;
	bad_move = lroque(coo_s, coo_e, inv_clr, clr);
	if (bad_move == 1)
		bad_move = broque(coo_s, coo_e, inv_clr, clr);
	return bad_move;
}

function get_captr(tc_white, tc_black, src_e_save, clr)
{
	if (clr == "W")
	{
		if (src_e_save.search("tour") > 0)
			tc_white.tower += 1;
		if (src_e_save.search("chev") > 0)
			tc_white.horsem += 1;
		if (src_e_save.search("fou") > 0)
			tc_white.jester += 1;
		if (src_e_save.search("reine") > 0)
			tc_white.queen += 1;
	}
	else if (clr =="B")
	{
		if (src_e_save.search("tour") > 0)
			tc_black.tower += 1;
		if (src_e_save.search("chev") > 0)
			tc_black.horsem += 1;
		if (src_e_save.search("fou") > 0)
			tc_black.jester += 1;
		if (src_e_save.search("reine") > 0)
			tc_black.queen += 1;
	}
}

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

function rvt_move(tile_s, tile_e, src_e_save)
{
	tile_s.src = tile_e.src;
	tile_s.width = "40";
	tile_s.height = "40";
	tile_e.src = src_e_save;
	if (src_e_save.search("Z") > 0)
	{
		tile_e.width = "0";
		tile_e.height = "0";
	}
}

function send_move(inv_clr, clr, tc_white, tc_black, tile_s, coo_s, tile_e, coo_e)
{
	let king_coo;
	let king_till;
	let src_e_save = tile_e.src;
	if (tile_s.src.search(clr) > 0)
	{
		if ((chk_move(tile_s, tile_e, coo_s, coo_e, "M", inv_clr, clr) == 1)
		&& (chk_spe_move(coo_s, coo_e, inv_clr, clr) == 1))
		{
			return 0;
		}
		else
		{
			king_coo = get_king_coo(clr);
			king_till = document.querySelector("." + king_coo + " img");
			if (chk_mv_mate(king_till, king_coo, king_coo, inv_clr, clr))
			{
				rvt_move(tile_s, tile_e, src_e_save);
				return 0;
			}
			if (src_e_save.search("Z") < 0)
				get_captr(tc_white, tc_black, src_e_save, clr);
			return 1;
		}
	}
	else
		return 0;
}

function end_game(clr)
{
	if (clr == "B")
		title.textContent = "Victoire des pièces blanches !";
	else
		title.textContent = "Victoire des pièces noires !";
}

let king_coo;
let king_till;
let coo_token_atk_king;
let bm_msg = document.querySelector(".msg");
let chess_msg = document.querySelector("#chess_msg");
const title = document.querySelector("h1");
let clr = "W";
let inv_clr = "B";
let end = 0;
let tc_white = new Token_captr('W', 0, 0, 0, 0);
let tc_black = new Token_captr('B', 0, 0, 0, 0);

const board_till = document.querySelectorAll("#white, #black");
let save_till;
let till_cnt = 0;
let coo_s;
let till_s;
let coo_e;
let till_e;
board_till.forEach(elem => elem.addEventListener('click', function()
{
	if (till_cnt == 0 && end == 0)
	{
		till_s = document.querySelector("." + this.className + " img");
		coo_s = this.className;
		save_till = this;
		this.style.backgroundColor = "#7e1515";
		till_cnt = 1;
	}
	else if (till_cnt == 1 && end == 0)
	{
		till_e = document.querySelector("." + this.className + " img");
		coo_e = this.className;
		till_cnt = 2;
	}
	if (till_cnt == 2 && end == 0)
	{
		if (send_move(inv_clr, clr, tc_white, tc_black, till_s, coo_s, till_e, coo_e))
		{
			if (clr == "W")
				clr = "B";
			else
				clr = "W";
			if (clr == "W")
				inv_clr ="B";
			else
				inv_clr = "W";
			king_coo = get_king_coo(clr);
			king_till = document.querySelector("." + king_coo + " img");
			coo_token_atk_king = chk_mv_mate(king_till, king_coo, king_coo, inv_clr, clr);
			if (coo_token_atk_king != 0)
			{
				chess_msg.style.filter = "opacity(100%)";
				if ((chk_till_around_king(king_till, king_coo, inv_clr, clr))
				&& (can_handle_attaker(coo_token_atk_king, king_coo, clr, inv_clr)))
				{
					chess_msg.style.filter = "opacity(0%)";
					end_game(clr);
					end = 1;
				}
			}
			else
				chess_msg.style.filter = "opacity(0%)";
			if (!(can_move(king_till, king_coo, clr, inv_clr)))
			{
				pat_ending();
				end = 1;
			}
		}
		else
		{
			bm_msg.style.filter = "opacity(100%)";
			window.setTimeout(function(){
				bm_msg.style.filter = "opacity(0%)";
			}, 2500);
		}
		if (end == 0)
		{
			if (clr == "W")
				title.textContent = "Tour des pièces blanches";
			else
				title.textContent = "Tour des pièces noires";
		}
		till_cnt = 0;
		if (save_till.id == "white")
			save_till.style.backgroundColor = "#c5c5c5";
		else
			save_till.style.backgroundColor = "#606060";
	}
}));