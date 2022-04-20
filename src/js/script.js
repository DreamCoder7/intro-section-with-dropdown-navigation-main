const navListContainerEl = document.querySelector(".nav__cont");
const navList = document.querySelector(".nav__cont__list");
const featureOptionsEl = document.querySelector(".features__options");
const companyOptionsEl = document.querySelector(".company__options");
const navMenuEl = document.querySelector(".nav__menu");
const navCloseEl = document.querySelector(".nav__close");

navListContainerEl.addEventListener("click", function (e) {
  const item = e.target;

  if (item.closest("#item__company"))
    companyOptionsEl.classList.toggle("hidden");

  if (item.closest("#item__feature"))
    featureOptionsEl.classList.toggle("hidden");
});

const displayNav = function () {
  navList.classList.add("hiddenNav");
  navMenuEl.classList.add("hiddenBtn");
  navCloseEl.classList.add("displayBtn");
};

const hiddeNav = function () {
  navList.classList.remove("hiddenNav");
  navMenuEl.classList.remove("hiddenBtn");
  navCloseEl.classList.remove("displayBtn");
};
navMenuEl.addEventListener("click", displayNav);
navCloseEl.addEventListener("click", hiddeNav);
