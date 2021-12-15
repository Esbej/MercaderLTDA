function ponerNombre() {
  // debugger
  const $welcome = document.querySelector("#welcome")
  $welcome.textContent = sessionStorage.getItem('nombre');
}