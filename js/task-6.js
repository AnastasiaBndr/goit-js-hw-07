function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount;i++) {
    const box=document.createElement('div');
    width += 10;
    height += 10;
    box.style.width= width+"px";
    box.style.height = height+"px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
    }
}

const handleCreate = e => {
  boxes.innerHTML = "";
  const amount = Number(document.querySelector('input').value);
  if (amount < 0 || amount > 100) return;
  createBoxes(amount);

}

const handleDestroy = e => {
  e.preventDefault();
  boxes.innerHTML = "";
}

create.addEventListener("click", handleCreate);
destroy.addEventListener("click", handleDestroy);
