let btnOpen;
let btnClose;
let menu;

btnOpen = document.querySelector('.header-nav__open');
btnClose = document.querySelector('.header-nav__close');
menu = document.querySelector('.header-nav');

function showBtn() {
  btnClose.style.visibility = "visible";
}

btnOpen.onclick = function showMenu() {
  menu.classList.add('open-menu');
  setTimeout(showBtn, 1000);
};

btnClose.onclick = function closeMenu() {
  menu.classList.remove('open-menu');
  btnClose.style.visibility = "hidden";
};