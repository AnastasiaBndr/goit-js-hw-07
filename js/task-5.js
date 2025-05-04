function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const color = document.querySelector('.color');
const body = document.querySelector('body');
const handleChangeColor = e => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}

button.addEventListener("click", handleChangeColor);
