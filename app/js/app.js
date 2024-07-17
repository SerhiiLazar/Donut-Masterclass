document.addEventListener("DOMContentLoaded", () => {
  // Custom JS
  initializeSlider();
  createRatingStars();
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

//Slider reviews block
function initializeSlider() {
  const slider = document.querySelector(".reviews__wrapper");
  const slides = document.querySelectorAll(".reviews__slides article");
  const nextButtons = document.querySelector(".reviews__next");
  const prevButtons = document.querySelector(".reviews__prev");
  const slideCounter = document.querySelector(".reviews__slide-counter");
  const leftSlides = document.querySelector(".left-slides");
  const rightSlides = document.querySelector(".right-slides");

  let slideIndex = 0;
  let intervalId = null;
  let startX = 0;
  let endX = 0;

  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    let prevSlide = slides[slides.length - 1];
    let nextSlide = slides[1];
    leftSlides.innerHTML = prevSlide.querySelector(
      ".reviews__user-info"
    ).outerHTML;
    rightSlides.innerHTML = nextSlide.querySelector(
      ".reviews__user-info"
    ).outerHTML;
  }

  function updateSlideCounter() {
    const currentSlideNumber = slideIndex + 1;
    const totalSlides = slides.length;
    slideCounter.textContent = currentSlideNumber + "/" + totalSlides;
  }

  function showSlide(index) {
    if (index >= slides.length) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
      slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

    const prevSlide =
      slides[slideIndex === 0 ? slides.length - 1 : slideIndex - 1];
    const nextSlide =
      slides[slideIndex === slides.length - 1 ? 0 : slideIndex + 1];

    leftSlides.innerHTML = prevSlide.querySelector(
      ".reviews__user-info"
    ).outerHTML;
    rightSlides.innerHTML = nextSlide.querySelector(
      ".reviews__user-info"
    ).outerHTML;

    updateSlideCounter();
  }

  function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
  }

  function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
  }

  nextButtons.addEventListener("click", nextSlide);
  prevButtons.addEventListener("click", prevSlide);

  slides.forEach(slide => {
    slide.addEventListener("touchstart", touchStart, { passive: true });
    slide.addEventListener("touchmove", touchMove, { passive: true });
    slide.addEventListener("touchend", touchEnd, { passive: true });
  });

  function touchStart(event) {
    startX = event.touches[0].clientX;
  }

  function touchMove(event) {
    endX = event.touches[0].clientX;
  }

  function touchEnd() {
    const deltaX = startX - endX;
    const threshold = 50;

    if (deltaX > threshold) {
      nextSlide();
    } else if (deltaX < -threshold) {
      prevSlide();
    }
  }

  document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowLeft") {
      prevSlide();
    } else if (event.code === "ArrowRight") {
      nextSlide();
    }
  });

  updateSlideCounter();
}

//Rating stars reviews block

function createRatingStars() {
  const ratings = document.querySelectorAll(".rating");

  ratings.forEach(function (rating) {
    const ratingValue = parseFloat(rating.getAttribute("data-rating"));
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("img");
      star.classList.add("star");
      if (i <= ratingValue) {
        star.classList.add("filled");
        star.src = "./images/dist/Users/star_color.png";
        star.alt = "star";
        star.width = "24";
        star.height = "24";
      } else {
        star.src = "./images/dist/Users/star_transparent.png";
        star.alt = "star";
        star.width = "24";
        star.height = "24";
      }
      stars.push(star);
    }

    rating.innerHTML = "";
    stars.forEach(function (star) {
      rating.appendChild(star);
    });
  });
}
