const startButRef = document.querySelector('[data-start]');
const stopButRef = document.querySelector('[data-stop]');
const bodyRef = document.body;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const onInterval = () => {
  bodyRef.style.background = getRandomHexColor();
};

onInterval();
let id;
const onStart = () => {
  id = setInterval(onInterval, 1000);
  startButRef.disabled = true;
  stopButRef.disabled = false;
};

startButRef.addEventListener('click', onStart);

const stopStart = () => {
  clearInterval(id);
  stopButRef.disabled = true;
  startButRef.disabled = false;
};
stopButRef.addEventListener('click', stopStart);
