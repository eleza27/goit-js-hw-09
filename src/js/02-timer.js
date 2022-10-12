import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

const startButRef = document.querySelector('[data-start]');
console.log(startButRef);

const startTimer = () => {};

startButRef.addEventListener('click', startTimer);
