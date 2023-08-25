var swiper = new Swiper(".cp-rental__slider .swiper", {
  // speed: 1e3,
  loop: !0,
  // slidesPerView: 4,
  spaceBetween: 36,
  breakpoints: {
    1200: { slidesPerView: "auto" },
    900: { slidesPerView: 3 },
    576: { slidesPerView: 2 },
  },
});

new Swiper(".cp-customers .swiper", {
  spaceBetween: 15,
  loop: "true",
  navigation: {
    nextEl: ".cp-customers .swiper-button-next",
    prevEl: ".cp-customers .swiper-button-prev",
  },
  breakpoints: {
    1200: { slidesPerView: "auto" },
    1100: { slidesPerView: 3 },
    725: { slidesPerView: 2 },
    320: { slidesPerView: 1 },
  },
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const burgerIcon = document.getElementById("burger-icon");
const menuList = document.querySelector(".menu-list");

burgerIcon.addEventListener("click", () => {
  menuList.classList.toggle("show-menu");
});
