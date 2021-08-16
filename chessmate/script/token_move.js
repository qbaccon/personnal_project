function move_pion(tile_s, tile_e, coo_s, coo_e, type)
{
	if (tile_s.src.search("W") > 0)
	{
		if (type == "M" || type == "K")
		{
			if ((Number(coo_e.substr(1, 1)) == Number(coo_s.substr(1, 1)) + 1) &&
				coo_e.substr(0, 1) == coo_s.substr(0, 1))
			{
				if (tile_e.src.search("Z") > 0)
				{
					if (type == "M")
					{
						act_move(tile_s, tile_e);
						if (coo_e.substr(1, 1) == "8")
							form_toggle();
						return 0;
					}
					else
						return 1;
				}
			}
			else if (coo_s.substr(1, 1) == "2")
			{
				if ((Number(coo_e.substr(1, 1)) == Number(coo_s.substr(1, 1)) + 2) &&
				coo_e.substr(0, 1) == coo_s.substr(0, 1))
				{
					if (tile_e.src.search("Z") > 0)
					{
						if (type == "M")
							act_move(tile_s, tile_e);
						return 0;
					}
					else
						return 1;
				}
			}
		}
		if ((Number(coo_e.substr(1, 1)) == Number(coo_s.substr(1, 1)) + 1) &&
				(coo_e.charCodeAt(0) == coo_s.charCodeAt(0) + 1))
		{
			if (tile_e.src.search("B") > 0 || type == "C")
			{
				if (type == "M")
				{
					act_move(tile_s, tile_e);
					if (coo_e.substr(1, 1) == "8")
							form_toggle();
					return 0;
				}
			}
			else
				return 1;
		}
		else if ((Number(coo_e.substr(1, 1)) == Number(coo_s.substr(1, 1)) + 1) &&
				(coo_e.charCodeAt(0) == coo_s.charCodeAt(0) - 1))
		{
			if (tile_e.src.search("B") > 0 || type == "C")
			{
				if (type == "M")
				{
					act_move(tile_s, tile_e);
					if (coo_e.substr(1, 1) == "8")
							form_toggle();
					return 0;
				}
			}
			else
				return 1;
		}
		else
			return 1;
	}
	else if (tile_s.src.search("B") > 0)
	{
		if (type == "M" || type == "K")
		{
			if ((Number(coo_e.substr(1, 1)) == Number(coo_s.substr(1, 1)) - 1) &&
				coo_e.substr(0, 1) == coo_s.substr(0, 1))
			{
				if (tile_e.src.search("Z") > 0)
				{
					if (type == "M")
					{
						act_move(tile_s, tile_e);
						if (coo_e.substr(1, 1) == "1")
							form_toggle();
						return 0;				
					}
				}
				else
					return 1;		
			}
			else if (coo_s.substr(1, 1) == "7")
			{
				if ((Number(coo_e.substr(1, 1)) == Number(coo_s.substr(1, 1)) - 2) &&
				coo_e.substr(0, 1) == coo_s.substr(0, 1))
				{
					if (tile_e.src.search("Z") > 0)
					{
						if (type == "M")
							act_move(tile_s, tile_e);
						return 0;
					}
					else
						return 1;
				}
			}
		}
		if ((Number(coo_e.substr(1, 1)) == Number(coo_s.substr(1, 1)) - 1) &&
				(coo_e.charCodeAt(0) == coo_s.charCodeAt(0) + 1))
		{
			if (tile_e.src.search("W") > 0 || type == "C")
			{
				if (type == "M")
					act_move(tile_s, tile_e);
					if (coo_e.substr(1, 1) == "1")
							form_toggle();
					return 0;
			}
			else
				return 1;
		}
		else if ((Number(coo_e.substr(1, 1)) == Number(coo_s.substr(1, 1)) - 1) &&
				(coo_e.charCodeAt(0) == coo_s.charCodeAt(0) - 1))
		{
			if (tile_e.src.search("W") > 0 || type =="C")
			{
				if (type == "M")
				{
					act_move(tile_s, tile_e);
					if (coo_e.substr(1, 1) == "1")
							form_toggle();
					return 0;
				}
			}
			else
				return 1;
		}
		else
			return 1;
	}
	else
		return 1;
}

