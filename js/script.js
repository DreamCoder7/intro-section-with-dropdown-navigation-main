const navListContainerEl = document.querySelector(".nav__cont");
const navList = document.querySelector(".nav__cont__list");
const featureOptionsEl = document.querySelector(".features__options");
const companyOptionsEl = document.querySelector(".company__options");
const arrowIconEl = document.querySelectorAll(".nav__cont__list__item--icon");
const navMenuEl = document.querySelector(".nav__menu");
const navCloseEl = document.querySelector(".nav__close");
const navCompanyItem = document.querySelector("#item__company");
const navFeatureItem = document.querySelector("#item__feature");
const overlayEl = document.querySelector(".overlay");

const dropDownMenu = function (options) {
  options.classList.toggle("hidden");
};

const iconHidden = function (item) {
  item.querySelectorAll(".nav__cont__list__item--icon").forEach((arrowIcon) => {
    arrowIcon.classList.contains("hiddenBtn")
      ? arrowIcon.classList.remove("hiddenBtn")
      : arrowIcon.classList.add("hiddenBtn");
  });
};

const toggleNav = function () {
  navList.classList.toggle("hiddenNav");
  navMenuEl.classList.toggle("hiddenBtn");
  navCloseEl.classList.toggle("displayBtn");
  overlayEl.classList.toggle("hidden");
};

navListContainerEl.addEventListener("click", function (e) {
  const item = e.target;

  const match = window.matchMedia("(max-width: 900px)");

  if (match.matches) {
    if (item.closest("#item__company")) {
      dropDownMenu(companyOptionsEl);
      iconHidden(navCompanyItem);
      navCompanyItem.classList.toggle("menuPadding");
    }

    if (item.closest("#item__feature")) {
      dropDownMenu(featureOptionsEl);
      iconHidden(navFeatureItem);
      navFeatureItem.classList.toggle("menuPadding");
    }
  } else {
    if (item.closest("#item__company")) {
      companyOptionsEl.classList.toggle("hidden");
      iconHidden(navCompanyItem);
    }

    if (item.closest("#item__feature")) {
      featureOptionsEl.classList.toggle("hidden");
      iconHidden(navFeatureItem);
    }
  }
});

navMenuEl.addEventListener("click", toggleNav);
navCloseEl.addEventListener("click", toggleNav);
