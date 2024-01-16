/*jslint devel: true */
/*eslint-env browser*/

/**
 * Número de imagen que se está presentando
 */
var indice = 1;


/**
 * Presenta la imagen que corresponda a partir del índice
 */
function setImagen() {
    "use strict";
    var i;
    //Se buscan los hijos de #galeria (figure), se calcula cuántos son
    //y se buscan los hijos de #circulos (div)
    var imagenes = document.getElementById("galeria").children;
    var num_imagenes = imagenes.length;
    var circulos = document.getElementById("circulos").children;

    //Se recorren el array figure y el de círculos para ocultar todos
    //los figure y quitarle los class a los círculos
    for (i = 0; i < num_imagenes; i += 1) {
        imagenes[i].style.display = "none";
        circulos[i].className = "";
    }

    //Se muestra el figure correspondiente y se le pone la clase active
    //al círculo asociado a esa posición
    imagenes[indice - 1].style.display = "block";
    circulos[indice - 1].className = "active";
}

/**
 * Función llamada desde el HTML
 * Se le pasa como parámetro el número de orden que ocupa
 * la imagen en la galería
 */
function setImagenActual(n) {
    "use strict";
    indice = n;
    setImagen();
}

/**
 * Cuando se detecta que se ha cargado la página,
 * se muestra la primera imagen
 */
window.onload = function () {
    "use strict";
    setImagen();
};