function move_tour(tile_s, tile_e, coo_s, coo_e, type, inv_clr)
{
	if ((Number(coo_s.substr(1, 1)) < Number(coo_e.substr(1, 1))) &&
		coo_e.substr(0, 1) == coo_s.substr(0, 1))
	{
		let bad_move = 0;
		let i = 1;
		let till;
		while (Number(coo_s.substr(1, 1)) + i < Number(coo_e.substr(1, 1)))
		{
			till = document.querySelector("." + coo_s.substr(0,1) + (Number(coo_s.substr(1,1)) + i) + " img").src;
			if (!(till.search("Z") > 0))
				if (till.search("roi" + inv_clr) < 0)
					bad_move = 1;
			i++;
		}
		if (!bad_move)
		{
			if (tile_e.src.search(inv_clr) > 0 || tile_e.src.search("Z") > 0)
			{
				if (type == "M")
					act_move(tile_s, tile_e);
			}
			else
				return 1;
		}
		return bad_move;
	}
	else if ((Number(coo_s.substr(1, 1)) > Number(coo_e.substr(1, 1))) &&
		coo_e.substr(0, 1) == coo_s.substr(0, 1))
	{
		let bad_move = 0;
		let i = 1;
		let till;
		while (Number(coo_s.substr(1, 1)) - i > Number(coo_e.substr(1, 1)))
		{
			till = document.querySelector("." + coo_s.substr(0,1) + (Number(coo_s.substr(1,1)) - i) + " img").src;
			if (!(till.search("Z") > 0))
				if (till.search("roi" + inv_clr) < 0)
					bad_move = 1;
			i++;
		}
		if (!bad_move)
		{
			if (tile_e.src.search(inv_clr) > 0 || tile_e.src.search("Z") > 0)
			{
				if (type == "M")
					act_move(tile_s, tile_e);
			}
			else
				return 1;
		}
		return bad_move;
	}
	else if ((coo_s.charCodeAt(0) > coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) == Number(coo_e.substr(1, 1))))
	{
		let bad_move = 0;
		let i = 1;
		let till;
		while (coo_s.charCodeAt(0) - i > coo_e.charCodeAt(0))
		{
			till = document.querySelector("." + String.fromCharCode(coo_s.charCodeAt(0) - i) + Number(coo_s.substr(1,1)) + " img").src;
			if (!(till.search("Z") > 0))
				if (till.search("roi" + inv_clr) < 0)
					bad_move = 1;
			i++;
		}
		if (!bad_move)
		{
			if (tile_e.src.search(inv_clr) > 0 || tile_e.src.search("Z") > 0)
			{
				if (type == "M")
					act_move(tile_s, tile_e);
			}
			else
				return 1;
		}
		return bad_move;
	}
	else if ((coo_s.charCodeAt(0) < coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) == Number(coo_e.substr(1, 1))))
	{
		let bad_move = 0;
		let i = 1;
		let till;
		while (coo_s.charCodeAt(0) + i < coo_e.charCodeAt(0))
		{
			till = document.querySelector("." + String.fromCharCode(coo_s.charCodeAt(0) + i) + Number(coo_s.substr(1,1)) + " img").src;
			if (!(till.search("Z") > 0))
				if (till.search("roi" + inv_clr) < 0)
					bad_move = 1;
			i++;
		}
		if (!bad_move)
		{
			if (tile_e.src.search(inv_clr) > 0 || tile_e.src.search("Z") > 0)
			{
				if (type == "M")
					act_move(tile_s, tile_e);
			}
			else
				return 1;
		}
		return bad_move;
	}
	else
		return 1;
}

