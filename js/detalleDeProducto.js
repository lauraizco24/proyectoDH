$( window ).on( 'load', function() {
let srcModal;
//CAPTURAR TODOS LOS BOTONES
var addImagesToModal = document.querySelectorAll('.botonparaModal');
console.log(addImagesToModal);
//SUSCRIBIR CADA BOTON AL EVENETO CLICK
for (var i = 0; i < addImagesToModal.length; i++) {
    addImagesToModal[i].addEventListener('click', function() {
      //CAPTURAR LA IMAGEN ASOCIADA A ESE BOTON
       imagen = addImagesToModal[i].closest('#ninio4');
      //CAPTURAR EL SRC DE LA IMAGEN ANTERIOR
      var src = imagen.getAttribute('src');
      //ASOCIAR EL SRC AL ELEMENTO DEL MODAL
      var imagenEnModal = document.querySelector('#imagenDM');
      imagenEnModal.setAttribute('src',src);
    });
 };


});
