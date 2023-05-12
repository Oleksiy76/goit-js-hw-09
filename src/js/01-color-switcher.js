const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

startBtn.addEventListener('click', onChangeColorBody);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColorBody() {
  timerId = setInterval(() => {
    const randomcolor = getRandomHexColor();
    document.body.style.backgroundColor = randomcolor;
  }, 1000);

  startBtn.disabled = true;
}

stopBtn.addEventListener('click', stopChangeColor);

function stopChangeColor() {
  clearInterval(timerId);
  
  startBtn.disabled = false;
}