function move_chev(tile_s, tile_e, coo_s, coo_e, type, inv_clr)
{
	if (((coo_s.charCodeAt(0) + 1) == coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) + 2) == Number(coo_e.substr(1, 1)))
	{
		if (tile_e.src.search(inv_clr) > 0 || tile_e.src.search("Z") > 0)
		{
			if (type == "M")
				act_move(tile_s, tile_e);
		}
		else
			return 1;
	}
	else if (((coo_s.charCodeAt(0) + 2) == coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) + 1) == Number(coo_e.substr(1, 1)))
	{
		if (tile_e.src.search(inv_clr) > 0 || tile_e.src.search("Z") > 0)
		{
			if (type == "M")
				act_move(tile_s, tile_e);
		}
		else
			return 1;
	}
	else if (((coo_s.charCodeAt(0) + 2) == coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) - 1) == Number(coo_e.substr(1, 1)))
	{
		if (tile_e.src.search(inv_clr) > 0 || tile_e.src.search("Z") > 0)
		{
			if (type == "M")
				act_move(tile_s, tile_e);
		}
		else
			return 1;
	}
	else if (((coo_s.charCodeAt(0) + 1) == coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) - 2) == Number(coo_e.substr(1, 1)))
	{
		if (tile_e.src.search(inv_clr) > 0 || tile_e.src.search("Z") > 0)
		{
			if (type == "M")
				act_move(tile_s, tile_e);
		}
		else
			return 1;
	}
	else if (((coo_s.charCodeAt(0) - 1) == coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) - 2) == Number(coo_e.substr(1, 1)))
	{
		if (tile_e.src.search(inv_clr) > 0 || tile_e.src.search("Z") > 0)
		{
			if (type == "M")
				act_move(tile_s, tile_e);
		}
		else
			return 1;
	}
	else if (((coo_s.charCodeAt(0) - 2) == coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) - 1) == Number(coo_e.substr(1, 1)))
	{
		if (tile_e.src.search(inv_clr) > 0 || tile_e.src.search("Z") > 0)
		{
			if (type == "M")
				act_move(tile_s, tile_e);
		}
		else
			return 1;
	}
	else if (((coo_s.charCodeAt(0) - 2) == coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) + 1) == Number(coo_e.substr(1, 1)))
	{
		if (tile_e.src.search(inv_clr) > 0 || tile_e.src.search("Z") > 0)
		{
			if (type == "M")
				act_move(tile_s, tile_e);
		}
		else
			return 1;
	}
	else if (((coo_s.charCodeAt(0) - 1) == coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) + 2) == Number(coo_e.substr(1, 1)))
	{
		if (tile_e.src.search(inv_clr) > 0 || tile_e.src.search("Z") > 0)
		{
			if (type == "M")
				act_move(tile_s, tile_e);
		}
		else
			return 1;
	}
	else
		return 1;
}

