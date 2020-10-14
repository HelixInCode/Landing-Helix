webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

var _backgroundCode = __webpack_require__(13);

var _backgroundCode2 = _interopRequireDefault(_backgroundCode);

var _contadorBackground = __webpack_require__(14);

var _contadorBackground2 = _interopRequireDefault(_contadorBackground);

var _portada = __webpack_require__(15);

var _portada2 = _interopRequireDefault(_portada);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Formulario


// Particles.js
// CSS IMPORTED
var $planes = document.getElementById('planes');

// IMG IMPORTED


// kapcha
// import '../...';

// Contador


// Smooth.js


// Render Nav y Footer


// JAVASCRIPT IMPORTED

$planes.style.backgroundImage = 'url(' + _backgroundCode2.default + ')';

var $contador = document.getElementById('contador');
$contador.style.backgroundImage = 'url(' + _contadorBackground2.default + ')';

var $BackgroundCover = document.getElementsByClassName('background-cover')[0];
$BackgroundCover.style.backgroundImage = 'url(' + _portada2.default + ')';

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var typed = new Typed('.typed', {
          strings: ['Web Design', 'Software Engineering', 'E-Commerce', 'Security'],
          stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
          typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
          startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
          backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
          smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
          shuffle: false, // Alterar el orden en el que escribe las palabras.
          backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
          loop: true, // Repetir el array de strings
          loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
          showCursor: true, // Mostrar cursor palpitanto
          cursorChar: '|', // Caracter para el cursor
          contentType: 'html' // 'html' o 'null' para texto sin formato

});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var portafolio = document.querySelectorAll('#portafolio > .portafolio-container > .portafolio-item');
console.log('hola');

function cerrarItem(item, imagen, descripcion) {

  imagen.style.transform = "translateY(0px)";
  descripcion.style.transform = "translateY(0px)";
  item.style.zIndex = "0";
}
function abrirItem(item, imagen, descripcion) {

  imagen.style.transform = "translateY(-50%)";
  descripcion.style.transform = "translateY(50%)";
  item.style.zIndex = "3";
}

var _loop = function _loop(i) {

  portafolio[i].addEventListener('click', function () {

    if (portafolio[i].style.zIndex == "") {

      abrirItem(portafolio[i], portafolio[i].children[0], portafolio[i].children[1]);
    } else if (portafolio[i].style.zIndex == "0") {

      abrirItem(portafolio[i], portafolio[i].children[0], portafolio[i].children[1]);
    } else if (portafolio[i].style.zIndex == "3") {

      cerrarItem(portafolio[i], portafolio[i].children[0], portafolio[i].children[1]);
    }
    for (var i2 = 0; i2 < portafolio.length; i2++) {

      if (portafolio[i2].style.zIndex == "3" && i2 != i) {
        cerrarItem(portafolio[i2], portafolio[i2].children[0], portafolio[i2].children[1]);
      }
    }
  });
};

