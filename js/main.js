class nuevoHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<header>
    <div class="encabezado">
      <nav class="navbar navbar-expand-lg navbar-light">
        <img src="img/logo-letra-blanca.png" width="6%" alt="">
        <a class="navbar-brand text-light" href="index1.html">Custom-T</a>
        <button id="buttonMenu" class="navbar-toggler bg-secondary rounded" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon bg-secondary rounded"></span>
        </button >
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link text-light" href="index1.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="About.html">Quienes Somos</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link text-light dropdown-toggle" href="Productos.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categorias
              </a>
                <div id="productos" class="dropdown-menu border border-dark" aria-labelledby="navbarDropdown">
                <a class="dropdown-item text-light" href="Productostab.html#remera-tab" >Remeras</a>
                <a class="dropdown-item text-light" href="Productostab.html#buzo-tab">Buzos</a>
                <a class="dropdown-item text-light" href="Productostab.html#musculosa-tab">Musculosas</a>
                <a class="dropdown-item text-light" href="Productostab.html#chomba-tab">Chombas</a>
                <a class="dropdown-item text-light" href="Productostab.html#gorra-tab">Gorras</a>
                <a class="dropdown-item text-light" href="Productostab.html#mochi-tab">Bolsos</a>
                <a class="dropdown-item text-light" href="Productostab.html#vayta-tab">Vasos y Tazas</a>
                <a class="dropdown-item text-light" href="Productostab.html#ninios-tab">Niños</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="Contacto.html" tabindex="-1" aria-disabled="true">Contacto</a>
            </li>
          </ul>
            <a class="navbar-text mr-4 text-light" href="Productos.html"> <i class="fas fa-shopping-cart"></i>
            </a>
            <a class="navbar-text mr-4 text-light" href="login.html">
              Login
            </a>
          <a class="navbar-text mr-4 text-light" href="register.html">
            Register
          </a>
        </div>
      </nav>
    </div>
    </header>`
}
};

window.customElements.define('nuevo-header', nuevoHeader);



class nuevoFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =
    `<footer>
        <div class="row" >
          <div class="col-xs-12 col-sm-4 col-lg-3">
            <ul>
              <li><a href="PgFrecuentes.html" class="stock active"><b>PREGUNTAS FRECUENTES</b><span class="sr-only">PREGUNTAS FRECUENTES</span></a></li>
              <li><a href="PgFrecuentes.html#stock" class="stock active">Consultas de stock<span class="sr-only">Consultas de stock</span></a></li>
              <li><a href="PgFrecuentes.html#envio" class="envio">Envío y seguimiento<span class="sr-only">Envío y seguimiento</span></a></li>
              <li><a href="PgFrecuentes.html#pago" class="pago">Formas de pago<span class="sr-only">Formas de pago</span></a></li>
              <li><a href="PgFrecuentes.html#cambios" class="cambios">Cambios y devoluciones<span class="sr-only">Cambios y devoluciones</span></a></li>
              <li><a href="PgFrecuentes.html#generales" class="generales">Preguntas Generales<span class="sr-only">Preguntas Generales</span></a></li>
              </ul>
          </div>
          <div class="col-xs-12 col-sm-4 col-lg-3">
            <ul>
            <li><a href="#talles" class="talles"><i class="fas fa-tshirt"></i><b>GUIA DE TALLES</b><span class="sr-only">GUIA DE TALLES</span></a></li>
            <li><a href="#contacto" class="contacto"><i class="fas fa-envelope"></i><b>CONTACTO</b><span class="sr-only">CONTACTO</span></a></li>
            <li><a href="#locales" class="locales"><i class="fas fa-map-marker-alt"></i><b>LOCALES</b><span class="sr-only">LOCALES</span></a></li>
           </ul>
          </div>

        <div class="col-xs-12 col-sm-4 col-lg-2">
          <ul class="list-group category_block">
            <li><a href="Productostab.html"><b>CATEGORIAS</b></a></li>
            <li><a href="Productostab.html#remera-tab"><b>Remeras</b></a></li>
            <li><a href="Productostab.html#buzo-tab"><b>Buzos</b></a></li>
            <li><a href="Productostab.html#musculosa-tab"><b>Musculosas</b></a></li>
            <li><a href="Productostab.html#chomba-tab"><b>Chombas</b></a></li>
            <li><a href="Productostab.html#gorra-tab"><b>Gorras</b></a></li>
            <li><a href="Productostab.html#mochi-tab"><b>Bolsos</b></a></li>
            <li><a href="Productostab.html#vayta-tab"><b>Vasos y Tazas</b></a></li>
            <li><a href="Productostab.html#ninios-tab"><b>Niños</b></a></li>
          </ul>
          </div>
          <div class="col-xs-12 col-sm-4 col-lg-2">
            <ul>
          <li><b>SEGUINOS EN:</b></li>
          <li><a href="https://www.facebook.com/"><span<i class="fab fa-facebook" id="redessociales"></i></span></a>
            <a href="https://twitter.com/"><span<i class="fab fa-twitter"id="redessociales"></i></i></span></a>
            <a href="https://aboutme.google.com/"><span<i class="fab fa-google-plus" id="redessociales"></i></i></span></a></li>
          </ul>
            </div>

        <div class="col-xs-12 col-sm-4 col-lg-2">
                <div class="newsletter-wrap"><div class="wrap"><h4 style="color:white">NEWSLETTER</h4>
                  <div class="newsletter"><fieldset><label for="email"><input type="text" id="email" name="email" placeholder="Ingresá tu email"></label>
                    <button id="send" name="send">
                                                      Enviar
                </button></fieldset><small class="tootips"></small></div></div></div>
          </div>
      </div>
   </footer>
   <div class="copyright" style="position:relative">
     <p><i class="fas fa-copyright"></i> Todos los derechos reservados <img src="img/logo-Custom-T.png" alt="" width="5%" color="white">
     </p>
   </div> `

  }
  };

  window.customElements.define('nuevo-footer', nuevoFooter);
