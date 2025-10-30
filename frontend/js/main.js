/*/ js/main.js
const logos = [
    "assets/tunewave/logo1.svg",
    "assets/tunewave/logo2.svg",
    "assets/tunewave/logo3.svg",
    "assets/tunewave/logo4.svg"
];

let currentIndex = 0;
const brandLogo = document.getElementById("brandLogo");

setInterval(() => {
    currentIndex = (currentIndex + 1) % logos.length;
    brandLogo.src = logos[currentIndex];
}, 2000);


const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

const stars = [];
const numStars = 200;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Create stars with random positions and opacity
for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    opacity: Math.random(),
    delta: Math.random() * 0.02 + 0.01 // blinking speed
  });
}

// Draw twinkling stars
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    // Update opacity for twinkle
    star.opacity += star.delta;
    if (star.opacity > 1 || star.opacity < 0) star.delta = -star.delta;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fill();
  });

  requestAnimationFrame(drawStars);
}

drawStars();*/



// ===============================
// STARFIELD ANIMATION
// ===============================

// Wait for DOM to be ready
window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("starfield");
  if (!canvas) {
    console.error("Canvas element with id 'starfield' not found!");
    return;
  }

  const ctx = canvas.getContext("2d");
  const stars = [];
  const numStars = 200;

  // Adjust canvas to viewport size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Create stars
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random(),
      delta: Math.random() * 0.02 + 0.01, // twinkle speed
    });
  }

  // Draw stars
  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((star) => {
      star.opacity += star.delta;
      if (star.opacity > 1 || star.opacity < 0) star.delta = -star.delta;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  }

  console.log("⭐ Starfield initialized with", stars.length, "stars");
  drawStars();
});
