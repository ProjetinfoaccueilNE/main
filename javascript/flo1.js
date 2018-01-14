
var message="SEND NUDES"
for (var i = 0; i < message.length ; i++) {
	if(i==0)
		var msg = message[i];
	else 
		msg = msg +  message[i];
	console.log(msg)
}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("blouse");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}