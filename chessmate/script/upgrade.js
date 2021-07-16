function form_toggle()
{
	const form_upg = document.querySelector(".upgrade");
	if (window.getComputedStyle(form_upg, null).getPropertyValue("display") == "none")
		form_upg.style.display = "flex";
	else
		form_upg.style.display = "none";
}

function upgrade_in(upg_till, clr)
{
	let upg_token = document.querySelector(".token").value;
	upg_till.src = "token/icons8-" + upg_token + clr + "-50.png";
}

const btn_upg = document.querySelector("#send_upg");
let i;
let tmp_coo;
let tmp_till;
btn_upg.addEventListener('click', function()
{
	if (clr == "B")
	{
		i = 97;
		while (i < 105)
		{
			tmp_coo = String.fromCharCode(i) + "8";
			tmp_till = document.querySelector("." + tmp_coo + " img");
			if (tmp_till.src.search("pion") > 0)
			{
				upgrade_in(tmp_till, "W");
				form_toggle();
				break;
			}
			i++;
		}
	}
	else if (clr == "W")
	{
		i = 97;
		while (i < 105)
		{
			tmp_coo = String.fromCharCode(i) + "1";
			tmp_till = document.querySelector("." + tmp_coo + " img");
			if (tmp_till.src.search("pion") > 0)
			{
				upgrade_in(tmp_till, "B");
				form_toggle();
				break;
			}
			i++;
		}
	}
});