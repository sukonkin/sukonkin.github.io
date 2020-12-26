'use strict';

const portfolio = document.querySelectorAll('.skills__title'),
		cart = document.querySelectorAll('.cart'),
		cartNothing = document.querySelector('[data-cart="nothing"]');

// NumData - это числа для которых нужна карточка "Скоро будет еще"
const numData = /2|5|8|11|14|17|20|23|26|29/;

let summJS = 0, // Начальное значение карточек с темой JS
	 summTM = 0, // Начальное значение карточек с темой шаблонов
	 summAll = 0; 
		
// Считаем, сколько всего карточек той или иной темы
cart.forEach( (item) => {
	if (item.dataset.cart == 'js') {
			summJS++
		} if (item.dataset.cart == 'template') {
			summTM++;
		} if (item.dataset.cart) {
			summAll++;
		}
});


// Убираем вспомогательный блок при загрузке страницы
cart.forEach( (block) => {

	if (!numData.test(summAll)) {
		cartNothing.style.display = 'none';
	}

});


// Пишем обработчик события
portfolio.forEach( (element) => {
	element.addEventListener('click', (event) => {
		event.preventDefault();
		let e = event.target;
		
		// Активация JavaScript-шаблонов
		if (e && e.dataset.skills == 'JavaScript') {
			cart.forEach( (item) => {
				if (item.dataset.cart != 'js') {
					item.style.display = 'none';
				} if (item.dataset.cart == 'js') {
					item.style.display = '';

					// Пишем условие при кот. появится карточка "Скоро будет еще"
				} if (numData.test(summJS)) {
						cartNothing.style.display = '';
				}
			});
			portfolio.forEach( (element) => {
				if (element.classList.contains('skills__title_active')) {
					element.classList.remove('skills__title_active');
				}
			});
			e.classList.add('skills__title_active');
		} 

		// Активация страниц-шаблонов
		if (e && e.dataset.skills == 'Templates') {
			cart.forEach( (item) => {
				if (item.dataset.cart != 'template') {
					item.style.display = 'none';
				} if (item.dataset.cart == 'template') {
					item.style.display = '';

				  // Пишем условие при кот. появится карточка "Скоро будет еще"
				} if (numData.test(summTM)) {
						cartNothing.style.display = '';
				}
			});
			portfolio.forEach( (element) => {
				if (element.classList.contains('skills__title_active')) {
					element.classList.remove('skills__title_active');
				}
			});
			e.classList.add('skills__title_active');
		}

		// Активация всего
		if (e && e.dataset.skills == 'all') {
			cart.forEach( (item) => {
				item.style.display = '';
			});
			portfolio.forEach( (element) => {
				if (element.classList.contains('skills__title_active')) {
					element.classList.remove('skills__title_active');
				} if (!numData.test(summAll)) {
						cartNothing.style.display = 'none';
				}
			});
			e.classList.add('skills__title_active');
		}

	});
});