function move_fou(tile_s, tile_e, coo_s, coo_e, type, inv_clr)
{
	if ((coo_s.charCodeAt(0) < coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) < Number(coo_e.substr(1, 1))))
	{
		if (coo_e.charCodeAt(0) - coo_s.charCodeAt(0) == Number(coo_e.substr(1, 1)) - Number(coo_s.substr(1, 1)))
		{
			let bad_move = 0;
			let i = 1;
			let till;
			while (coo_s.charCodeAt(0) + i < coo_e.charCodeAt(0))
			{
				till = document.querySelector("." + String.fromCharCode(coo_s.charCodeAt(0) + i)
					+ (Number(coo_s.substr(1,1)) + i) + " img").src;
				if (!(till.search("Z") > 0))
					if (till.search("roi" + inv_clr) < 0)
						bad_move = 1;
				i++;
			}
			if (!bad_move)
			{
				if (tile_e.src.search(inv_clr) > 0 || tile_e.src.search("Z") > 0)
				{
					if (type == "M")
						act_move(tile_s, tile_e);
				}
				else
					return 1;
			}
			return bad_move;
		}
		else
			return 1;
	}
	else if ((coo_s.charCodeAt(0) < coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) > Number(coo_e.substr(1, 1))))
	{
		if (coo_e.charCodeAt(0) - coo_s.charCodeAt(0) == Number(coo_s.substr(1, 1)) - Number(coo_e.substr(1, 1)))
		{
			let bad_move = 0;
			let i = 1;
			let till;
			while (coo_s.charCodeAt(0) + i < coo_e.charCodeAt(0))
			{
				till = document.querySelector("." + String.fromCharCode(coo_s.charCodeAt(0) + i)
					+ (Number(coo_s.substr(1,1)) - i) + " img").src;
				if (!(till.search("Z") > 0))
					if (till.search("roi" + inv_clr) < 0)
						bad_move = 1;
				i++;
			}
			if (!bad_move)
			{
				if (tile_e.src.search(inv_clr) > 0 || tile_e.src.search("Z") > 0)
				{
					if (type == "M")
						act_move(tile_s, tile_e);
				}
				else
					return 1;
			}
			return bad_move;
		}
		else
			return 1;
	}
	else if ((coo_s.charCodeAt(0) > coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) > Number(coo_e.substr(1, 1))))
	{
		if (coo_s.charCodeAt(0) - coo_e.charCodeAt(0) == Number(coo_s.substr(1, 1)) - Number(coo_e.substr(1, 1)))
		{
			let bad_move = 0;
			let i = 1;
			let till;
			while (coo_s.charCodeAt(0) - i > coo_e.charCodeAt(0))
			{
				till = document.querySelector("." + String.fromCharCode(coo_s.charCodeAt(0) - i)
					+ (Number(coo_s.substr(1,1)) - i) + " img").src;
				if (!(till.search("Z") > 0))
					if (till.search("roi" + inv_clr) < 0)
						bad_move = 1;
				i++;
			}
			if (!bad_move)
			{
				if (tile_e.src.search(inv_clr) > 0 || tile_e.src.search("Z") > 0)
				{
					if (type == "M")
						act_move(tile_s, tile_e);
				}
				else
					return 1;
			}
			return bad_move;
		}
		else
			return 1;
	}
	else if ((coo_s.charCodeAt(0) > coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) < Number(coo_e.substr(1, 1))))
	{
		if (coo_e.charCodeAt(0) - coo_s.charCodeAt(0) == Number(coo_s.substr(1, 1)) - Number(coo_e.substr(1, 1)))
		{
			let bad_move = 0;
			let i = 1;
			let till;
			while (coo_s.charCodeAt(0) - i > coo_e.charCodeAt(0))
			{
				till = document.querySelector("." + String.fromCharCode(coo_s.charCodeAt(0) - i)
					+ (Number(coo_s.substr(1,1)) + i) + " img").src;
				if (!(till.search("Z") > 0))
					if (till.search("roi" + inv_clr) < 0)
						bad_move = 1;
				i++;
			}
			if (!bad_move)
			{
				if (tile_e.src.search(inv_clr) > 0 || tile_e.src.search("Z") > 0)
				{
					if (type == "M")
						act_move(tile_s, tile_e);
				}
				else
					return 1;
			}
			return bad_move;
		}
		else
			return 1;
	}
	else
		return 1;
}

function move_reine(tile_s, tile_e, coo_s, coo_e, type, inv_clr)
{
	let bad_move = 0;
	bad_move = move_fou(tile_s, tile_e, coo_s, coo_e, type, inv_clr);
	if (bad_move == 1)
		bad_move = move_tour(tile_s, tile_e, coo_s, coo_e, type, inv_clr);
	return bad_move;
}

