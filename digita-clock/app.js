//digital Clock 
function digitalClock() {
  const timeFormate = document.getElementById("timeFormate");

  let date = new Date();
  let hours = date.getHours();

  if (hours > 12) {
    timeFormate.innerHTML = "pm";
    hours = hours - 12;
  } else if (hours == 0) {
    hours = 12;
  } else {
    timeFormate.innerHTML = "am";
  }

  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("time").innerHTML =
    hours + ":" + minutes + ":" + seconds;
  setInterval(digitalClock, 1000);
}

digitalClock();
