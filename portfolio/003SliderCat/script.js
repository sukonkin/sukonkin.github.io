const slide = document.querySelectorAll('.mySlides'),
	  nextButton = document.querySelector('.next'),
	  prevButton = document.querySelector('.prev'),
	  dot = document.querySelectorAll('.dot');

let item = 0,
	active = 0;

slide[0].classList.remove('mySlides');
dot[0].classList.add('active');

/* dot.addEventListener('click', () => {
	target
}); */

function add() {
	slide[item].classList.add('mySlides');
	dot[active].classList.remove('active');
}

function remove() {
	slide[item].classList.remove('mySlides');
	dot[active].classList.add('active');
}

nextButton.addEventListener('click', () => {
	if (item === (slide.length - 1)) {
		add();
		item = 0;
		active = 0;
		remove();
	} else {
		add();
		item++;
		active++;
		remove();
	}
});

prevButton.addEventListener('click', () => {
	if (item === 0) {
		add();
		item += 2;
		active += 2;
		remove();
	} else {
		add();
		item--;
		active--;
		remove();
	}
});