// const swiper = new Swiper('.advantages__slider', {
//   loop: true,
//   slidesPerView: 1,
//   slidesPerGroup: 1,
//   spaceBetween: 10,
//   breakpoints: {
//     600: {
//       loop: false,
//       slidesPerView: 4,
//       slidesPerGroup: 4,
//       spaceBetween: 50,
//     }
//   }
// });

const slider = document.querySelector('.advantages__slider');

let mySlider;

function mobileSlider() {
  if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        481: {
          slidesPerView: 2,
          spaceBetween: 10,
        }
      },
      navigation: {
        nextEl: ".advantages__slider-btn_next",
        prevEl: ".advantages__slider-btn_prev",
      },
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 768) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  }
};

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});