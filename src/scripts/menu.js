let btnOpen;
let btnClose;
let menu;

btnOpen = document.querySelector('.btn-open');
btnClose = document.querySelector('.btn-close');
menu = document.querySelector('.header-nav');
btnOpen.onclick = function showMenu() {
  menu.classList.add('open-menu');
  menu.classList.remove('close-menu');
  btnClose.classList.add('open-btn');
};
btnClose.onclick = function closeMenu() {
  menu.classList.remove('open-menu');
  menu.classList.add('close-menu');
  btnClose.classList.remove('open-btn');
};