function move_roi(tile_s, tile_e, coo_s, coo_e, type, inv_clr, clr)
{
	if ((coo_s.charCodeAt(0) == coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) + 1 == Number(coo_e.substr(1, 1))))
	{
		if (tile_e.src.search("Z") > 0 || tile_e.src.search(inv_clr))
		{
			if (type == "M")
			{
				if (!(chk_mv_mate(tile_e, coo_s, coo_e, inv_clr, clr)))
					act_move(tile_s, tile_e);
				else
					return 1;
			}
		}
		else
			return 1;
	}
	else if ((coo_s.charCodeAt(0) + 1 == coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) + 1 == Number(coo_e.substr(1, 1))))
	{
		if (tile_e.src.search("Z") > 0 || tile_e.src.search(inv_clr))
		{
			if (type == "M")
			{
				if (!(chk_mv_mate(tile_e, coo_s, coo_e, inv_clr, clr)))
					act_move(tile_s, tile_e);
				else
					return 1;
			}
		}
		else
			return 1;
	}
	else if ((coo_s.charCodeAt(0) + 1 == coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) == Number(coo_e.substr(1, 1))))
	{
		if (tile_e.src.search("Z") > 0 || tile_e.src.search(inv_clr))
		{		
			if (type == "M")
			{
				if (!(chk_mv_mate(tile_e, coo_s, coo_e, inv_clr, clr)))
					act_move(tile_s, tile_e);
				else
					return 1;
			}
		}
		else
			return 1;
	}
	else if ((coo_s.charCodeAt(0) + 1 == coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) - 1 == Number(coo_e.substr(1, 1))))
	{
		if (tile_e.src.search("Z") > 0 || tile_e.src.search(inv_clr))
		{
			if (type == "M")
			{
				if (!(chk_mv_mate(tile_e, coo_s, coo_e, inv_clr, clr)))
					act_move(tile_s, tile_e);
				else
					return 1;
			}
		}
		else
			return 1;
	}
	else if ((coo_s.charCodeAt(0) == coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) - 1 == Number(coo_e.substr(1, 1))))
	{
		if (tile_e.src.search("Z") > 0 || tile_e.src.search(inv_clr))
		{
			if (type == "M")
			{
				if (!(chk_mv_mate(tile_e, coo_s, coo_e, inv_clr, clr)))
					act_move(tile_s, tile_e);
				else
					return 1;
			}
		}
		else
			return 1;
	}
	else if ((coo_s.charCodeAt(0) - 1 == coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) - 1 == Number(coo_e.substr(1, 1))))
	{
		if (tile_e.src.search("Z") > 0 || tile_e.src.search(inv_clr))
		{
			if (type == "M")
			{
				if (!(chk_mv_mate(tile_e, coo_s, coo_e, inv_clr, clr)))
					act_move(tile_s, tile_e);
				else
					return 1;
			}
		}
		else
			return 1;
	}
	else if ((coo_s.charCodeAt(0) - 1 == coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) == Number(coo_e.substr(1, 1))))
	{
		if (tile_e.src.search("Z") > 0 || tile_e.src.search(inv_clr))
		{
			if (type == "M")
			{
				if (!(chk_mv_mate(tile_e, coo_s, coo_e, inv_clr, clr)))
					act_move(tile_s, tile_e);
				else
					return 1;
			}
		}
		else
			return 1;
	}
	else if ((coo_s.charCodeAt(0) - 1 == coo_e.charCodeAt(0)) &&
		(Number(coo_s.substr(1, 1)) + 1 == Number(coo_e.substr(1, 1))))
	{
		if (tile_e.src.search("Z") > 0 || tile_e.src.search(inv_clr))
		{
			if (type == "M")
			{
				if (!(chk_mv_mate(tile_e, coo_s, coo_e, inv_clr, clr)))
					act_move(tile_s, tile_e);
				else
					return 1;
			}
		}
		else
			return 1;
	}
	else
		return 1;
}