let timer;
let timeInSeconds = 0;

function startTimer() {
  if (!timer && timeInSeconds > 0) {
    timer = setInterval(updateTime, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  timeInSeconds = 0;
  updateTimeDisplay();
}

function setTimer(seconds) {
  timeInSeconds = seconds;
  updateTimeDisplay();
}

function customTimer() {
  const hours = parseInt(document.getElementById('hours').value) || 0;
  const minutes = parseInt(document.getElementById('minutes').value) || 0;
  const seconds = parseInt(document.getElementById('seconds').value) || 0;
  setTimer(hours * 3600 + minutes * 60 + seconds);
}

function updateTime() {
  if (timeInSeconds > 0) {
    timeInSeconds--;
    updateTimeDisplay();
  } else {
    stopTimer();
  }
}

function updateTimeDisplay() {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  document.getElementById('time-display').innerText = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(num) {
  return num < 10 ? `0${num}` : num;
}
