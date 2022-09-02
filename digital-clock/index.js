const HoursEl = document.getElementById("Hours");
const MinutesEl = document.getElementById("Minutes");
const SecondsEl = document.getElementById("Seconds");

function updateClock() {
  let H = new Date().getHours();
  let M = new Date().getMinutes();
  let S = new Date().getSeconds();

  if (H > 12) {
    H = H - 12;
    ampm = "PM";
  }

  H = H < 10 ? "0" + H : H;
  M = M < 10 ? "0" + M : M;
  S = S < 10 ? "0" + S : S;

  HoursEl.innerText = H;
  MinutesEl.innerText = M;
  SecondsEl.innerText = S;
  ampmEl, (innerText = ampm);
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
