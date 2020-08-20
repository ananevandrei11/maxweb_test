import './style.scss';
import './scripts/menu.js';
import IMask from 'imask/esm/imask';

var element = document.getElementById('phone');
var maskOptions = {
  mask: '+{7} (000) 000 00 00',
};
var mask = IMask(element, maskOptions);

import './images/burger-menu.svg';
import './images/cross-menu.svg';