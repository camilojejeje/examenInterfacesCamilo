// Camilo González Sánchez
//
// Completar JS aqui

// Modal
var modal = document.getElementById("myModal");

// Boton que abre el modal
var btn = document.getElementById("myBtn");

var wrapper = document.getElementById("main")
// abrir el modal
function crear() {
//   modal.style.display = "block";
  modal.style.visibility = "visible";
  wrapper.style.visibility="hidden";
}

 cerrado = document.getElementsByID('#volver');
//cierro el modal
function cerrar() {
    modal.style.visibility = "hidden";
    wrapper.style.visibility="visible";
  }
  
//Si esta el formulario relleno envia mensaje de datos enviados
  function advertencia(){
    var nombre = document.getElementById("nombre");
    if(nombre.value!=""){
    alert("Datos enviados con éxito");
    }
}
