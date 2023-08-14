var swiper = new Swiper(".cp-rental__slider .swiper", {
  // speed: 1e3,
  loop: !0,
  // slidesPerView: 4,
  spaceBetween: 36,
  breakpoints: {
    1200: { slidesPerView: "auto" },
    1025: { slidesPerView: 2 },
    550: { slidesPerView: 1 },
  },
  // breakpoints: {
  //   // when window width is >= 320px
  //   300: {
  //     slidesPerView: 1.5,
  //   },
  //   // when window width is >= 480px
  //   600: {
  //     slidesPerView: 2.5,
  //   },
  //   // when window width is >= 640px
  //   900: {
  //     slidesPerView: 3.5,
  //   },
  //   1200: {
  //     slidesPerView: 4.5,
  //   },
  // },
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
    1025: { slidesPerView: 2 },
    550: { slidesPerView: 2 },
    320: { slidesPerView: 1 },
  },
});


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
