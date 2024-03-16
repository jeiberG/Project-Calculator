const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Función para manejar la entrada del teclado
function manejarTeclado(event) {
  const teclaPresionada = event.key;
  const teclaValida = /^[0-9/*\-+\.\r\n]$/.test(teclaPresionada); // Validar teclas numéricas, operadores y teclas de retorno de carro

  if (teclaValida) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del teclado (como el desplazamiento de la página)
    const boton = document.getElementById(teclaPresionada);
    if (boton) {
      boton.click(); // Simular clic en el botón correspondiente
    }
  }
}

// Escuchar el evento keydown en el documento
document.addEventListener('keydown', manejarTeclado);

// Manejar los clics en los botones
buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === "clear") {
      display.innerText = "";
    } else if (item.id === "C") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id === "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "sytem32 hakeado... sera borrado en 2s";
      alert(" ERROR:Apresiona aqui para salir");
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});
