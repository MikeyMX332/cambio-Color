/* Obtener Referencias al parrafo y el botton */

const  color =document.getElementById("color");
const  button =document.getElementById("button");

/* Manejar el Event */

button .addEventListener( "click", cambiarColor )

function cambiarColor () { 

  function colores () {

    const opciones = "0123456789ABCDEF";
    let colorHex="#";
  
    /* Recorrer el string de opciones */

for (let i = 0; i<6; i++) {
  let indiceAleatorio=Math.floor(Math.random() *16);
colorHex += opciones [indiceAleatorio] ;//#0000

}

return colorHex

  }
/* Actualiza el texto */
let colorAleatorio = colores();
/* Actualiza el color de fondo*/
color.textContent= colorAleatorio;
document.body.style.backgroundColor = colorAleatorio
}
