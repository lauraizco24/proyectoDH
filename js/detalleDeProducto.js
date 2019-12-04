$(window).on("load", function () {
  // Variables
  let srcModal;
  let imagenEnModal;

  //CAPTURAR TODOS LOS BOTONES
  const addImagesToModal = document.querySelectorAll(".botonparaModal");
  console.log(addImagesToModal);

  //SUSCRIBIR CADA BOTON AL EVENETO CLICK
  for (let i = 0; i < addImagesToModal.length; i++) {
    addImagesToModal[i].addEventListener("click", function () {
      //CAPTURAR LA IMAGEN ASOCIADA A ESE BOTON
      let imagensrc = document.querySelector(`#ninio${i+1}`).src;
      console.log(imagensrc);

      imagenEnModal = document.querySelector("#imagenDM");
      imagenEnModal.src = imagensrc;  
    });
  }
});
