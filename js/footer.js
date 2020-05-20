const $footer = document.getElementById('footer')

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
                    <a href="#?">Diseño Web</a>
                  </li>
                  <li>
                    <a href="#?">E-Commerce</a>
                  </li>
                  <li>
                    <a href="#?">Marketing Digital</a>
                  </li>
                  <li>
                    <a href="#?">Analitica Web</a>
                  </li>
                  <li>
                    <a href="#?">Community Manager</a>
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
              <span>© 2020 Copyright: <a href="index.html">helixincode.com</a></span>
            </div>
          </div>`
}

function añadirFooter(){
  const $html = document.implementation.createHTMLDocument()
  $html.body.innerHTML = platillaFooter()
  $footer.append($html.body.children[0])
}

añadirFooter()