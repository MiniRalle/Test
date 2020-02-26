function insertText(){
	document.getElementById("newContent").innerHTML = "Some new text: <br> HELLO </br>";
}
function calculate(){
	var t = widthBox.value;
	var w = document.getElementById("widthBox").value;
	var l = document.getElementById("lenghtBox").value;
	var h = document.getElementById("heightBox").value;
	w=parseFloat(w);
	h=parseFloat(h);
	l=parseFloat(l);
	var result = w*l*h;
	document.getElementById("result").innerHTML = result;
}

function calculate2(){
	var l = document.getElementById("lenghtBox").value;
	document.getElementById("result").innerHTML = w;

}


function multiplication(){
	document.getElementById("mult-tb").innerHTML ="";
	var f = document.getElementById("factor").value;
	if(f=="") alert("put in a number");
	for(var i=1; i<10; i++){
		var res=f*i;
		document.getElementById("mult-tb").innerHTML += res+"<br/>";
	}
}
