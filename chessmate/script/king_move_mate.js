function get_king_coo(clr)
{
	const board = document.querySelectorAll("#black, #white");
	const board_token = document.querySelectorAll("#black img, #white img");
	let tmp_till;
	let tmp_pctr;
	let i = 0;
	while(board[i])
	{
		tmp_till = board[i];
		tmp_pctr = board_token[i];
		if (tmp_pctr.src.search("roi" + clr) > 0)
			return tmp_till.className;
		i++;
	}
	return 0;
}

function chk_till_around_king(king_till, king_coo, inv_clr, clr)
{
	let tmp_col = Number(king_coo.substr(1, 1)) + 1;
	let tmp_row = king_coo.charCodeAt(0);
	let tmp_coo;
	let tmp_till;
	if (tmp_col < 8)
	{
		tmp_row = String.fromCharCode(tmp_row);
		tmp_coo = tmp_row + tmp_col;
		tmp_till = document.querySelector("." + tmp_coo + " img");
		if (tmp_till.src.search("Z") > 0 || tmp_till.src.search(inv_clr) > 0)
			if(!(chk_mv_mate(tmp_till, king_coo, tmp_coo, inv_clr, inv_clr)))
				return 0;
	}
	tmp_col = Number(king_coo.substr(1, 1)) + 1;
	tmp_row = king_coo.charCodeAt(0) + 1;
	if (tmp_col < 8  && tmp_row < 104)
	{
		tmp_row = String.fromCharCode(tmp_row);
		tmp_coo = tmp_row + tmp_col;
		tmp_till = document.querySelector("." + tmp_coo + " img");
		if (tmp_till.src.search("Z") > 0 || tmp_till.src.search(inv_clr) > 0)
			if(!(chk_mv_mate(tmp_till, king_coo, tmp_coo, inv_clr, inv_clr)))
				return 0;
	}
	tmp_col = Number(king_coo.substr(1, 1));
	tmp_row = king_coo.charCodeAt(0) + 1;
	if (tmp_row < 104)
	{
		tmp_row = String.fromCharCode(tmp_row);
		tmp_coo = tmp_row + tmp_col;
		tmp_till = document.querySelector("." + tmp_coo + " img");
		if (tmp_till.src.search("Z") > 0 || tmp_till.src.search(inv_clr) > 0)
			if(!(chk_mv_mate(tmp_till, king_coo, tmp_coo, inv_clr, inv_clr)))
				return 0;
	}
	tmp_col = Number(king_coo.substr(1, 1) - 1);
	tmp_row = king_coo.charCodeAt(0) + 1;
	if (tmp_col > 0 && tmp_row < 104)
	{
		tmp_row = String.fromCharCode(tmp_row);
		tmp_coo = tmp_row + tmp_col;
		tmp_till = document.querySelector("." + tmp_coo + " img");
		if (tmp_till.src.search("Z") > 0 || tmp_till.src.search(inv_clr) > 0)
			if(!(chk_mv_mate(tmp_till, king_coo, tmp_coo, inv_clr, inv_clr)))
				return 0;
	}
	tmp_col = Number(king_coo.substr(1, 1) - 1);
	tmp_row = king_coo.charCodeAt(0);
	if (tmp_col > 0)
	{
		tmp_row = String.fromCharCode(tmp_row);
		tmp_coo = tmp_row + tmp_col;
		tmp_till = document.querySelector("." + tmp_coo + " img");
		if (tmp_till.src.search("Z") > 0 || tmp_till.src.search(inv_clr) > 0)
			if(!(chk_mv_mate(tmp_till, king_coo, tmp_coo, inv_clr, inv_clr)))
				return 0;
	}
	tmp_col = Number(king_coo.substr(1, 1) - 1);
	tmp_row = king_coo.charCodeAt(0) - 1;
	if (tmp_col > 0 && tmp_row > 97)
	{
		tmp_row = String.fromCharCode(tmp_row);
		tmp_coo = tmp_row + tmp_col;
		tmp_till = document.querySelector("." + tmp_coo + " img");
		if (tmp_till.src.search("Z") > 0 || tmp_till.src.search(inv_clr) > 0)
			if(!(chk_mv_mate(tmp_till, king_coo, tmp_coo, inv_clr, inv_clr)))
				return 0;
	}
	tmp_col = Number(king_coo.substr(1, 1));
	tmp_row = king_coo.charCodeAt(0) - 1;
	if (tmp_row > 97)
	{
		tmp_row = String.fromCharCode(tmp_row);
		tmp_coo = tmp_row + tmp_col;
		tmp_till = document.querySelector("." + tmp_coo + " img");
		if (tmp_till.src.search("Z") > 0 || tmp_till.src.search(inv_clr) > 0)
			if(!(chk_mv_mate(tmp_till, king_coo, tmp_coo, inv_clr, inv_clr)))
				return 0;
	}
	tmp_col = Number(king_coo.substr(1, 1) + 1);
	tmp_row = king_coo.charCodeAt(0) - 1;
	if (tmp_col < 8 && tmp_row > 97)
	{
		tmp_row = String.fromCharCode(tmp_row);
		tmp_coo = tmp_row + tmp_col;
		tmp_till = document.querySelector("." + tmp_coo + " img");
		if (tmp_till.src.search("Z") > 0 || tmp_till.src.search(inv_clr) > 0)
			if(!(chk_mv_mate(tmp_till, king_coo, tmp_coo, inv_clr, inv_clr)))
				return 0;
	}
	return 1;
}

