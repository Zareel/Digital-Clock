let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let section = document.querySelector("#section");

let displayTime = () => {
  let dateTime = new Date();
  let hrs = dateTime.getHours();
  let mins = dateTime.getMinutes();
  let secs = dateTime.getSeconds();

  if (hrs >= 12) {
    section.innerText = "PM";
  } else {
    section.innerText = "AM";
  }

  if (secs < 10) {
    secs = "0" + secs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }

  if (hrs > 12) {
    hrs = hrs - 12;
  }

  hours.innerText = hrs;
  minutes.innerText = mins;
  seconds.innerText = secs;
};
setInterval(displayTime, 10);
