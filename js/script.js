"use strict"

window.addEventListener("DOMContentLoaded", () => {
   //Меню бургер
   const iconMenu = document.querySelector('.menu__icon');
   const menuBody = document.querySelector('.menu__body');
   if (iconMenu) {
      iconMenu.addEventListener("click", function (e) {
         document.body.classList.toggle('_lock');
         iconMenu.classList.toggle('_active');
         menuBody.classList.toggle('_active');
      });

      document.querySelectorAll('.menu__link').forEach((item) =>
         item.addEventListener("click", () => {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
         })
      );
      document.querySelector('.header__btn').addEventListener("click", function (e) {
         document.body.classList.remove('_lock');
         iconMenu.classList.remove('_active');
         menuBody.classList.remove('_active');
      });
   }

   // Слайдер
   const slider_1 = new Swiper('.slider-testimonail', {
      // Optional parameters

      // Navigation arrows
      navigation: {
         nextEl: '.slider-testimonail__button_next',
         prevEl: '.slider-testimonail__button_prev',
      },
   });

   const slider_2 = new Swiper('.slider-blog', {
      // Optional parameters

      // Navigation arrows
      navigation: {
         nextEl: '.slider-blog__button_next',
         prevEl: '.slider-blog__button_prev',
      },
      scrollbar: {
         el: '.slider-blog__scrollbar',
         draggable: true,
      },
   });

   // let position = 0;
   // const slidesToShow = 1;
   // const slidesToScroll = 1;
   // const container = document.querySelector(".slider-testimonail__container");
   // const track = document.querySelector(".slider-testimonail__track");
   // const btnPrev = document.querySelector(".slider-testimonail__button_prev");
   // const btnNext = document.querySelector(".slider-testimonail__button_next");
   // const items = document.querySelectorAll(".slider-testimonail__item");
   // let itemsCount = items.length;
   // let itemWidth = container.clientWidth / slidesToShow;
   // let movePosition = slidesToScroll * itemWidth;

   // [`load`, `resize`].forEach(it => {
   //    window.addEventListener(it, () => {
   //       position = 0;
   //       itemsCount = items.length;
   //       itemWidth = container.clientWidth / slidesToShow;
   //       movePosition = slidesToScroll * itemWidth;

   //       items.forEach((item) => {
   //          item.style.minWidth = `${itemWidth}px`;
   //       });
   //       setPosition();
   //       btnPrev.classList.remove('_disabled');
   //       btnNext.classList.remove('_disabled');
   //       checkBtns();
   //    });
   // });

   // btnPrev.addEventListener("click", () => {
   //    const itemsLeft = Math.abs(position) / itemWidth;
   //    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

   //    btnPrev.classList.remove('_disabled');
   //    btnNext.classList.remove('_disabled');
   //    setPosition();
   //    checkBtns();
   // });

   // btnNext.addEventListener("click", () => {
   //    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

   //    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

   //    btnPrev.classList.remove('_disabled');
   //    btnNext.classList.remove('_disabled');
   //    setPosition();
   //    checkBtns();
   // });

   // const setPosition = () => {
   //    track.style.transform = `translateX(${position}px)`;
   // };

   // const checkBtns = () => {
   //    if (position === 0) {
   //       btnPrev.classList.add('_disabled');
   //       btnPrev.disabled;
   //    }
   //    if (position <= -(itemsCount - slidesToShow) * itemWidth) {
   //       btnNext.classList.add('_disabled');
   //       btnNext.disabled;
   //    }
   //    // btnPrev.disabled = position === 0;
   //    // btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
   // };

   // checkBtns();

   // Аккордеон
   document.querySelectorAll('.item-accordion-footer__trigger').forEach((item) =>
      item.addEventListener("click", () => {
         const parent = item.parentNode;

         if (parent.classList.contains('_active')) {
            parent.classList.remove('_active');
         } else {
            // document.querySelectorAll('.item-accordion-footer')
            //    .forEach((child) => child.classList.remove('_active'));
            parent.classList.add('_active');
         }
      })
   );
});