const slide = document.querySelectorAll('.mySlides'),
	  nextButton = document.querySelector('.next'),
	  prevButton = document.querySelector('.prev'),
	  dot = document.querySelectorAll('.dot');

let item = 0,
	 active = 0;

slide[0].classList.remove('mySlides');
dot[0].classList.add('active');

function add(item, active) {
	slide[item].classList.add('mySlides');
	dot[active].classList.remove('active');
}

function remove(item, active) {
	slide[item].classList.remove('mySlides');
	dot[active].classList.add('active');
}

nextButton.addEventListener('click', () => {
	if (item == (slide.length - 1)) {
		add(item, active);
		item = 0;
		active = 0;
		remove(item, active);
	} else {
		add(item, active);
		item++;
		active++;
		remove(item, active);
	}
});

prevButton.addEventListener('click', () => {
	if (item == 0) {
		add(item, active);
		item = 2;
		active = 2;
		remove(item, active);
	} else {
		add(item, active);
		item--;
		active--;
		remove(item, active);
	}
});



// ===========================================
// Работаем с точками и их связью с картинками
// ===========================================


// Делаем перебор, где element - элемент псевдо-массива, а index его номер
dot.forEach( (element, index) => { 
	
	// Создаем событие на нажатом элменте точки
	element.addEventListener('click', (event) => {  
		
		// Записываем в новую переменную значение data-атрибута точки
		let attr = event.target.dataset.dot; 
		
		// Если точка по которой нажали не содержит в себе класс active...
		if (!event.target.classList.contains('active')) { 
			
			// Запусти перебор в псевдо-массиве dot
			for(let act of dot) { 
				// И убери у всех этот класс
				act.classList.remove('active');
			}
			// После чего добавь в тот элемент, который был выбран
			event.target.classList.add('active');
			
			// Далее присваиваем значения для переменных (нужны для стрелок)
			item = attr;
			active = attr;
			
			// Запусти перебор в псевдо-массиве изображений slide
			for(let image of slide) {
				let i = image.classList.contains('mySlides');
				if (!i) {
					image.classList.add('mySlides');
				} 
			}

			slide[attr].classList.remove('mySlides');

			// console.log(item, active);

		} 

	});

});