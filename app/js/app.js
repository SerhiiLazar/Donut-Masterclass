// // Import vendor jQuery plugin example
// import '~/app/libs/menu/dist/menu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	burgerMenu();
	
})

function burgerMenu() {
	const mobileMenu = document.querySelector('.js-menu-container');
	const openMenuBtn = document.querySelector('.js-open-menu');
	const closedMenuBtn = document.querySelector('.js-close-menu');

	const toggleMenu = () => {
		const isMenuOpen = 
			openMenuBtn.getAttribute('aria-expended') === 'true' || false;
			openMenuBtn.setAttribute('aria-expended', !isMenuOpen);
			mobileMenu.classList.toggle('is-open'); 
	}

	openMenuBtn.addEventListener('click', toggleMenu)
	closedMenuBtn.addEventListener('click', toggleMenu)
}