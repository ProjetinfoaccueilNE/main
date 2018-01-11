/*Variable contenant la carte */
var map = document.querySelector('#map');
/*Variable contenant les cercles*/
var circle = map.querySelectorAll('#map a')
/*Variable contenant chaque pop-up avec le text et l'image*/
var links = document.querySelector('#svg_liste')

var activeArea = function (id,posX,posY) {
	//Tous les pop-up textes inactifs
	links.querySelectorAll('.active').forEach(function(item) {
		item.classList.remove('active')
		item.classList.add('hidden')
	})
	//Si on entre dans la fonction car la souris est rentrée dans un cercle
	if(id !== undefined)
	{
		var scroll = document.documentElement.scrollTop //On récupère le nombre de pixel scroll du haut de la page
		links.querySelector('#list_'+ id).classList.remove('hidden') // On enleve la classe hidden
		links.querySelector('#list_'+ id).classList.add('active') // On met la classe en actif
		links.querySelector('#list_'+ id).style.position = 'absolute'	//On positionne le texte
		links.querySelector('#list_'+ id).style.top = posY+(-120)+ scroll +"px" // en Y
		links.querySelector('#list_'+ id).style.left = posX+(-80) +"px" // En x
	}
}
/*Lorsque la souris rentre dans un cercle*/
circle.forEach( function(path) { //Pour chaque cerle
	path.addEventListener('mouseenter', function (e) //Si la souris rentre
	{
		var id = this.id.replace('circle_','')//On recupère la lettre id du cercle concerné (soit 'cercle_a' devient 'a')

		var posX = e.clientX //On recupère la position de la souris en x
		var posY = e.clientY // En y
		activeArea(id,posX,posY) //Fonction
	})
})

/*Lorsque la souris rentre dans la carte*/
map.addEventListener('mousehover', function () {
	activeArea()//les 3 paramètres sont 'undefined'
})

/*Si la souris sort de la carte*/
map.addEventListener('mouseleave', function () {
	links.querySelectorAll('.active').forEach(function(item) { //Pour tous les pop-up
		item.classList.remove('active')
		item.classList.add('hidden')

	})
})