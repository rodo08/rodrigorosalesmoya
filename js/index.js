"use strict";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    hideLoader();
  }, 2000);
});

const hideLoader = () => {
  const loaderContainer = document.querySelector(".showbox");
  loaderContainer.style.transition = "opacity 1s";
  loaderContainer.style.opacity = "0";
  setTimeout(() => {
    loaderContainer.style.display = "none";
  }, 1000);

  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".header");

  btnNavEl.addEventListener("click", () => {
    headerEl.classList.toggle("nav-open");
  });

  const yearEL = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearEL.textContent = currentYear;
};
