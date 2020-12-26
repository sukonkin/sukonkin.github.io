'use strict';

const anchor = document.querySelector('a[href="#intro"]');

anchor.addEventListener('click', (event) => {
		event.preventDefault();
		const attribute = anchor.getAttribute('href');
		document.querySelector(attribute).scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});