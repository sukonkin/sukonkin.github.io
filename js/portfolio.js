'use strict';

const portfolio = document.querySelectorAll('.skills__title'),
		cart = document.querySelectorAll('.cart'),
		cartNothing = document.querySelector('[data-cart="nothing"]'),
		loader = document.querySelector('.loader');

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

loadingCart(summAll);


// Скрипт загрузки дополнительных карточек
function loadingCart (summ) {

	if (summ > 6) {
		for(let i = 6; i < (summ - 1); i++) {
			cart[i].style.display = 'none';
		}
	}

	if (summ <=6) {
		loader.innerHTML = '';
	} else {

		loader.innerHTML = '<div class="loader">Загрузить еще</div>';

		loader.addEventListener('click', () => {
			let index = 5;
			function loadCart (count) {
				if (cart[index + count] && cart[index + count] !== cartNothing) {
					cart[index + count].style.display = '';
				} else {
					return;
				}
			}
			loadCart(1);
			loadCart(2);
			loadCart(3);
			index += 3;
			if (cart[cart.length - 2].style.display === '' && loader.innerHTML === '<div class="loader">Загрузить еще</div>') {
				loader.innerHTML = '';
			}
		});

	}
}





// Убираем вспомогательный блок при загрузке страницы
cart.forEach( (block) => {

	if (numData.test(summAll)) {
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
					
					loadingCart(summJS);

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

					loadingCart(summTM);

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
				} if (numData.test(summAll)) {
						cartNothing.style.display = 'none';
				}
			});
			e.classList.add('skills__title_active');

			// Скрытие личшнего
			loadingCart(summAll);

		}

	});
});