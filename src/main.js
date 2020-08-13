import _ from 'lodash';
import './style.scss';
import IMask from 'imask';

var element = document.getElementById('phone');
var maskOptions = {
  mask: '+{7} (000) 000 00 00',
};
var mask = IMask(element, maskOptions);
