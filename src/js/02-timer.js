import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.getElementById('datetime-picker');
console.log(input);
const startBtn = document.querySelector('button[data-start]');
console.log(startBtn);
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
      return;
    } else {
      startBtn.disabled = false;
    }
    console.log(selectedDates[0]);
  },
};

flatpickr(input, options);

let timeForm = 0;

const timer = {
  start() {
    const startTime = new Date(input.value);

    setInterval(() => {
      const currentTime = Date.now();
      const ms = startTime - currentTime;

      timeForm = convertMs(ms);

      if (ms <= 0) {
        return clearInterval(timer);
      }

      updateTimerface();
    }, 1000);
  },
};

startBtn.addEventListener('click', () => {
  timer.start();
  startBtn.disabled = true;
  input.disabled = true;
});

function updateTimerface() {
  days.textContent = timeForm.days;
  hours.textContent = timeForm.hours;
  minutes.textContent = timeForm.minutes;
  seconds.textContent = timeForm.seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
