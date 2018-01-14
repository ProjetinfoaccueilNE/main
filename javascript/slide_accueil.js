var slideIndex = 1;
affichage(slideIndex);
automatique();

function defilement(n) {
    affichage(slideIndex += n);
}

// Change l'image affichée toutes les 2 secondes
function automatique() {
    var i;
    var x = document.getElementsByClassName("image_slide_accueil");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(automatique, 2000);
}

// Affiche seulement l'image ayant l'index appelé
function affichage(n) {
    var i;
    var x = document.getElementsByClassName("image_slide_accueil");
    if (n > x.length) {slideIndex = 1}; // Si on passe de la dernière à la première image
    if (n < 1) {slideIndex = x.length}; // Si on passe de la première à la dernière image
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; // Cache toutes les images
    }
    x[slideIndex-1].style.display = "block"; // Affiche la bonne image
}

function 