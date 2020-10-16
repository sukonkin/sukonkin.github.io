window.addEventListener('DOMContentLoaded', () => {
	const button = document.querySelector('#menu'),
	navigation = document.querySelector('#header');

	function hideHeader() {
		navigation.classList.add('hide');
		navigation.classList.remove('show');
	}

	function showHeader() {
		navigation.classList.add('show');
		navigation.classList.remove('hide');
	}

	button.addEventListener('click', () => {
		if (navigation.classList.contains('show')) {
			hideHeader();
		} else {
			showHeader();
		}
	});
});

