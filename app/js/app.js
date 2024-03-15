document.addEventListener("DOMContentLoaded", () => {
  // Custom JS
  // document.querySelectorAll("a.header__link").forEach((header__link) => {
  //   header__link.addEventListener("click", function (e) {
  //     e.preventDefault(); // Предотвращаем действие по умолчанию (переход по ссылке)
  //     scrollToSection(e);
  //   });
  // });
  burgerMenu();
  toggleProgramList();
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

function toggleProgramList() {
  const toggleButton = document.querySelector(".program__button");
  const programList = document.querySelector(".program__item-text");

  const toggleList = () => {
    const isProgramListOpen =
      toggleButton.getAttribute("aria-expended") === "true" || false;
    toggleButton.setAttribute("aria-expended", !isProgramListOpen);
    programList.classList.toggle("isOpenList");
    if (isProgramListOpen === true) {
      toggleButton.textContent = "Read More";
    } else {
      toggleButton.textContent = "Less";
    }
  };

  toggleButton.addEventListener("click", toggleList);
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
