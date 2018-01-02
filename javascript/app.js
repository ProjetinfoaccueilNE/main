/*Variable contenant la map */
var map = document.querySelector('#map');
/*Variable contenant les cercles*/
var circle = map.querySelectorAll('#map a')
/*Variable contenant le text*/
var links = document.querySelector('#svg_liste')




var activeArea = function (id,posX,posY) {
	links.querySelectorAll('.active').forEach(function(item) {
		item.classList.remove('active')
		item.classList.add('hidden')

	})
	if(id !== undefined)
	{
		var scroll = document.documentElement.scrollTop
		links.querySelector('#list_'+ id).classList.remove('hidden')
		links.querySelector('#list_'+ id).classList.add('active')
		links.querySelector('#list_'+ id).style.position = 'absolute'	
		console.log(posX,posY)	
		links.querySelector('#list_'+ id).style.top = posY+(-120)+ scroll +"px"
		links.querySelector('#list_'+ id).style.left = posX+(-80) +"px"
	}
}

circle.forEach( function(path) {
	path.addEventListener('mouseenter', function (e)
	{
		var id = this.id.replace('circle_','')

		var posX = e.clientX
		var posY = e.clientY
		console.log(posX,posY)
		activeArea(id,posX,posY)
	})
})

map.addEventListener('mousehover', function () {
	activeArea()
})

var mapOnly = document.querySelector('#plan');

mapOnly.addEventListener('mouseleave', function () {
	links.querySelectorAll('.active').forEach(function(item) {
		item.classList.remove('active')
		item.classList.add('hidden')

	})
})
var balise = document.querySelectorAll('.balise')