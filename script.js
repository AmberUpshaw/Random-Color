const button = document.querySelector('#change');
const h1 = document.querySelector('#rgb');
const body = document.querySelector('body');


button.addEventListener('click', () => {
	const red = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const rgb = `${red}, ${blue}, ${green}`;
	
	h1.innerText = `rgb(${rgb})`;
	body.style.backgroundColor = `rgb(${rgb})`;
});