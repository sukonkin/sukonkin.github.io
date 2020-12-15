'use strict';

const menu = document.querySelector('.nav'),
		cross = document.querySelector('.cross'),
		crossLink = cross.querySelector('.cross__link'),
		base = document.querySelector('.base');

base.style.display = 'none';

function closeMenu() {
	menu.classList.remove('nav_anim-right');
	cross.classList.remove('cross_anim-right');
	cross.classList.add('cross_anim-left');
	menu.classList.add('nav_anim-left');
	crossLink.classList.remove('cross__link_animation-one');
	crossLink.classList.add('cross__link_animation-two');
	crossLink.setAttribute("title", "Открыть меню");
	base.style.display = 'none';
}

crossLink.addEventListener('click', (event) => {
	event.preventDefault();
	const e = event.target;
	if (e && e.classList.contains('cross__link')) {
		if (!cross.classList.contains('cross_anim-right')) {
			cross.classList.remove('cross_anim-left');
			menu.classList.remove('nav_anim-left');
			menu.classList.add('nav_anim-right');
			cross.classList.add('cross_anim-right');
			crossLink.classList.remove('cross__link_animation-two');
			crossLink.classList.add('cross__link_animation-one');
			crossLink.setAttribute("title", "Закрыть меню");
			menu.classList.add('nav_display');
			base.style.display = '';

		} else {
			closeMenu();
		}

	} 
});

base.addEventListener('click', (event) => {
	if (event.target && cross.classList.contains('cross_anim-right')) {
		closeMenu();
	} 
});

document.addEventListener('keydown', (event) => {
	if (event.code === 'Escape' && cross.classList.contains('cross_anim-right')) {
		closeMenu();
	}
});