import { addHorizontalScrollControls } from "./utils";

const container = document.querySelector(".offers__middle") as HTMLDivElement;
const [leftButton, rightButton] = Array.from(
  document.getElementsByClassName("offers__bottom__controls__btn")
) as HTMLButtonElement[];

const container2 = document.querySelector(".products__content__middle") as HTMLDivElement;
const [leftButton2, rightButton2] = Array.from(
  document.getElementsByClassName("products__content__bottom__controls__btn")
) as HTMLButtonElement[];

const container3 = document.querySelector(".awards__container__list") as HTMLDivElement;
const [leftButton3, rightButton3] = Array.from(
  document.getElementsByClassName("awards__container__button-group__button")
) as HTMLButtonElement[];

console.log();

addHorizontalScrollControls(leftButton, rightButton, container);
addHorizontalScrollControls(leftButton2, rightButton2, container2);
addHorizontalScrollControls(leftButton3, rightButton3, container3);
