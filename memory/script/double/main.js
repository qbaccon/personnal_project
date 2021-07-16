function shuffle(array) {
	let currentIndex = array.length
	let temporaryValue
	let randomIndex;
  
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
  
	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
  
	  // And swap it with the current element.
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}
	return array;
}

function init_double(level, nb_double, grid)
{
	let grid_construct = document.querySelector("#grid_game");
	let grid_nbr;
	let grid_till;
	let tab_double_ez = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
	let tab_double_casu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let tab_double_hard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	let i = 0;
	grid.forEach(till => {
		till.style.display = "none";
	});
	if (level == 0)
	{
		grid_till = document.querySelectorAll("#grid_game div.ez");
		grid_nbr = document.querySelectorAll("#grid_game div.ez p");
		nb_double = 6;
		grid_till.forEach(till => {
			till.style.display = "flex";
		});
		shuffle(tab_double_ez);
		tab_double_ez.forEach(nbr => {
			grid_nbr[i].textContent = nbr;
			i++;
		});
		grid_construct.style.gridTemplateColumns = "50px 50px 50px 50px";
		grid_construct.style.gridTemplateRows = "50px 50px 50px";
	}
	else if (level == 1)
	{
		grid_till = document.querySelectorAll("#grid_game div.ez, #grid_game div.casu");
		grid_nbr = document.querySelectorAll("#grid_game div.ez p, #grid_game div.casu p");
		nb_double = 10;
		grid_till.forEach(till => {
			till.style.display = "flex";
		});
		shuffle(tab_double_casu);
		tab_double_casu.forEach(nbr => {
			grid_nbr[i].textContent = nbr;
			i++;
		});
		grid_construct.style.gridTemplateColumns = "50px 50px 50px 50px 50px";
		grid_construct.style.gridTemplateRows = "50px 50px 50px 50px";
	}
	else if (level == 2)
	{
		grid_till = document.querySelectorAll("#grid_game div");
		grid_nbr = document.querySelectorAll("#grid_game div p");
		nb_double = 15;
		grid_till.forEach(till => {
			till.style.display = "flex";
		});
		shuffle(tab_double_hard);
		tab_double_hard.forEach(nbr => {
			grid_nbr[i].textContent = nbr;
			i++;
		});
		grid_construct.style.gridTemplateColumns = "50px 50px 50px 50px 50px 50px";
		grid_construct.style.gridTemplateRows = "50px 50px 50px 50px 50px";
	}
	return nb_double;
}

function end_game()
{
	const end_div = document.querySelector("#end");
	end_div.style.display = "flex";
}

const lv_ez = document.querySelector("#level #ez");
const lv_casu = document.querySelector("#level #casu");
const lv_hard = document.querySelector("#level #hard");
const grid = document.querySelectorAll("#grid_game div");
const nb_hit_false_p = document.querySelector("#hit");
const nb_double_rem_p = document.querySelector("#dbl_number");
let cnt = 0;
let nbr_one = 0;
let nbr_two = 10;
let till_one;
let till_two;
let nb_double_rem;
let nb_hit_false = 0;
nb_double_rem = init_double(1, nb_double_rem, grid);
nb_double_rem_p.textContent = "Nombre de pairs restantes: " + nb_double_rem;
grid.forEach(till => {
	till.addEventListener('click', function(){
		if (cnt != 2 && window.getComputedStyle(document.querySelector("#" + till.id), null).backgroundColor == "rgb(69, 69, 69)")
		{
			till.style.color = "#e5e5e5";
			if (cnt == 0)
			{
				nbr_one = Number(document.querySelector("#" + till.id).textContent);
				till_one = till;
				cnt = 1;
			}
			else if (cnt == 1)
			{
				nbr_two = Number(document.querySelector("#" + till.id).textContent);
				till_two = till;
				cnt = 2;
			}
			if (cnt == 2)
			{
				if (nbr_one == nbr_two)
				{
					till_one.style.backgroundColor = "#29af18";
					till_two.style.backgroundColor = "#29af18";
					nb_double_rem--;
					nb_double_rem_p.textContent = "Nombre de pairs restantes: " + nb_double_rem;
					cnt = 0;
				}
				else
				{
					window.setTimeout(function(){
						till_one.style.color = "#454545";
						till_two.style.color = "#454545";
						nb_hit_false++;
						nb_hit_false_p.textContent = "Nombre de coups ratés: " + nb_hit_false;
						cnt = 0;
					}, 500);
				}
			}
		}
		if (nb_double_rem == 0)
			end_game();
	});
});
lv_ez.addEventListener('click', function(){
	nb_double_rem = init_double(0, nb_double_rem, grid);
	grid.forEach(till => {
		till.style.color = "#454545";
		till.style.backgroundColor = "#454545";
	});
	cnt = 0;
	nb_hit_false = 0;
	nb_hit_false_p.textContent = "Nombre de coups ratés: 0";
	nb_double_rem_p.textContent = "Nombre de pairs restantes: " + nb_double_rem;
});
lv_casu.addEventListener('click', function(){
	nb_double_rem = init_double(1, nb_double_rem, grid);
	grid.forEach(till => {
		till.style.color = "#454545";
		till.style.backgroundColor = "#454545";
	});
	cnt = 0;
	nb_hit_false = 0;
	nb_hit_false_p.textContent = "Nombre de coups ratés: 0";
	nb_double_rem_p.textContent = "Nombre de pairs restantes: " + nb_double_rem;
});
lv_hard.addEventListener('click', function(){
	nb_double_rem = init_double(2, nb_double_rem, grid);
	grid.forEach(till => {
		till.style.color = "#454545";
		till.style.backgroundColor = "#454545";
	});
	cnt = 0;
	nb_hit_false = 0;
	nb_hit_false_p.textContent = "Nombre de coups ratés: 0";
	nb_double_rem_p.textContent = "Nombre de pairs restantes: " + nb_double_rem;
});