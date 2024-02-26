// // Import vendor jQuery plugin example
// import '~/app/libs/menu/dist/menu.js'
import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {

	modules: [Navigation, Pagination],
	// Optional parameters
	direction: 'vertical',
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });


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


