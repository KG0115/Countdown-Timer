const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

const targetDate = new Date('2023-11-26 00:00:00').getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}
let countdownInterval;

startButton.addEventListener('click', () => {
    countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});

stopButton.addEventListener('click', () => {
    clearInterval(countdownInterval);
});
