/*  Fonts
\*-------------------------------------------------------*/
import helvetica  from './fonts/Helvetica.woff'



/*  Images
\*-------------------------------------------------------*/
import favicon from './images/favicon.png'
import logotipo from './images/selectoral-logo.svg';
import logoErwCode from './images/erwcode-logo.svg';

import screenDashboardS from './images/selectoral-dashboard@1x.png'
import screenDashboardM from './images/selectoral-dashboard.png'
import screenLogin from './images/selectoral-login.png'
import screenRegistros from  './images/selectoral-registros.png'
import screenEstadistica from './images/selectoral-estadistica.png'
import screenDemoS from './images/selectoral-demo@1x.png'
import screenDemoM from './images/selectoral-demo.png'

import iconArrow from './images/icon-arrow.svg'
import iconCaptura from './images/icon-captura.svg'
import iconAnaliza from './images/icon-analiza.svg'
import iconPlanifica from './images/icon-planifica.svg'
import iconPerfiles from './images/icon-perfiles.svg'
import iconEstructura from './images/icon-estructura.svg'
import iconReportes from './images/icon-reportes.svg'
import iconSeguridad from './images/icon-seguridad.svg'
import iconBackup from './images/icon-backup.svg'
import iconSoporte from './images/icon-soporte.svg'

import vectorTop from './images/estructura-top.png'
import vectorLeft from './images/estructura-left.png'
import vectorRight from './images/estructura-right.png'

import logoMovimiento from './images/logo-movimiento.svg'
import logoPan from './images/logo-pan.svg'
import logoMorena from './images/logo-morena.svg'
import logoVerde from './images/logo-verde.svg'

import openGraphSelectoral from './images/selectoral.jpg'



/*  CSS
\*-------------------------------------------------------*/
import scss from './scss/main.scss'
import 'aos/dist/aos.css'



/*  JavaScript
\*-------------------------------------------------------*/
import { activeMenu, activeMenuLink } from './js/menu'
import { emailSystem } from './js/email';
import { showCurrentDate } from './js/date';
import AOS from 'aos'

activeMenu('hamburger','menu')
activeMenuLink()
emailSystem()
showCurrentDate()

AOS.init({
  offset: 100, // offset (in px) from the original trigger point
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease-out-back', // default easing for AOS animations
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
