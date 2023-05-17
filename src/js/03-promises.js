import Notiflix from 'notiflix';

const formSubmit = document.querySelector('.form');
const btnSubmit = document.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

const onSubmitForm = event => {
  event.preventDefault();

  let delay = Number(event.target.delay.value);
  const step = Number(event.target.step.value);
  const amount = Number(event.target.amount.value);

  if (delay <= 0 || step <= 0 || amount <= 0) {
    Notiflix.Notify.warning('Render not possible, enter value > 0');
    return;
  }

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
  formSubmit.reset();
};

formSubmit.addEventListener('submit', onSubmitForm);
