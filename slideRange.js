const slideValue = document.querySelector(".sliderValue span");
const inputSlide = document.querySelector(".range .field input");
inputSlide.oninput = function () {
  const value = inputSlide.value;
  slideValue.textContent = value;
};
