// CSS IMPORTED
import '../../css/style.css';

// JAVASCRIPT IMPORTED
import '../typed.js';
import '../myscript.js';

// Render Nav y Footer
import '../footer.js';

// Particles.js
import '../particles/js/particles.js';
import '../particles/js/lib/stats.js';
import '../particles/js/app.js';

// Smooth.js
import '../smooth-scroll.polyfills.min.js';
import '../smoot-scroll-custom.js';

// kapcha
// import '../...';

// Contador
import '../contador.js';
// Formulario
import '../formulario.js';

// IMG IMPORTED
import imgPlanes from '../../../dist/img/background-code.jpg'
import imgContador from '../../../dist/img/contador-background.jpg'
import imgBackgroundCover from '../../../dist/img/portada.jpg'

const $planes = document.getElementById('planes')
$planes.style.backgroundImage = `url(${imgPlanes})`

const $contador = document.getElementById('contador')
$contador.style.backgroundImage = `url(${imgContador})`

const $BackgroundCover = document.getElementsByClassName('background-cover')[0]
$BackgroundCover.style.backgroundImage = `url(${imgBackgroundCover})`
