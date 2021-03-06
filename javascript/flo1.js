var slideIndex = 1;
automatique();

function defilement(n) {
    affichage(slideIndex += n);
}

// Change l'image affichée toutes les 4 secondes
function automatique() {
    var i;
    var x = document.getElementsByClassName("blouse");

    // Cache toutes les images 
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }

    slideIndex++; // Incrémentation de l'index

    if (slideIndex > x.length) {slideIndex = 1} // Si on passe de la dernière à la première image
    x[slideIndex-1].style.display = "block"; // Affiche la bonne image

    setTimeout(automatique, 4000);
}

// Affiche seulement l'image ayant l'index appelé
function affichage(n) {
    var i;
    var x = document.getElementsByClassName("blouse");
    if (n > x.length) {slideIndex = 1}; // Si on passe de la dernière à la première image
    if (n < 1) {slideIndex = x.length}; // Si on passe de la première à la dernière image

    // Cache toutes les images
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }

    x[slideIndex-1].style.display = "block"; // Affiche la bonne image
}
