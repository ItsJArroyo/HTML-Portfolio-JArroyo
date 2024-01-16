//Funcion que aplica las animaciones de las habilidades
let proyectos = 0;
let clientes = 0;
let cursos =0;
let intervalProyectos = null;
let intervalclientes = null;
let intervalCursos = null;
function animacionNumeros(){
    var numeros = document.getElementById("numeros");
    var distancia_numeros = window.innerHeight - numeros.getBoundingClientRect().top;
    if(distancia_numeros >= 200 && proyectos ==0){
        intervalo = setInterval(actualizarContador, 60);
    }
}


function actualizarContador() {
    // Verificamos si hemos llegado a 10
    if (proyectos <= 10) {
        // Mostramos el valor actual del contador en el elemento con id "contador"
        document.getElementById("contProyectos").textContent = proyectos;
        proyectos ++;
    } else {
        // Si hemos llegado a 50, detenemos el intervalo
        clearInterval(intervalProyectos);
    }
    // Verificamos si hemos llegado a 3
    if (clientes <= 3) {
        // Mostramos el valor actual del contador en el elemento con id "contador"
        document.getElementById("contClientes").textContent = clientes;
        // Incrementamos el contador en 1
        clientes++;
    } else {
        // Si hemos llegado a 50, detenemos el intervalo
        clearInterval(intervalclientes);
    }
    // Verificamos si hemos llegado a 480
    if (cursos <= 480) {
        // Mostramos el valor actual del contador en el elemento con id "contador"
        document.getElementById("contCursos").textContent = cursos;
        // Incrementamos el contador en 1
        cursos = cursos + 10;
    } else {
        // Si hemos llegado a 50, detenemos el intervalo
        clearInterval(intervalCursos);
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    animacionNumeros();
    animacionesSkills();
}
let visible=false;

function abrirCerrarMenu(){    
    if(visible==false){
        document.getElementById("nav").className = "responsive";
        visible = true;
    }else{
        document.getElementById("nav").className = "";
        visible = false;
    }
}

function animacionesSkills(){
    var skills = document.getElementById("sobremi");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 400){
        document.getElementById("dw").className = " progreso dw";
        document.getElementById("dg").className = " progreso dg";
        document.getElementById("bd").className = " progreso bd";
        document.getElementById("md").className = " progreso md";
    }
}