function chk_mv_mate(tile_e, coo_s, coo_e, inv_clr, clr)
{
	let col_tmp = "a";
	let row_tmp = 1;
	let coo_tmp = col_tmp + row_tmp;
	let tile_tmp = document.querySelector("." + coo_tmp + " img");
	while (row_tmp != 9)
	{
		while (col_tmp != "i")
		{
			coo_tmp = col_tmp + row_tmp;
			tile_tmp = document.querySelector("." + coo_tmp + " img");
			if (coo_tmp != coo_s && coo_tmp != coo_e)
			{
				if (tile_tmp.src.search(inv_clr) > 0)
					if (!(chk_move(tile_tmp, tile_e, coo_tmp, coo_e, "C", clr, inv_clr)))
						return coo_tmp;
			}
			col_tmp = String.fromCharCode(col_tmp.charCodeAt(0) + 1);
		}
		col_tmp = "a";
		row_tmp++;
	}
	return 0;
}

function chk_board(till_e, coo_e, inv_clr, clr, action, king_coo, type)
{
	let col_tmp = "a";
	let row_tmp = 1;
	let coo_tmp;
	let tile_tmp;
	while (row_tmp != 9)
	{
		while (col_tmp != "i" || col_tmp == "j")
		{
			coo_tmp = col_tmp + row_tmp;
			if (action == "path" && coo_tmp == king_coo)
			{
				col_tmp = String.fromCharCode(col_tmp.charCodeAt(0) + 1);
				coo_tmp = col_tmp + row_tmp;
			}
			tile_tmp = document.querySelector("." + coo_tmp + " img");
			if (tile_tmp && coo_tmp != coo_e && coo_tmp != coo_e)
			{
				if (tile_tmp.src.search(clr) > 0)
					if (!(chk_move(tile_tmp, till_e, coo_tmp, coo_e, type, inv_clr, clr)))
						return 0;
			}
			col_tmp = String.fromCharCode(col_tmp.charCodeAt(0) + 1);
		}
		col_tmp = "a";
		row_tmp++;
	}
	return 1;
}

