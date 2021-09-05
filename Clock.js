const clockContainer = document.querySelector(".clock-set"),
  myClock = clockContainer.querySelector(".clock");
function getDate() {
  const today = new Date();

  const hrs = today.getHours();
  const mins = today.getMinutes();
  const secs = today.getSeconds();

  myClock.innerText = `${hrs < 10 ? `0${hrs}` : hrs}:${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
}

function init() {
  getDate();
  setInterval(getDate, 1000);
}

init();
