// const body = document.querySelector("body");
// let div_test = document.createElement("div");
// body.appendChild(div_test);

function change_classname(type)
{
	switch (type)
	{
		case 0:
			tmp_till.className = "block_wall";
			break;
		case 1:
			tmp_till.className = "def_floor";
			break;
	}
}

const board = document.querySelector("body #board");
board.style.gridTemplateRows = '';
board.style.gridTemplateColumns = '';
let tab = [];
let tmp_till;
let i = 'a';
let j;
tab[0] = [0, 1, 0];
tab[1] = [1, 1, 1];
tab[2] = [0, 1, 0];
tab.forEach(row => {
	j = 1;
	row.forEach(column => {
		tmp_till = document.createElement("div");
		tmp_till.id = i + j;
		change_classname(column);
		board.appendChild(tmp_till);
		j++;
	});
	board.style.gridTemplateRows += ' 60px';
	board.style.gridTemplateColumns += ' 60px';
	i = String.fromCharCode(i.charCodeAt(0) + 1);
});
