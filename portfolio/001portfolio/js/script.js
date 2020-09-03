const button = document.querySelector("#menu");
const navigation = document.querySelector("#header");

button.addEventListener("click", buttonClick);

function buttonClick () {
	navigation.classList.toggle("hiddenHeader");
}