const evilBtn = document.querySelector('.js__evil');
const evilContainer = document.querySelector('.js__evil-container');

function toogleEvilness() {

	const isEvil = evilContainer.classList.contains('isEvil');

	isEvil ? evilContainer.classList.remove('isEvil') : evilContainer.classList.add('isEvil');
}

evilBtn.addEventListener('click', toogleEvilness)
