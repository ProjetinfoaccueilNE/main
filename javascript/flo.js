
console.log("j'arrive dans le game");
var prenom = prompt("Entrez votre prénom :");
console.log("Bonjour, " + prenom);
var nb = Number(prompt("Entrez un nombre : ")); // nb est de type nombre et prompt renvoie une char
var message="SEND NUDES"
for (var i = 0; i < message.length ; i++) {
	if(i==0)
		var msg = message[i];
	else 
		msg = msg +  message[i];
	console.log(msg)
}