for (var i = 0; i < portafolio.length; i++) {
  _loop(i);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $footer = document.getElementById('footer');
var $nav = document.getElementById('nav');

var platillaFooter = function platillaFooter() {

  return '<div class="footer-body page-footer">\n            <div class="contenedor-medio text-center text-md-center">\n              <div id="logo-footer" class="mx-auto">\n                <a class="navbar-brand" href="#">\n                  <img class="img-fluid" src="dist/img/helix-blanco-logo-footer.png" alt="Logo Helix Intelligence Code">\n                </a>\n              </div>\n              <div id="servicios-footer">\n                <div>\n                  <h4>Servicios</h4>\n                </div>  \n                <ul>\n                  <li>\n                    <a href="#Landing">Dise\xF1o Web</a>\n                  </li>\n                  <li>\n                    <a href="#Ecommerce">E-Commerce</a>\n                  </li>\n                  <li>\n                    <a href="#Marketing">Marketing Digital</a>\n                  </li>\n                  <li>\n                    <a href="#Analitica">Analitica Web</a>\n                  </li>\n                  <li>\n                    <a href="#Community">Community Manager</a>\n                  </li>\n                </ul>\n                  \n              </div>\n              <div id="contacto-footer">\n                <div>\n                  <h4>Contacto</h4>\n                </div>\n                <ul class="contenido-contacto">\n                  <li>\n                    <i class="far fa-envelope"></i>\n                    <span> info@helixincode.com<!-- (CAMBIAR POR CUENTA EMPRESA) --></span>\n                  </li>\n\n                  <li>\n                    <i class="fab fa-facebook-square"></i>\n                    <span>facebook.com/helixincode.ar</span>\n                  </li>\n\n                  <li>\n                    <i class="fab fa-instagram fa-1x"></i>\n                    <span>instagram.com/helix_in_code<span>\n                  </li>\n\n                </ul> \n              </div>\n            </div>\n\n            <!-- Copyright -->\n            <div class="copyright">\n              <span>\xA9 2020 Copyright: <a href="index">helixincode.com</a></span>\n            </div>\n          </div>';
};
var platillaNav = function platillaNav() {
  var pagina = void 0;

  if ($nav.className == "Home") {

    pagina = "";
  } else if ($nav.className == "Plans") {

    pagina = "index";
  }

  return '<div class="navbar flex-nowrap fixed-top scrolling-navbar">\n\n            <a class="navbar-brand" href="index">\n              <img src="dist/img/Helix-blanco.png" alt="Logo Helix Intelligence Code">\n            </a>\n\n            <div class="navbar-collapse px-0 pl-sm-3 col-lg-9">\n\n              <ul id="main-items" class="navbar-nav flex-row ml-auto smooth-scroll">\n                <li class="nav-item">\n                  <a data-scroll class="nav-link" href="' + pagina + '#inicio">\n                    <i class="fas fa-home"></i>\n                    <span>Inicio</span></a>\n                </li>\n                <li class="nav-item">\n                  <a data-scroll class="nav-link" href="' + pagina + '#servicios">\n                    <i class="fas fa-handshake"></i>\n                    <span>Servicios</span></a>\n                </li>\n                <li class="nav-item">\n                  <a data-scroll class="nav-link" href="' + pagina + '#nosotros">\n                    <i class="fas fa-id-card"></i>\n                    <span>Qui\xE9nes Somos</span></a>\n                </li>\n                <li class="nav-item">\n                  <a data-scroll class="nav-link" href="' + pagina + '#portafolio">\n                    <i class="fas fa-envelope-open-text"></i>\n                    <span>Portafolio</span>\n                  </a>\n                </li>\n                <li class="nav-item">\n                  <a data-scroll class="nav-link" href="#planes">\n                    <i class="fas fa-briefcase"></i>\n                    <span>Planes</span>\n                  </a>\n                </li>\n                <li class="nav-item">\n                  <a data-scroll class="nav-link" href="' + pagina + '#contacto">\n                    <i class="fas fa-envelope"></i>\n                    <span>Contacto</span>\n                  </a>\n                </li>\n              </ul>\n\n              <a id="facebook" class="facebook-btn" href="https://www.facebook.com/helixincode.ar/" target="_blank">\n                <i class="fab fa-facebook-square fa-1x"></i>\n              </a>\n              <a id="instagram" class="instagram-btn" href="https://www.instagram.com/helix_in_code/" target="_blank">\n                <i class="fab fa-instagram fa-1x"></i>\n              </a>\n              \n            </div>\n          </div>';
};

function añadirHeaderFooter($headerFooter, platilla) {

  var $html = document.implementation.createHTMLDocument();
  $html.body.innerHTML = platilla();
  $headerFooter.append($html.body.children[0]);
}

añadirHeaderFooter($footer, platillaFooter);
añadirHeaderFooter($nav, platillaNav);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function pJS(tag_id, params) {

  var canvas_el = document.querySelector('#' + tag_id + ' > .particles-js-canvas-el');

  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };

  var pJS = this.pJS;

  /* params settings */
  if (params) {
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };

  pJS.fn.retinaInit = function () {

    if (pJS.retina_detect && window.devicePixelRatio > 1) {
      pJS.canvas.pxratio = window.devicePixelRatio;
      pJS.tmp.retina = true;
    } else {
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;
  };

  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function () {
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function () {

    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if (pJS && pJS.interactivity.events.resize) {

      window.addEventListener('resize', function () {

        pJS.canvas.w = pJS.canvas.el.offsetWidth;
        pJS.canvas.h = pJS.canvas.el.offsetHeight;

        /* resize canvas */
        if (pJS.tmp.retina) {
          pJS.canvas.w *= pJS.canvas.pxratio;
          pJS.canvas.h *= pJS.canvas.pxratio;
        }

        pJS.canvas.el.width = pJS.canvas.w;
        pJS.canvas.el.height = pJS.canvas.h;

        /* repaint canvas on anim disabled */
        if (!pJS.particles.move.enable) {
          pJS.fn.particlesEmpty();
          pJS.fn.particlesCreate();
          pJS.fn.particlesDraw();
          pJS.fn.vendors.densityAutoParticles();
        }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();
      });
    }
  };

  pJS.fn.canvasPaint = function () {
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function () {
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function (color, opacity, position) {

    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
    if (pJS.particles.size.anim.enable) {
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if (!pJS.particles.size.anim.sync) {
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;

    /* check position  - into the canvas */
    if (this.x > pJS.canvas.w - this.radius * 2) this.x = this.x - this.radius;else if (this.x < this.radius * 2) this.x = this.x + this.radius;
    if (this.y > pJS.canvas.h - this.radius * 2) this.y = this.y - this.radius;else if (this.y < this.radius * 2) this.y = this.y + this.radius;

    /* check position - avoid overlap */
    if (pJS.particles.move.bounce) {
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if (_typeof(color.value) == 'object') {

      if (color.value instanceof Array) {
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      } else {
        if (color.value.r != undefined && color.value.g != undefined && color.value.b != undefined) {
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          };
        }
        if (color.value.h != undefined && color.value.s != undefined && color.value.l != undefined) {
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          };
        }
      }
    } else if (color.value == 'random') {
      this.color.rgb = {
        r: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        g: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        b: Math.floor(Math.random() * (255 - 0 + 1)) + 0
      };
    } else if (typeof color.value == 'string') {
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    if (pJS.particles.opacity.anim.enable) {
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if (!pJS.particles.opacity.anim.sync) {
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    var velbase = {};
    switch (pJS.particles.move.direction) {
      case 'top':
        velbase = { x: 0, y: -1 };
        break;
      case 'top-right':
        velbase = { x: 0.5, y: -0.5 };
        break;
      case 'right':
        velbase = { x: 1, y: -0 };
        break;
      case 'bottom-right':
        velbase = { x: 0.5, y: 0.5 };
        break;
      case 'bottom':
        velbase = { x: 0, y: 1 };
        break;
      case 'bottom-left':
        velbase = { x: -0.5, y: 1 };
        break;
      case 'left':
        velbase = { x: -1, y: 0 };
        break;
      case 'top-left':
        velbase = { x: -0.5, y: -0.5 };
        break;
      default:
        velbase = { x: 0, y: 0 };
        break;
    }

    if (pJS.particles.move.straight) {
      this.vx = velbase.x;
      this.vy = velbase.y;
      if (pJS.particles.move.random) {
        this.vx = this.vx * Math.random();
        this.vy = this.vy * Math.random();
      }
    } else {
      this.vx = velbase.x + Math.random() - 0.5;
      this.vy = velbase.y + Math.random() - 0.5;
    }

    // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;

    /* if shape is image */

    var shape_type = pJS.particles.shape.type;
    if ((typeof shape_type === 'undefined' ? 'undefined' : _typeof(shape_type)) == 'object') {
      if (shape_type instanceof Array) {
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    } else {
      this.shape = shape_type;
    }

    if (this.shape == 'image') {
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      };
      if (!this.img.ratio) this.img.ratio = 1;
      if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined) {
        pJS.fn.vendors.createSvgImg(this);
        if (pJS.tmp.pushing) {
          this.img.loaded = false;
        }
      }
    }
  };

  pJS.fn.particle.prototype.draw = function () {

    var p = this;

    if (p.radius_bubble != undefined) {
      var radius = p.radius_bubble;
    } else {
      var radius = p.radius;
    }

    if (p.opacity_bubble != undefined) {
      var opacity = p.opacity_bubble;
    } else {
      var opacity = p.opacity;
    }

    if (p.color.rgb) {
      var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + opacity + ')';
    } else {
      var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + opacity + ')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch (p.shape) {

      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
        break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x - radius, p.y - radius, radius * 2, radius * 2);
        break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius, p.y + radius / 1.66, radius * 2, 3, 2);
        break;

      case 'polygon':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius / (pJS.particles.shape.polygon.nb_sides / 3.5), // startX
        p.y - radius / (2.66 / 3.5), // startY
        radius * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3), // sideLength
        pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
        1 // sideCountDenominator
        );
        break;

      case 'star':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius * 2 / (pJS.particles.shape.polygon.nb_sides / 4), // startX
        p.y - radius / (2 * 2.66 / 3.5), // startY
        radius * 2 * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3), // sideLength
        pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
        2 // sideCountDenominator
        );
        break;

      case 'image':
        var draw = function draw() {
          pJS.canvas.ctx.drawImage(img_obj, p.x - radius, p.y - radius, radius * 2, radius * 2 / p.img.ratio);
        };

        if (pJS.tmp.img_type == 'svg') {
          var img_obj = p.img.obj;
        } else {
          var img_obj = pJS.tmp.img_obj;
        }

        if (img_obj) {
          draw();
        }

        break;

    }

    pJS.canvas.ctx.closePath();

    if (pJS.particles.shape.stroke.width > 0) {
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }

    pJS.canvas.ctx.fill();
  };

  pJS.fn.particlesCreate = function () {
    for (var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };

  pJS.fn.particlesUpdate = function () {

    for (var i = 0; i < pJS.particles.array.length; i++) {

      /* the particle */
      var p = pJS.particles.array[i];

      // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */
      if (pJS.particles.move.enable) {
        var ms = pJS.particles.move.speed / 2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }

      /* change opacity status */
      if (pJS.particles.opacity.anim.enable) {
        if (p.opacity_status == true) {
          if (p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        } else {
          if (p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if (p.opacity < 0) p.opacity = 0;
      }

      /* change size */
      if (pJS.particles.size.anim.enable) {
        if (p.size_status == true) {
          if (p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        } else {
          if (p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if (p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if (pJS.particles.move.out_mode == 'bounce') {
        var new_pos = {
          x_left: p.radius,
          x_right: pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        };
      } else {
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        };
      }

      if (p.x - p.radius > pJS.canvas.w) {
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      } else if (p.x + p.radius < 0) {
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if (p.y - p.radius > pJS.canvas.h) {
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      } else if (p.y + p.radius < 0) {
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch (pJS.particles.move.out_mode) {
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;else if (p.y - p.radius < 0) p.vy = -p.vy;
          break;
      }

      /* events */
      if (isInArray('grab', pJS.interactivity.events.onhover.mode)) {
        pJS.fn.modes.grabParticle(p);
      }

      if (isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)) {
        pJS.fn.modes.bubbleParticle(p);
      }

      if (isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)) {
        pJS.fn.modes.repulseParticle(p);
      }

      /* interaction auto between particles */
      if (pJS.particles.line_linked.enable || pJS.particles.move.attract.enable) {
        for (var j = i + 1; j < pJS.particles.array.length; j++) {
          var p2 = pJS.particles.array[j];

          /* link particles */
          if (pJS.particles.line_linked.enable) {
            pJS.fn.interact.linkParticles(p, p2);
          }

          /* attract particles */
          if (pJS.particles.move.attract.enable) {
            pJS.fn.interact.attractParticles(p, p2);
          }

          /* bounce particles */
          if (pJS.particles.move.bounce) {
            pJS.fn.interact.bounceParticles(p, p2);
          }
        }
      }
    }
  };

  pJS.fn.particlesDraw = function () {

    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.particlesUpdate();

    /* draw each particle */
    for (var i = 0; i < pJS.particles.array.length; i++) {
      var p = pJS.particles.array[i];
      p.draw();
    }
  };

  pJS.fn.particlesEmpty = function () {
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function () {

    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();

    /* restart */
    pJS.fn.vendors.start();
  };

  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function (p1, p2) {

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx * dx + dy * dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if (dist <= pJS.particles.line_linked.distance) {

      var opacity_line = pJS.particles.line_linked.opacity - dist / (1 / pJS.particles.line_linked.opacity) / pJS.particles.line_linked.distance;

      if (opacity_line > 0) {

        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();
      }
    }
  };

  pJS.fn.interact.attractParticles = function (p1, p2) {

    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx * dx + dy * dy);

    if (dist <= pJS.particles.line_linked.distance) {

      var ax = dx / (pJS.particles.move.attract.rotateX * 1000),
          ay = dy / (pJS.particles.move.attract.rotateY * 1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;
    }
  };

  pJS.fn.interact.bounceParticles = function (p1, p2) {

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx * dx + dy * dy),
        dist_p = p1.radius + p2.radius;

    if (dist <= dist_p) {
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }
  };

  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.pushParticles = function (nb, pos) {

    pJS.tmp.pushing = true;

    for (var i = 0; i < nb; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value, {
        'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
        'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
      }));
      if (i == nb - 1) {
        if (!pJS.particles.move.enable) {
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }
  };

  pJS.fn.modes.removeParticles = function (nb) {

    pJS.particles.array.splice(0, nb);
    if (!pJS.particles.move.enable) {
      pJS.fn.particlesDraw();
    }
  };

  pJS.fn.modes.bubbleParticle = function (p) {

    /* on hover event */
    if (pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)) {
      var init = function init() {
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      };

      /* mousemove - check ratio */


      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {

        if (ratio >= 0 && pJS.interactivity.status == 'mousemove') {

          /* size */
          if (pJS.interactivity.modes.bubble.size != pJS.particles.size.value) {

            if (pJS.interactivity.modes.bubble.size > pJS.particles.size.value) {
              var size = p.radius + pJS.interactivity.modes.bubble.size * ratio;
              if (size >= 0) {
                p.radius_bubble = size;
              }
            } else {
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - dif * ratio;
              if (size > 0) {
                p.radius_bubble = size;
              } else {
                p.radius_bubble = 0;
              }
            }
          }

          /* opacity */
          if (pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value) {

            if (pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value) {
              var opacity = pJS.interactivity.modes.bubble.opacity * ratio;
              if (opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity) {
                p.opacity_bubble = opacity;
              }
            } else {
              var opacity = p.opacity - (pJS.particles.opacity.value - pJS.interactivity.modes.bubble.opacity) * ratio;
              if (opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity) {
                p.opacity_bubble = opacity;
              }
            }
          }
        }
      } else {
        init();
      }

      /* mouseleave */
      if (pJS.interactivity.status == 'mouseleave') {
        init();
      }
    }

    /* on click event */
    else if (pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)) {
        var process = function process(bubble_param, particles_param, p_obj_bubble, p_obj, id) {

          if (bubble_param != particles_param) {

            if (!pJS.tmp.bubble_duration_end) {
              if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
                if (p_obj_bubble != undefined) var obj = p_obj_bubble;else var obj = p_obj;
                if (obj != bubble_param) {
                  var value = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration;
                  if (id == 'size') p.radius_bubble = value;
                  if (id == 'opacity') p.opacity_bubble = value;
                }
              } else {
                if (id == 'size') p.radius_bubble = undefined;
                if (id == 'opacity') p.opacity_bubble = undefined;
              }
            } else {
              if (p_obj_bubble != undefined) {
                var value_tmp = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration,
                    dif = bubble_param - value_tmp;
                value = bubble_param + dif;
                if (id == 'size') p.radius_bubble = value;
                if (id == 'opacity') p.opacity_bubble = value;
              }
            }
          }
        };

        if (pJS.tmp.bubble_clicking) {
          var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
              dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
              dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
              time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time) / 1000;

          if (time_spent > pJS.interactivity.modes.bubble.duration) {
            pJS.tmp.bubble_duration_end = true;
          }

          if (time_spent > pJS.interactivity.modes.bubble.duration * 2) {
            pJS.tmp.bubble_clicking = false;
            pJS.tmp.bubble_duration_end = false;
          }
        }

        if (pJS.tmp.bubble_clicking) {
          /* size */
          process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
          /* opacity */
          process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
        }
      }
  };

  pJS.fn.modes.repulseParticle = function (p) {

    if (pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);

      var normVec = { x: dx_mouse / dist_mouse, y: dy_mouse / dist_mouse },
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp(1 / repulseRadius * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);

      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      };

      if (pJS.particles.move.out_mode == 'bounce') {
        if (pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if (pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      } else {
        p.x = pos.x;
        p.y = pos.y;
      }
    } else if (pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

      if (!pJS.tmp.repulse_finish) {
        pJS.tmp.repulse_count++;
        if (pJS.tmp.repulse_count == pJS.particles.array.length) {
          pJS.tmp.repulse_finish = true;
        }
      }

      if (pJS.tmp.repulse_clicking) {
        var process = function process() {

          var f = Math.atan2(dy, dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if (pJS.particles.move.out_mode == 'bounce') {
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            };
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }
        };

        // default


        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance / 6, 3);

        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx * dx + dy * dy;

        var force = -repulseRadius / d * 1;

        if (d <= repulseRadius) {
          process();
        }

        // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }

      } else {

        if (pJS.tmp.repulse_clicking == false) {

          p.vx = p.vx_i;
          p.vy = p.vy_i;
        }
      }
    }
  };

  pJS.fn.modes.grabParticle = function (p) {

    if (pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if (dist_mouse <= pJS.interactivity.modes.grab.distance) {

        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - dist_mouse / (1 / pJS.interactivity.modes.grab.line_linked.opacity) / pJS.interactivity.modes.grab.distance;

        if (opacity_line > 0) {

          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();
        }
      }
    }
  };

  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function () {

    /* events target element */
    if (pJS.interactivity.detect_on == 'window') {
      pJS.interactivity.el = window;
    } else {
      pJS.interactivity.el = pJS.canvas.el;
    }

    /* detect mouse pos - on hover / click event */
    if (pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable) {

      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function (e) {

        if (pJS.interactivity.el == window) {
          var pos_x = e.clientX,
              pos_y = e.clientY;
        } else {
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if (pJS.tmp.retina) {
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';
      });

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener('mouseleave', function (e) {

        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';
      });
    }

    /* on click event */
    if (pJS.interactivity.events.onclick.enable) {

      pJS.interactivity.el.addEventListener('click', function () {

        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if (pJS.interactivity.events.onclick.enable) {

          switch (pJS.interactivity.events.onclick.mode) {

            case 'push':
              if (pJS.particles.move.enable) {
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              } else {
                if (pJS.interactivity.modes.push.particles_nb == 1) {
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                } else if (pJS.interactivity.modes.push.particles_nb > 1) {
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }
              break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
              break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
              break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function () {
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration * 1000);
              break;

          }
        }
      });
    }
  };

  pJS.fn.vendors.densityAutoParticles = function () {

    if (pJS.particles.number.density.enable) {

      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if (pJS.tmp.retina) {
        area = area / (pJS.canvas.pxratio * 2);
      }

      /* calc number of particles based on density area */
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      var missing_particles = pJS.particles.array.length - nb_particles;
      if (missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));else pJS.fn.modes.removeParticles(missing_particles);
    }
  };

  pJS.fn.vendors.checkOverlap = function (p1, position) {
    for (var i = 0; i < pJS.particles.array.length; i++) {
      var p2 = pJS.particles.array[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= p1.radius + p2.radius) {
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };

  pJS.fn.vendors.createSvgImg = function (p) {

    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
      if (p.color.rgb) {
        var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + p.opacity + ')';
      } else {
        var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + p.opacity + ')';
      }
      return color_value;
    });

    /* prepare to create img with colored svg */
    var svg = new Blob([coloredSvgXml], { type: 'image/svg+xml;charset=utf-8' }),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function () {
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;
  };

  pJS.fn.vendors.destroypJS = function () {
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };

  pJS.fn.vendors.drawShape = function (c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {

    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0, 0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength, 0);
      c.translate(sideLength, 0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();
  };

  pJS.fn.vendors.exportImg = function () {
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };

  pJS.fn.vendors.loadImg = function (type) {

    pJS.tmp.img_error = undefined;

    if (pJS.particles.shape.image.src != '') {

      if (type == 'svg') {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);
        xhr.onreadystatechange = function (data) {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            } else {
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        };
        xhr.send();
      } else {

        var img = new Image();
        img.addEventListener('load', function () {
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;
      }
    } else {
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }
  };

  pJS.fn.vendors.draw = function () {

    if (pJS.particles.shape.type == 'image') {

      if (pJS.tmp.img_type == 'svg') {

        if (pJS.tmp.count_svg >= pJS.particles.number.value) {
          pJS.fn.particlesDraw();
          if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        } else {
          //console.log('still loading...');
          if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }
      } else {

        if (pJS.tmp.img_obj != undefined) {
          pJS.fn.particlesDraw();
          if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        } else {
          if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }
      }
    } else {
      pJS.fn.particlesDraw();
      if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }
  };

  pJS.fn.vendors.checkBeforeDraw = function () {

    // if shape is image
    if (pJS.particles.shape.type == 'image') {

      if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined) {
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      } else {
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if (!pJS.tmp.img_error) {
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
      }
    } else {
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }
  };

  pJS.fn.vendors.init = function () {

    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);
  };

  pJS.fn.vendors.start = function () {

    if (isInArray('image', pJS.particles.shape.type)) {
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    } else {
      pJS.fn.vendors.checkBeforeDraw();
    }
  };

  /* ---------- pJS - start ------------ */

  pJS.fn.vendors.eventsListeners();

  pJS.fn.vendors.start();
};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function (destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor && source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

window.cancelRequestAnimFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}();

function hexToRgb(hex) {
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function (tag_id, params) {

  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if (typeof tag_id != 'string') {
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if (!tag_id) {
    tag_id = 'particles-js';
  }

  /* pJS elements */
  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if (exist_canvas.length) {
    while (exist_canvas.length > 0) {
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if (canvas != null) {
    pJSDom.push(new pJS(tag_id, params));
  }
};

window.particlesJS.load = function (tag_id, path_config_json, callback) {

  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if (callback) callback();
      } else {
        console.log('Error pJS - XMLHttpRequest status: ' + xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @author mrdoob / http://mrdoob.com/
 */

var Stats = function Stats() {

	var startTime = Date.now(),
	    prevTime = startTime;
	var ms = 0,
	    msMin = Infinity,
	    msMax = 0;
	var fps = 0,
	    fpsMin = Infinity,
	    fpsMax = 0;
	var frames = 0,
	    mode = 0;

	var container = document.createElement('div');
	container.id = 'stats';
	container.addEventListener('mousedown', function (event) {
		event.preventDefault();setMode(++mode % 2);
	}, false);
	container.style.cssText = 'width:80px;opacity:0.9;cursor:pointer';

	var fpsDiv = document.createElement('div');
	fpsDiv.id = 'fps';
	fpsDiv.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#002';
	container.appendChild(fpsDiv);

	var fpsText = document.createElement('div');
	fpsText.id = 'fpsText';
	fpsText.style.cssText = 'color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
	fpsText.innerHTML = 'FPS';
	fpsDiv.appendChild(fpsText);

	var fpsGraph = document.createElement('div');
	fpsGraph.id = 'fpsGraph';
	fpsGraph.style.cssText = 'position:relative;width:74px;height:30px;background-color:#0ff';
	fpsDiv.appendChild(fpsGraph);

	while (fpsGraph.children.length < 74) {

		var bar = document.createElement('span');
		bar.style.cssText = 'width:1px;height:30px;float:left;background-color:#113';
		fpsGraph.appendChild(bar);
	}

	var msDiv = document.createElement('div');
	msDiv.id = 'ms';
	msDiv.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#020;display:none';
	container.appendChild(msDiv);

	var msText = document.createElement('div');
	msText.id = 'msText';
	msText.style.cssText = 'color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
	msText.innerHTML = 'MS';
	msDiv.appendChild(msText);

	var msGraph = document.createElement('div');
	msGraph.id = 'msGraph';
	msGraph.style.cssText = 'position:relative;width:74px;height:30px;background-color:#0f0';
	msDiv.appendChild(msGraph);

	while (msGraph.children.length < 74) {

		var bar = document.createElement('span');
		bar.style.cssText = 'width:1px;height:30px;float:left;background-color:#131';
		msGraph.appendChild(bar);
	}

	var setMode = function setMode(value) {

		mode = value;

		switch (mode) {

			case 0:
				fpsDiv.style.display = 'block';
				msDiv.style.display = 'none';
				break;
			case 1:
				fpsDiv.style.display = 'none';
				msDiv.style.display = 'block';
				break;
		}
	};

	var updateGraph = function updateGraph(dom, value) {

		var child = dom.appendChild(dom.firstChild);
		child.style.height = value + 'px';
	};

	return {

		REVISION: 12,

		domElement: container,

		setMode: setMode,

		begin: function begin() {

			startTime = Date.now();
		},

		end: function end() {

			var time = Date.now();

			ms = time - startTime;
			msMin = Math.min(msMin, ms);
			msMax = Math.max(msMax, ms);

			msText.textContent = ms + ' MS (' + msMin + '-' + msMax + ')';
			updateGraph(msGraph, Math.min(30, 30 - ms / 200 * 30));

			frames++;

			if (time > prevTime + 1000) {

				fps = Math.round(frames * 1000 / (time - prevTime));
				fpsMin = Math.min(fpsMin, fps);
				fpsMax = Math.max(fpsMax, fps);

				fpsText.textContent = fps + ' FPS (' + fpsMin + '-' + fpsMax + ')';
				updateGraph(fpsGraph, Math.min(30, 30 - fps / 100 * 30));

				prevTime = time;
				frames = 0;
			}

			return time;
		},

		update: function update() {

			startTime = this.end();
		}

	};
};

if (( false ? 'undefined' : _typeof(module)) === 'object') {

	module.exports = Stats;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00aaff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 8,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! SmoothScroll v16.1.4 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function (e, t) {
	"object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (e = e || self).SmoothScroll = t();
}(undefined, function () {
	"use strict";
	window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {
		var t,
		    n = (this.document || this.ownerDocument).querySelectorAll(e),
		    o = this;do {
			for (t = n.length; --t >= 0 && n.item(t) !== o;) {}
		} while (t < 0 && (o = o.parentElement));return o;
	}), function () {
		if ("function" == typeof window.CustomEvent) return !1;function e(e, t) {
			t = t || { bubbles: !1, cancelable: !1, detail: void 0 };var n = document.createEvent("CustomEvent");return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
		}e.prototype = window.Event.prototype, window.CustomEvent = e;
	}(),
	/**
 	 * requestAnimationFrame() polyfill
 	 * By Erik Möller. Fixes from Paul Irish and Tino Zijdel.
 	 * @link http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 	 * @link http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 	 * @license MIT
 	 */
	function () {
		for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) {
			window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
		}window.requestAnimationFrame || (window.requestAnimationFrame = function (t, n) {
			var o = new Date().getTime(),
			    i = Math.max(0, 16 - (o - e)),
			    a = window.setTimeout(function () {
				t(o + i);
			}, i);return e = o + i, a;
		}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
			clearTimeout(e);
		});
	}();var e = { ignore: "[data-scroll-ignore]", header: null, topOnEmptyHash: !0, speed: 500, speedAsDuration: !1, durationMax: null, durationMin: null, clip: !0, offset: 0, easing: "easeInOutCubic", customEasing: null, updateURL: !0, popstate: !0, emitEvents: !0 },
	    t = function t() {
		var e = {};return Array.prototype.forEach.call(arguments, function (t) {
			for (var n in t) {
				if (!t.hasOwnProperty(n)) return;e[n] = t[n];
			}
		}), e;
	},
	    n = function n(e) {
		"#" === e.charAt(0) && (e = e.substr(1));for (var t, n = String(e), o = n.length, i = -1, a = "", r = n.charCodeAt(0); ++i < o;) {
			if (0 === (t = n.charCodeAt(i))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t >= 1 && t <= 31 || 127 == t || 0 === i && t >= 48 && t <= 57 || 1 === i && t >= 48 && t <= 57 && 45 === r ? a += "\\" + t.toString(16) + " " : a += t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? n.charAt(i) : "\\" + n.charAt(i);
		}return "#" + a;
	},
	    o = function o() {
		return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
	},
	    i = function i(e) {
		return e ? (t = e, parseInt(window.getComputedStyle(t).height, 10) + e.offsetTop) : 0;var t;
	},
	    a = function a(e, t, n) {
		0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), e.focus(), e.style.outline = "none"), window.scrollTo(0, t));
	},
	    r = function r(e, t, n, o) {
		if (t.emitEvents && "function" == typeof window.CustomEvent) {
			var i = new CustomEvent(e, { bubbles: !0, detail: { anchor: n, toggle: o } });document.dispatchEvent(i);
		}
	};return function (c, u) {
		var s,
		    l,
		    d,
		    m,
		    f = {};f.cancelScroll = function (e) {
			cancelAnimationFrame(m), m = null, e || r("scrollCancel", s);
		}, f.animateScroll = function (n, c, u) {
			f.cancelScroll();var l = t(s || e, u || {}),
			    w = "[object Number]" === Object.prototype.toString.call(n),
			    h = w || !n.tagName ? null : n;if (w || h) {
				var p = window.pageYOffset;l.header && !d && (d = document.querySelector(l.header));var g,
				    y,
				    v,
				    S = i(d),
				    E = w ? n : function (e, t, n, i) {
					var a = 0;if (e.offsetParent) do {
						a += e.offsetTop, e = e.offsetParent;
					} while (e);return a = Math.max(a - t - n, 0), i && (a = Math.min(a, o() - window.innerHeight)), a;
				}(h, S, parseInt("function" == typeof l.offset ? l.offset(n, c) : l.offset, 10), l.clip),
				    b = E - p,
				    A = o(),
				    O = 0,
				    C = function (e, t) {
					var n = t.speedAsDuration ? t.speed : Math.abs(e / 1e3 * t.speed);return t.durationMax && n > t.durationMax ? t.durationMax : t.durationMin && n < t.durationMin ? t.durationMin : parseInt(n, 10);
				}(b, l),
				    M = function M(e) {
					g || (g = e), O += e - g, v = p + b * function (e, t) {
						var n;return "easeInQuad" === e.easing && (n = t * t), "easeOutQuad" === e.easing && (n = t * (2 - t)), "easeInOutQuad" === e.easing && (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), "easeInCubic" === e.easing && (n = t * t * t), "easeOutCubic" === e.easing && (n = --t * t * t + 1), "easeInOutCubic" === e.easing && (n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e.easing && (n = t * t * t * t), "easeOutQuart" === e.easing && (n = 1 - --t * t * t * t), "easeInOutQuart" === e.easing && (n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e.easing && (n = t * t * t * t * t), "easeOutQuint" === e.easing && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e.easing && (n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), e.customEasing && (n = e.customEasing(t)), n || t;
					}(l, y = (y = 0 === C ? 0 : O / C) > 1 ? 1 : y), window.scrollTo(0, Math.floor(v)), function (e, t) {
						var o = window.pageYOffset;if (e == t || o == t || (p < t && window.innerHeight + o) >= A) return f.cancelScroll(!0), a(n, t, w), r("scrollStop", l, n, c), g = null, m = null, !0;
					}(v, E) || (m = window.requestAnimationFrame(M), g = e);
				};0 === window.pageYOffset && window.scrollTo(0, 0), function (e, t, n) {
					t || history.pushState && n.updateURL && history.pushState({ smoothScroll: JSON.stringify(n), anchor: e.id }, document.title, e === document.documentElement ? "#top" : "#" + e.id);
				}(n, w, l), "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches ? a(n, Math.floor(E), !1) : (r("scrollStart", l, n, c), f.cancelScroll(!0), window.requestAnimationFrame(M));
			}
		};var w = function w(e) {
			if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (l = e.target.closest(c)) && "a" === l.tagName.toLowerCase() && !e.target.closest(s.ignore) && l.hostname === window.location.hostname && l.pathname === window.location.pathname && /#/.test(l.href)) {
				var t, o;try {
					t = n(decodeURIComponent(l.hash));
				} catch (e) {
					t = n(l.hash);
				}if ("#" === t) {
					if (!s.topOnEmptyHash) return;o = document.documentElement;
				} else o = document.querySelector(t);(o = o || "#top" !== t ? o : document.documentElement) && (e.preventDefault(), function (e) {
					if (history.replaceState && e.updateURL && !history.state) {
						var t = window.location.hash;t = t || "", history.replaceState({ smoothScroll: JSON.stringify(e), anchor: t || window.pageYOffset }, document.title, t || window.location.href);
					}
				}(s), f.animateScroll(o, l));
			}
		},
		    h = function h() {
			if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(s)) {
				var e = history.state.anchor;"string" == typeof e && e && !(e = document.querySelector(n(history.state.anchor))) || f.animateScroll(e, null, { updateURL: !1 });
			}
		};f.destroy = function () {
			s && (document.removeEventListener("click", w, !1), window.removeEventListener("popstate", h, !1), f.cancelScroll(), s = null, l = null, d = null, m = null);
		};return function () {
			if (!("querySelector" in document && "addEventListener" in window && "requestAnimationFrame" in window && "closest" in window.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(), s = t(e, u || {}), d = s.header ? document.querySelector(s.header) : null, document.addEventListener("click", w, !1), s.updateURL && s.popstate && window.addEventListener("popstate", h, !1);
		}(), f;
	};
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var scroll = new SmoothScroll('a[href*="#"]', {

	// Speed & Duration
	speed: 300, // Integer. Amount of time in milliseconds it should take to scroll 1000px
	speedAsDuration: true, // If true, use speed as the total duration of the scroll animation
	offset: 50
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


addEventListener('DOMContentLoaded', function () {
    var contadores = document.querySelectorAll('.contador_cantidad');
    var velocidad = 500;

    var animarContadores = function animarContadores() {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            var _loop = function _loop() {
                var contador = _step.value;

                var actualizar_contador = function actualizar_contador() {
                    var cantidad_maxima = +contador.dataset.cantidadTotal,
                        valor_actual = +contador.innerText,
                        incremento = cantidad_maxima / velocidad;

                    if (valor_actual < cantidad_maxima) {
                        contador.innerText = Math.ceil(valor_actual + incremento);
                        setTimeout(actualizar_contador, 5);
                    } else {
                        contador.innerText = cantidad_maxima;
                    }
                };

                actualizar_contador();
            };

            for (var _iterator = contadores[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                _loop();
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    };
    animarContadores();
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//-----------------VARIABLES
var nombre = document.querySelector('#nombre');
var telefono = document.querySelector('#telefono');
var email = document.querySelector('#correo');
var asunto = document.querySelector('#asunto');
var mensaje = document.querySelector('#mensaje');
var btnEnviar = document.querySelector('#btnEnviar');
var img = document.querySelector('#img-enviado');

//-----------------EVENT LISTENERS
eventListeners();

function eventListeners() {
    //inicia la app y desabilita el boton enviar
    document.addEventListener('DOMContentLoaded', iniciaApp);

    //validar campos
    nombre.addEventListener('blur', validarCampo);
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //habilitar boton enviar
    btnEnviar.addEventListener('click', enviarEmail);
}

//----------------FUNCIONES

function iniciaApp() {
    //desabilita btnEnviar
    btnEnviar.disabled = true;
}

function validarCampo() {
    validarLongitud(this);

    var correcto = void 0;

    //validar solo email
    if (this.type === 'email') {
        validarEmail(this);
    }

    if (email.value.length > 3 && nombre.value.length > 3 && mensaje.value.length > 3) {
        btnEnviar.disabled = false;
    }
}

function enviarEmail(e) {
    e.preventDefault();

    console.log('email enviado');
    setTimeout(function () {
        img.style.display = 'block';
    }, 2000);
}

function validarLongitud(campo) {
    if (campo.value.length > 3) {
        campo.style.borderBottom = '1px solid green';
    } else {
        campo.style.borderBottom = '1px solid red';
    }
}

function validarEmail(email) {
    var position = email.value.indexOf('@');

    if (position !== -1) {
        email.style.borderBottom = '1px solid green';
        correcto = true;
    } else {
        email.style.borderBottom = '1px solid red';
    }
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ })
],[0]);