function can_handle_attaker(coo_atk, coo_king, clr, inv_clr)
{
	let till_atk = document.querySelector("." + coo_atk + " img");
	let coo_tmp;
	let till_tmp;
	let i = 1;
	if (!(chk_board(till_atk, coo_atk, inv_clr, inv_clr, "take", coo_king, "C")))
		return 1;
	if (till_atk.src.search("tour") > 0 || till_atk.src.search("reine") > 0)
	{
		if (Number(coo_atk.substr(1, 1)) < Number(coo_king.substr(1, 1)))
		{
			while (Number(coo_atk.substr(1, 1)) + i < Number(coo_king.substr(1, 1)))
			{
				coo_tmp = coo_atk.substr(0, 1) + (Number(coo_atk.substr(1, 1)) + i);
				till_tmp = document.querySelector("." + coo_tmp + " img");
				if (!(chk_board(till_tmp, coo_tmp, clr, clr, "path", coo_king, "K")))
					return 0;
				i++;
			}
			i = 1;
		}
		else if (Number(coo_atk.substr(1, 1)) > Number(coo_king.substr(1, 1)))
		{
			while (Number(coo_atk.substr(1, 1)) - i > Number(coo_king.substr(1, 1)))
			{
				coo_tmp = coo_atk.substr(0, 1) + (Number(coo_atk.substr(1, 1)) - i);
				till_tmp = document.querySelector("." + coo_tmp + " img");
				if (!(chk_board(till_tmp, coo_tmp, clr, clr, "path", coo_king, "K")))
					return 0;
				i++;
			}
			i = 1;
		}
		else if (coo_atk.charCodeAt(0) < coo_king.charCodeAt(0))
		{
			while (coo_atk.charCodeAt(0) + i < coo_king.charCodeAt(0))
			{
				coo_tmp = String.fromCharCode(coo_atk.charCodeAt(0) + i) + coo_atk.substr(1, 1);
				till_tmp = document.querySelector("." + coo_tmp + " img");
				if (!(chk_board(till_tmp, coo_tmp, clr, clr, "path", coo_king, "K")))
					return 0;
				i++;
			}
			i = 1;
		}
		else if (coo_atk.charCodeAt(0) > coo_king.charCodeAt(0))
		{
			while (coo_atk.charCodeAt(0) - i > coo_king.charCodeAt(0))
			{
				coo_tmp = String.fromCharCode(coo_atk.charCodeAt(0) - i) + coo_atk.substr(1, 1);
				till_tmp = document.querySelector("." + coo_tmp + " img");
				if (!(chk_board(till_tmp, coo_tmp, clr, clr, "path", coo_king, "K")))
					return 0;
				i++;
			}
			i = 1;
		}
	}
	else if (till_atk.src.search("fou") > 0 || till_atk.src.search("reine") > 0)
	{
		if (coo_atk.charCodeAt(0) < coo_king.charCodeAt(0) &&
		Number(coo_atk.substr(1, 1)) < Number(coo_king.substr(1, 1)))
		{
			while (coo_atk.charCodeAt(0) + i < coo_king.charCodeAt(0))
			{
				coo_tmp = String.fromCharCode(coo_atk.charCodeAt(0) + i) +
				(Number(coo_atk.substr(1, 1)) + i);
				till_tmp = document.querySelector("." + coo_tmp + " img");
				if (!(chk_board(till_tmp, coo_tmp, clr, clr, "path", coo_king, "K")))
					return 0;
				i++;
			}
			i = 1;
		}
		else if (coo_atk.charCodeAt(0) < coo_king.charCodeAt(0) &&
		Number(coo_atk.substr(1, 1)) > Number(coo_king.substr(1, 1)))
		{
			while (coo_atk.charCodeAt(0) + i < coo_king.charCodeAt(0))
			{
				coo_tmp = String.fromCharCode(coo_atk.charCodeAt(0) + i) +
				(Number(coo_atk.substr(1, 1)) - i);
				till_tmp = document.querySelector("." + coo_tmp + " img");
				if (!(chk_board(till_tmp, coo_tmp, clr, clr, "path", coo_king, "K")))
					return 0;
				i++;
			}
			i = 1;
		}
		else if (coo_atk.charCodeAt(0) > coo_king.charCodeAt(0) &&
		Number(coo_atk.substr(1, 1)) > Number(coo_king.substr(1, 1)))
		{
			while (coo_atk.charCodeAt(0) - i > coo_king.charCodeAt(0))
			{
				coo_tmp = String.fromCharCode(coo_atk.charCodeAt(0) - i) +
				(Number(coo_atk.substr(1, 1)) - i);
				till_tmp = document.querySelector("." + coo_tmp + " img");
				if (!(chk_board(till_tmp, coo_tmp, clr, clr, "path", coo_king, "K")))
					return 0;
				i++;
			}
			i = 1;
		}
		else if (coo_atk.charCodeAt(0) > coo_king.charCodeAt(0) &&
		Number(coo_atk.substr(1, 1)) < Number(coo_king.substr(1, 1)))
		{
			while (coo_atk.charCodeAt(0) - i > coo_king.charCodeAt(0))
			{
				coo_tmp = String.fromCharCode(coo_atk.charCodeAt(0) - i) +
				(Number(coo_atk.substr(1, 1)) + i);
				till_tmp = document.querySelector("." + coo_tmp + " img");
				if (!(chk_board(till_tmp, coo_tmp, clr, clr, "path", coo_king, "K")))
					return 0;
				i++;
			}
			i = 1;
		}
	}
	return 1;
}