document.addEventListener("DOMContentLoaded", () => {
  // Custom JS
  // document.querySelectorAll("a.header__link").forEach((header__link) => {
  //   header__link.addEventListener("click", function (e) {
  //     e.preventDefault(); // Предотвращаем действие по умолчанию (переход по ссылке)
  //     scrollToSection(e);
  //   });
  // });
  burgerMenu();
});

function burgerMenu() {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closedMenuBtn = document.querySelector(".js-close-menu");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expended") === "true" || false;
    openMenuBtn.setAttribute("aria-expended", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closedMenuBtn.addEventListener("click", toggleMenu);
}

// function scrollToSection(e) {
//   let href = e.target.getAttribute("href").substring(1);

//   const scrollTarget = document.getElementById(href);

//   const topOffSet = 0;

//   const elementPosition = scrollTarget.getBoundingClientRect().top;

//   const offSetPosition = elementPosition - topOffSet;

//   window.scrollBy({
//     top: offSetPosition,
//     behavior: "smooth",
//   });
// }
