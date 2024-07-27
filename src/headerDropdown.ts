import { actOnOutsideClick } from "./utils";

// Variables

let currentlyActiveButtonIndex = -1;

// Elements

const headerButtons = Array.from(
  document.getElementsByClassName("header__content__button-group1__btn-wrapper__button")
) as HTMLButtonElement[];

const headerButtonLines = Array.from(
  document.getElementsByClassName("header__content__button-group1__btn-wrapper__line")
) as HTMLDivElement[];

const dropdownNavs = Array.from(
  document.getElementsByClassName("header__content__button-group1__btn-wrapper__nav")
) as HTMLElement[];

const headerButtonGroup = document.querySelector(".header__content__button-group1") as HTMLDivElement;

const dropDown = document.querySelector(".header__dropdown") as HTMLDivElement;

// Actions

const showNav = (index: number) => {
  dropdownNavs[index].classList.add("header__content__button-group1__btn-wrapper__nav-shown");
};

const hideNavs = (...indices: number[]) => {
  indices.forEach((index) => {
    dropdownNavs[index].classList.remove("header__content__button-group1__btn-wrapper__nav-shown");
  });
};

const addBottomLine = (index: number) => {
  headerButtonLines[index].classList.add("header__content__button-group1__btn-wrapper__line-active");
};

const removeBottomLines = (...indices: number[]) => {
  indices.forEach((index) =>
    headerButtonLines[index].classList.remove("header__content__button-group1__btn-wrapper__line-active")
  );
};

const showDropDown = () => {
  dropDown.classList.add("header__dropdown-shown");
};

const hideDropDown = () => {
  currentlyActiveButtonIndex = -1;
  dropDown.classList.remove("header__dropdown-shown");
  hideNavs(0, 1, 2);
  removeBottomLines(0, 1, 2);
};

const handleBottomLines = (activeButton: number) => {
  switch (activeButton) {
    case 0:
      addBottomLine(0);
      removeBottomLines(1, 2);
      break;
    case 1:
      addBottomLine(1);
      removeBottomLines(0, 2);
      break;
    case 2:
      addBottomLine(2);
      removeBottomLines(0, 1);
      break;
  }
};

const handleNavs = (activeButton: number) => {
  switch (activeButton) {
    case 0:
      showNav(0);
      hideNavs(1, 2);
      break;
    case 1:
      showNav(1);
      hideNavs(0, 2);
      break;
    case 2:
      showNav(2);
      hideNavs(0, 1);
      break;
  }
};

// Listeners

headerButtons.forEach((button, i) => {
  button.addEventListener("click", (e) => {
    handleBottomLines(i);
    handleNavs(i);
    if (i !== currentlyActiveButtonIndex) {
      showDropDown();
      currentlyActiveButtonIndex = i;
    } else hideDropDown();
  });
});

actOnOutsideClick(headerButtonGroup, () => {
  hideDropDown();
});
