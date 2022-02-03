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
});