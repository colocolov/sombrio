// https://swiperjs.com/swiper-api

import _vars from "../_vars.js";
import Swiper, { Navigation, Pagination, Autoplay, EffectFade, Parallax } from "swiper";

Swiper.use([Pagination, Navigation, EffectFade, Autoplay]);

// устанавливаем свой размер отступов через глобальную переменную --gap
const gap = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--gap"));
// console.log(gap);
const bulletTexts = ["РУЛОННЫЕ ШТОРЫ", "ВЕРТИКАЛЬНЫЕ ЖАЛЮЗИ", "ДЕНЬ-НОЧЬ ШТОРЫ", "МАНСАРДНЫЕ ШТОРЫ", "ПЛИССЕ ШТОРЫ", "МАСКИТНАЯ СЕТКА", "ДЕРЕВЯННЫЕ ГОРИЗОНТАЛЬНЫЕ ЖАЛЮЗИ"]; // Массив с уникальными текстами

if (_vars.stockSliderEl) {

  // слайдер на главной
  new Swiper(_vars.stockSliderEl, {
    loop: true,
    // autoplay: {
    //   //пауза между прокруткой
    //   delay: 3000,
    //   //закончить на последнем слайде
    //   // stopOnLastSlide: false,
    //   //отключить после ручного переключения
    //   // disableOnInteraction: false,
    // },
    //скорость переключения слайдов
    speed: 800,
    // навигация по стрелкам
    navigation: {
      nextEl: ".stock--next",
      prevEl: ".stock--prev",
      // disabledClass: "stories-button__unactive",
      clickable: true,
      // для ппрвильного направления
    },
    // буллеты
    pagination: {
      el: ".stock__bullet",
      type: "bullets",
      clickable: true,
      // dynamicBullets: true,
      renderBullet: function (index, className) {
        // Возвращаем span с текстом из массива на основе индекса
        return '<span class="' + className + '">' + bulletTexts[index] + '</span>';
      }  
    },
    //эффект перехода слайда (только если показ по 1-му слайду)
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    // показ кол-ва слайдов (работает, когда откл effect: "fade")
    // slidesPerView: 1.2,
    // расстояние между слайдами
    // spaceBetween: gap, // свой размер
    // spaceBetween: 10,
    // кол-во пролистываемых слайдов
    // slidesPerGroup: 1,
    // стартовый слайд
    // initialSlide: 3,
    // активный слайд по центру
    // centeredSlides: true,
    
    // адаптив
    // breakpoints: {
      // when window width is >= 320px
      // 480: {
        // slidesPerView: 2,
        // spaceBetween: 20,
      // },
      slideToClickedSlide: false,
    },

    //отложенная загрузка:
    //отключаем презагрузку картинок
    // preloadImages: false,
    // lazy: {
    //   loadOnTransitionStart: false,
    //   loadPrevNext: false,
    // },
    // переключение при клике на слайд
    // отключение прокрутки при наведении мыши
    // on: {
    //   init() {
    //     this.el.addEventListener("mouseenter", () => {
    //       this.autoplay.stop();
    //     });

    //     this.el.addEventListener("mouseleave", () => {
    //       this.autoplay.start();
    //     });
    //   },
    // },
    //
  // }
  );
  //----- END

  

  const nestedSliders = document.querySelectorAll('.stock__nested-slider')
  nestedSliders.forEach((slider) => {
  new Swiper(slider, {
    // autoplay: {
    //   delay: 3000,
    // },
    speed: 800,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    grabCursor: true,
    pagination: {
      el: '.stock__nested-bullet',
      clickable: true,
    },
    nested: true,
  });
});



}