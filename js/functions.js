function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
	div.classList.add("wynik");
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
