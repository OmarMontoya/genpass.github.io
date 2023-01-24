const caracteres ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@/_?¿!¡$#%&*+-.º";
const caracterLongitud = caracteres.length;
const copiar = document.getElementById("botonCopia");
const boton = document.getElementById("generar");
const selection = window.getSelection();
const range = document.createRange();
let textoInput = document.getElementById("textoPassword");
let cantidadInput = document.getElementById("cantidadCaracteres");
let resultado = "";

function generarPassword(cantidad) {
  resultado = "";
  for (let i = 0; i < cantidad; i++) {
    resultado += caracteres.charAt(
      Math.floor(Math.random() * caracterLongitud)
    );
  }

  textoInput.innerHTML = resultado;
}

copiar.addEventListener("click", function (e) {
  range.selectNodeContents(textoInput);
  selection.removeAllRanges();
  selection.addRange(range);
  const retorno = document.execCommand("copy");
  if (retorno) {
    alert("Copiado!");
  } else {
    alert("No se pudo copiar!");
  }
  window.getSelection().removeAllRanges();
});

boton.addEventListener("click", function () {
  generarPassword(cantidadInput.value);
});
