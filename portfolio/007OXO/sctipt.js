'use strict';

let currentPlayer = '<span class="zero">O</span>',
	 win = false;

const gameBoard = document.querySelectorAll('[data-cell]'),
		winner = document.querySelector('.winner');


gameBoard.forEach( (event) => {

	event.addEventListener('click', (event) => {

		let e = event.target;
		if (e.innerText !== '' || win) return;
		e.innerHTML = currentPlayer;
		currentPlayer === '<span class="zero">O</span>' ? currentPlayer = '<span class="cross">X</span>' : currentPlayer = '<span class="zero">O</span>';


		checkGameBoard();

		function checkGameBoard() {

			for(let i = 0; i <=2; i++) {
				checkWinner(document.querySelector(`[data-cell='${i}_0']`).innerText,
								document.querySelector(`[data-cell='${i}_1']`).innerText,
								document.querySelector(`[data-cell='${i}_2']`).innerText);

				checkWinner(document.querySelector(`[data-cell='0_${i}']`).innerText,
								document.querySelector(`[data-cell='1_${i}']`).innerText,
								document.querySelector(`[data-cell='2_${i}']`).innerText);
			}

			checkWinner(document.querySelector('[data-cell="0_0"]').innerText,
							document.querySelector('[data-cell="1_1"]').innerText,
							document.querySelector('[data-cell="2_2"]').innerText);

			checkWinner(document.querySelector('[data-cell="0_2"]').innerText,
							document.querySelector('[data-cell="1_1"]').innerText,
							document.querySelector('[data-cell="2_0"]').innerText);

			function checkWinner(first, second, third) {
				if (first !== '' && first === second && first === third) {
					if (first === 'O') {
						winner.innerText = 'Нолики выйграли!';
					} else {
						winner.innerText = 'Крестики выйграли!';
					}
					win = true;
				}
			}

		}


	});

});