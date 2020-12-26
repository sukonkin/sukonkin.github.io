'use strict';

const nav = document.querySelector('.navigation'),
		slider = document.querySelector('.main-image'),
		navWrapper = nav.querySelector('.navigation__wrapper'),
		burger = nav.querySelector('.burger'),
		menu = nav.querySelector('.menu');

document.addEventListener('scroll', () => {
	if (window.pageYOffset >= 580) {
		nav.classList.add('navigation_fixed');
		slider.style.marginTop = '70px';
		nav.classList.remove('navigation_animation-out');
		nav.classList.add('navigation_animation-in');
	} if (window.pageYOffset < 580) {
		nav.classList.add('navigation_animation-out');
		nav.classList.remove('navigation_animation-in');
		slider.style.marginTop = '';
	} if (window.pageYOffset < 250) {
		nav.classList.remove('navigation_fixed');
	}
});

burger.addEventListener('click', (event) => {

	let styleMenu = window.getComputedStyle(menu),
		 styleHeight = styleMenu.height,
		 height = parseInt(styleHeight.match(/\d+/));

	if (event.target && event.target.classList.contains('burger')) {
		burger.classList.toggle('burger_click');

		if (burger.classList.contains('burger_click')) {
			menu.classList.remove('menu_animation-out');
			menu.classList.add('menu_animation-in');
			document.documentElement.style.overflow = 'hidden';
		} else {
			menu.classList.remove('menu_animation-in');
			menu.classList.add('menu_animation-out');
			document.documentElement.style.overflow = '';
		}
		
	} 

});