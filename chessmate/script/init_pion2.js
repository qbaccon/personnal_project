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

function upgrade_in(upg_till, clr)
{
	let upg_token = document.querySelector(".token").value;
	upg_till.src = "token/icons8-" + upg_token + clr + "-50.png";
}

function form_toggle()
{
	const form_upg = document.querySelector(".upgrade");
	if (window.getComputedStyle(form_upg, null).getPropertyValue("display") == "none")
		form_upg.style.display = "flex";
	else
		form_upg.style.display = "none";
}

const board_till = document.querySelectorAll("#white, #black");
const btn_ctn = document.querySelector("#continue");
const btn_upg_ini = document.querySelector("#send_upg_ini");
let goal = document.querySelector("p#goal");
let p_msg = document.querySelector("p.msg");
let coo_s;
let till_s;
let coo_e;
let till_e;
let save_till;
let till_cnt = 0;
let till_goal1;
let till_goal2;

board_till.forEach(till => till.addEventListener('click', function()
{
	if (till_cnt == 0)
	{
		till_s = document.querySelector("." + this.className + " img");
		coo_s = this.className;
		save_till = this;
		this.style.backgroundColor = "#7e1515";
		till_cnt = 1;
	}
	else if (till_cnt == 1)
	{
		till_e = document.querySelector("." + this.className + " img");
		coo_e = this.className;
		till_cnt = 2;
	}
	if (till_cnt == 2)
	{
		let bad_move = 0;
		if (till_s.src.search("pionW") > 0)
			bad_move = move_pion(till_s, till_e, coo_s, coo_e, "M");
		else
			bad_move = 1;
		if (bad_move == 1)
		{
			p_msg.style.filter = "opacity(100%)";
			window.setTimeout(function(){
				p_msg.style.filter = "opacity(0%)";
			}, 3500);
		}
		till_goal1 = document.querySelector(".c5 img");
		if (till_goal1.src.search("pionW") > 0)
			form_toggle();
		till_cnt = 0;
		if (save_till.id == "white")
			save_till.style.backgroundColor = "#c5c5c5";
		else
			save_till.style.backgroundColor = "#606060";
	}
}));

btn_upg_ini.addEventListener('click', function()
{
	upgrade_in(till_goal1, "W");
	form_toggle();
	btn_ctn.style.display = "inline";
	goal.textContent = "Objectif rempli, vous pouvez passer à l'initiation suivante";
});