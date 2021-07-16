function act_lroque_move(clr)
{
	if (clr == "W")
	{
		const abs_ktw = document.querySelector(".e1 img");
		const abs_ttw = document.querySelector(".h1 img");
		const king_we = document.querySelector(".g1 img");
		const tower_we = document.querySelector(".f1 img")
		act_move(abs_ktw, king_we);
		act_move(abs_ttw, tower_we);
	}
	else if (clr == "B")
	{
		const abs_ktb = document.querySelector(".e8 img");
		const abs_ttb = document.querySelector(".h8 img");
		const king_be = document.querySelector(".g8 img");
		const tower_be = document.querySelector(".f8 img")
		act_move(abs_ktb, king_be);
		act_move(abs_ttb, tower_be);
	}
}

function lroque(coo_s, coo_e, inv_clr, clr)
{
	const abs_ktw = document.querySelector(".e1 img");
	const abs_ttw = document.querySelector(".h1 img");
	const abs_ktb = document.querySelector(".e8 img");
	const abs_ttb = document.querySelector(".h8 img");
	let tmp_till;
	if (clr == "W")
	{
		if ((coo_s == "e1" && coo_e == "g1") &&
		(abs_ktw.src.search("roiW") > 0 && abs_ttw.src.search("tourW") > 0))
		{
			tmp_till = document.querySelector(".f1 img");
			if (tmp_till.src.search("Z") > 0)
			{
				if (chk_mv_mate(tmp_till, "e1", "f1", inv_clr, clr))
					return 1;
			}
			else
				return 1;
			tmp_till = document.querySelector(".g1 img");
			if (tmp_till.src.search("Z") > 0)
			{
				if (chk_mv_mate(tmp_till, "f1", "g1", inv_clr, clr))
					return 1;
			}
			else
				return 1;
			act_lroque_move(clr);
			return 0;
		}
		else
			return 1;
	}
	else if (clr == "B")
	{
		if ((coo_s == "e8" && coo_e == "g8") &&
		(abs_ktb.src.search("roiB") > 0 && abs_ttb.src.search("tourB") > 0))
		{
			tmp_till = document.querySelector(".f8 img");
			if (tmp_till.src.search("Z") > 0)
			{
				if (chk_mv_mate(tmp_till, "e8", "f8", inv_clr, clr))
					return 1;
			}
			else
				return 1;
			tmp_till = document.querySelector(".g8 img");
			if (tmp_till.src.search("Z") > 0)
			{
				if (chk_mv_mate(tmp_till, "f8", "g8", inv_clr, clr))
					return 1;
			}
			else
				return 1;
			act_lroque_move(clr);
			return 0;
		}
		else
			return 1;
	}
}

function act_broque_move(clr)
{
	if (clr == "W")
	{
		const abs_ktw = document.querySelector(".e1 img");
		const abs_ttw = document.querySelector(".a1 img");
		const king_we = document.querySelector(".c1 img");
		const tower_we = document.querySelector(".d1 img")
		act_move(abs_ktw, king_we);
		act_move(abs_ttw, tower_we);
	}
	else if (clr == "B")
	{
		const abs_ktb = document.querySelector(".e8 img");
		const abs_ttb = document.querySelector(".a8 img");
		const king_be = document.querySelector(".c8 img");
		const tower_be = document.querySelector(".d8 img")
		act_move(abs_ktb, king_be);
		act_move(abs_ttb, tower_be);
	}
}

function broque(coo_s, coo_e, inv_clr, clr)
{
	const abs_ktw = document.querySelector(".e1 img");
	const abs_ttw = document.querySelector(".a1 img");
	const abs_ktb = document.querySelector(".e8 img");
	const abs_ttb = document.querySelector(".a8 img");
	let tmp_till;
	if (clr == "W")
	{
		if ((coo_s == "e1" && coo_e == "c1") &&
		(abs_ktw.src.search("roiW") > 0 && abs_ttw.src.search("tourW") > 0))
		{
			tmp_till = document.querySelector(".d1 img");
			if (tmp_till.src.search("Z") > 0)
			{
				if (chk_mv_mate(tmp_till, "e1", "d1", inv_clr, clr))
					return 1;
			}
			else
				return 1;
			tmp_till = document.querySelector(".c1 img");
			if (tmp_till.src.search("Z") > 0)
			{
				if (chk_mv_mate(tmp_till, "d1", "c1", inv_clr, clr))
					return 1;
			}
			else
				return 1;
			tmp_till = document.querySelector(".b1 img");
			if (tmp_till.src.search("Z") < 0)
				return 1;
			act_broque_move(clr);
			return 0;
		}
		else
			return 1;
	}
	else if (clr == "B")
	{
		if ((coo_s == "e8" && coo_e == "c8") &&
		(abs_ktb.src.search("roiB") > 0 && abs_ttb.src.search("tourB") > 0))
		{
			tmp_till = document.querySelector(".d8 img");
			if (tmp_till.src.search("Z") > 0)
			{
				if (chk_mv_mate(tmp_till, "e8", "d8", inv_clr, clr))
					return 1;
			}
			else
				return 1;
			tmp_till = document.querySelector(".c8 img");
			if (tmp_till.src.search("Z") > 0)
			{
				if (chk_mv_mate(tmp_till, "d8", "c8", inv_clr, clr))
					return 1;
			}
			else
				return 1;
			tmp_till = document.querySelector(".b8 img");
			if (tmp_till.src.search("Z") < 0)
				return 1;
			act_broque_move(clr);
			return 0;
		}
		else
			return 1;
	}
}