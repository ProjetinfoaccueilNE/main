/*Variable contenant la map */
var map = document.querySelector('#map');
/*Variable contenant les cercles*/
var circle = map.querySelectorAll('#map a')
/*Variable contenant le text*/
var links = document.querySelector('#svg_liste')

var activeArea = function (id,posX,posY) {
	links.querySelectorAll('.active').forEach(function(item) {
		item.classList.remove('active')
	})
	if(id !== undefined)
	{
		links.querySelector('#list_'+ id).classList.add('active')
		links.querySelector('#list_'+ id).style.position = 'absolute'	
		console.log(posX,posY)	
		links.querySelector('#list_'+ id).style.top = posX+10+"px"
		links.querySelector('#list_'+ id).style.right = posY+10+"px"
	}
}

circle.forEach( function(path) {
	path.addEventListener('mouseenter', function (e)
	{
		var id = this.id.replace('circle_','')
		var posX = e.offsetX;
		var posY = e.offsetY;
		console.log(posX,posY)
		activeArea(id,posX,posY)
	})
})

map.addEventListener('mousehover', function () {
	activeArea()
})


var balise = document.querySelectorAll('.balise')