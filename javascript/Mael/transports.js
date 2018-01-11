var table = document.querySelector('table')
var th = table.querySelectorAll('th')
var td = table.querySelector('#text')


var activeArea = function (id) {
	//Tous les td inactifs
	td.querySelectorAll('.active').forEach(function(item) {
		item.classList.remove('active')
		item.classList.add('hidden')
	})
	//Si on entre dans la fonction car la souris est rentrée dans un th
	if(id !== undefined)
	{
		var tdActif = td.querySelector('#td_'+ id);
		tdActif.classList.remove('hidden') // On enleve la classe hidden
		tdActif.classList.add('active') // On met la classe en actif
	}
}
/*Lorsque la souris rentre dans un th*/
th.forEach( function(path) { //Pour chaque cerle
	path.addEventListener('mouseenter', function (e) //Si la souris rentre
	{
		var id = this.id.replace('th_','')//On recupère la lettre id du cercle concerné (soit 'cercle_a' devient 'a')
		activeArea(id) //Fonction
	})
})

/*Lorsque la souris rentre dans le tableau*/
table.addEventListener('mousehover', function () {
	activeArea()//le paramètre est 'undefined'
})

/*Si la souris sort du tableau*/
table.addEventListener('mouseleave', function () {
	td.querySelectorAll('.active').forEach(function(item) { //Pour tous les pop-up
		item.classList.remove('active')
		item.classList.add('hidden')

	})
})