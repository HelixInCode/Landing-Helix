const $footer = document.getElementById('footer')
const $nav = document.getElementById('nav')

const platillaFooter = () => {

  return `<div class="footer-body page-footer">
            <div class="contenedor-medio text-center text-md-center">
              <div id="logo-footer" class="mx-auto">
                <a class="navbar-brand" href="#">
                  <img class="img-fluid" src="img/helix-blanco-logo-footer.png" alt="">
                </a>
              </div>
              <div id="servicios-footer">
                <div>
                  <h4>Servicios</h4>
                </div>  
                <ul>
                  <li>
                    <a href="#Landing">Diseño Web</a>
                  </li>
                  <li>
                    <a href="#Ecommerce">E-Commerce</a>
                  </li>
                  <li>
                    <a href="#Marketing">Marketing Digital</a>
                  </li>
                  <li>
                    <a href="#Analitica">Analitica Web</a>
                  </li>
                  <li>
                    <a href="#Community">Community Manager</a>
                  </li>
                </ul>
                  
              </div>
              <div id="contacto-footer">
                <div>
                  <h4>Contacto</h4>
                </div>
                <ul class="contenido-contacto">
                  <li>
                    <i class="far fa-envelope"></i>
                    <span>helixincode@gmail.com<!-- (CAMBIAR POR CUENTA EMPRESA) --></span>
                  </li>
                  <li>
                    <i class="far fa-envelope"></i>
                    <span>+54 9 123 4567890</span>
                  </li>
                </ul> 
              </div>
            </div>

            <!-- Copyright -->
            <div class="copyright">
              <span>© 2020 Copyright: <a href="index">helixincode.com</a></span>
            </div>
          </div>`
}
const platillaNav = () => {
  let pagina;

  if ($nav.className == "Home") {

    pagina = "";
    
  } else if ($nav.className == "Plans") {
    
    pagina = "index";

  }

  return `<div class="navbar flex-nowrap fixed-top scrolling-navbar">

            <a class="navbar-brand" href="index">
              <img src="img/Helix-blanco.png" alt="">
            </a>

            <div class="navbar-collapse px-0 pl-sm-3 col-lg-9">

              <ul id="main-items" class="navbar-nav flex-row ml-auto smooth-scroll">
                <li class="nav-item">
                  <a data-scroll class="nav-link" href="${pagina}#inicio">
                    <i class="fas fa-home"></i>
                    <span>Inicio</span></a>
                </li>
                <li class="nav-item">
                  <a data-scroll class="nav-link" href="${pagina}#servicios">
                    <i class="fas fa-handshake"></i>
                    <span>Servicios</span></a>
                </li>
                <li class="nav-item">
                  <a data-scroll class="nav-link" href="${pagina}#nosotros">
                    <i class="fas fa-id-card"></i>
                    <span>Quiénes Somos</span></a>
                </li>
                <li class="nav-item">
                  <a data-scroll class="nav-link" href="${pagina}#portafolio">
                    <i class="fas fa-envelope-open-text"></i>
                    <span>Portafolio</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a data-scroll class="nav-link" href="#planes">
                    <i class="fas fa-briefcase"></i>
                    <span>Planes</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a data-scroll class="nav-link" href="${pagina}#contacto">
                    <i class="fas fa-envelope"></i>
                    <span>Contacto</span>
                  </a>
                </li>
              </ul>

              <a id="facebook" class="facebook-btn" href="https://www.facebook.com/helixincode.ar/" target="_blank">
                <i class="fab fa-facebook-square fa-1x"></i>
              </a>
              <a id="instagram" class="instagram-btn" href="https://www.instagram.com/helix_in_code/" target="_blank">
                <i class="fab fa-instagram fa-1x"></i>
              </a>
              <a id="whatsapp" class="whatsapp-btn" href="https://api.whatsapp.com/send?phone=584144132836" target="_blank">
                <i class="fab fa-whatsapp fa-1x"></i>
              </a>
              
            </div>
          </div>`
}

function añadirHeaderFooter( $headerFooter, platilla){

  const $html = document.implementation.createHTMLDocument()
  $html.body.innerHTML = platilla()
  $headerFooter.append($html.body.children[0])
}

añadirHeaderFooter($footer, platillaFooter)
añadirHeaderFooter($nav, platillaNav)