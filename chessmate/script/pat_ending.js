function chk_any_move(tile_s, coo_s, clr, inv_clr)
{
	let col_tmp;
	let row_tmp = 1;
	let coo_e;
	let tile_e;
	while (row_tmp != 9)
	{
		col_tmp = "a";
		while (col_tmp != "i")
		{
			coo_e = col_tmp + row_tmp;
			tile_e = document.querySelector("." + coo_e + " img");
			if (!(chk_move(tile_s, tile_e, coo_s, coo_e, "Z", inv_clr, clr)))
				return 1;
			col_tmp = String.fromCharCode(col_tmp.charCodeAt(0) + 1);
		}
		row_tmp++;
	}
	return 0;
}

function can_move(king_till, king_coo, clr, inv_clr)
{
	let col_tmp;
	let row_tmp = 1;
	let coo_tmp;
	let tile_tmp;
	while (row_tmp != 9)
	{
		col_tmp = "a";
		while (col_tmp != "i")
		{
			coo_tmp = col_tmp + row_tmp;
			tile_tmp = document.querySelector("." + coo_tmp + " img");
			if (tile_tmp.src.search(clr) > 0 && tile_tmp.src.search("roi") < 0)
				if(chk_any_move(tile_tmp, coo_tmp, clr, inv_clr))
					return 1;
			col_tmp = String.fromCharCode(col_tmp.charCodeAt(0) + 1);
		}
		row_tmp++;
	}
	if(!(chk_till_around_king(king_till, king_coo, inv_clr, clr)))
		return 1;
	return 0;
}

function pat_ending()
{
	title.textContent = "Pat !";
}