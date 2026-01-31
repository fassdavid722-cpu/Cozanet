let points = 0;
let mining = false;
let interval;

const pointsEl = document.getElementById("points");
const startBtn = document.getElementById("startBtn");

// 10,000 points in 10 days = ~41.67 points/hour
const POINTS_PER_SECOND = 41.67 / 3600;

startBtn.addEventListener("click", () => {
  if (mining) return;

  mining = true;
  startBtn.innerText = "Mining…";

  interval = setInterval(() => {
    points += POINTS_PER_SECOND;
    pointsEl.innerText = points.toFixed(6);
  }, 1000);
});
