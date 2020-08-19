import _ from 'lodash';
import './style.scss';
import './scripts/menu.js';
import './images/burger-menu.svg';
import './images/cross-menu.svg';
import IMask from 'imask';

var element = document.getElementById('phone');
var maskOptions = {
  mask: '+{7} (000) 000 00 00',
};
var mask = IMask(element, maskOptions);