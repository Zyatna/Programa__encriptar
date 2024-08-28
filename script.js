const textArea = document.querySelector(".texto__area");
const mensajeArea = document.querySelector(".mensaje__area"); // Selecciona el textarea dentro de la sección mensaje

function btnEncriptado() {
  const textoEncriptado = encriptar(textArea.value);
  mensajeArea.value = textoEncriptado; // Establece el valor del textarea de salida
  textArea.value = "";
  mensajeArea.style.backgroundImage = ""; // Restablece el estilo de fondo
}

function encriptar(stringEncriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }

  return stringEncriptado;
}


function btnDesencriptado() {
  const textoEncriptado = desencriptar(textArea.value);
  mensajeArea.value = textoEncriptado; // Establece el valor del textarea de salida
  textArea.value = "";
}

function desencriptar(stringDesencriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptado; 
}

// Selecciona el botón de copiar
const btnCopiar = document.querySelector(".copiar");

// Agrega un evento de clic al botón
btnCopiar.addEventListener("click", function() {
  // Selecciona el área de texto donde está el mensaje encriptado
  const mensaje = document.querySelector(".mensaje__area"); 

  // Crea un elemento temporal para copiar el texto
  const tempInput = document.createElement("input");
  tempInput.value = mensaje.value; 
  document.body.appendChild(tempInput); 

  // Selecciona el elemento temporal y copia su contenido
  tempInput.select();
  document.execCommand("copy"); 

  // Elimina el elemento temporal
  document.body.removeChild(tempInput);

  // Puedes mostrar un mensaje de confirmación al usuario
  alert("¡Texto copiado al portapapeles!");
});