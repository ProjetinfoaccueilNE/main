function deroule(element) {
    var menu= [document.getElementById('menu1'),
    document.getElementById('menu2'),
    document.getElementById('menu3'),
    document.getElementById('menu4'),
    document.getElementById('menu5'),
    ];
    for (var i = 0; i < 5; i++) {
        menu[i].style.display='none';
    }
    element.style.display='block';
}

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
		links.querySelector('#list_'+ id).classList.remove('hidden')
		links.querySelector('#list_'+ id).classList.add('active')
		links.querySelector('#list_'+ id).style.position = 'absolute'	
		console.log(posX,posY)	
		links.querySelector('#list_'+ id).style.top = posY+(-120)+"px"
		links.querySelector('#list_'+ id).style.left = posX+(-50)+"px"
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

var mapOnly = document.querySelector('#e1_map');

mapOnly.addEventListener('mouseleave', function () {
	links.querySelectorAll('.active').forEach(function(item) {
		item.classList.remove('active')
		item.classList.add('hidden')

	})
})
var balise = document.querySelectorAll('.balise')