const canvas = document.getElementById("ribbonCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = 400;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function drawRibbon() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const startX = 100;
  const endX = canvas.width - 100;
  const centerX = canvas.width / 2;
  const midY = canvas.height / 2;
  const gap = 50;

  for (let i = -2; i <= 2; i++) {
    const yOffset = i * gap;

    // Gradient along each ribbon
    const gradient = ctx.createLinearGradient(startX, 0, endX, 0);
    gradient.addColorStop(0, "rgba(0,150,255,0.1)");
    gradient.addColorStop(0.45, "rgba(0,200,255,0.8)");
    gradient.addColorStop(0.5, "rgba(0,255,255,1)");
    gradient.addColorStop(0.55, "rgba(0,200,255,0.8)");
    gradient.addColorStop(1, "rgba(0,150,255,0.1)");

    ctx.beginPath();
    ctx.moveTo(startX, midY + yOffset);
    ctx.bezierCurveTo(
      centerX * 0.4, midY + yOffset - 80, // left curve
      centerX * 1.6, midY + yOffset + 80, // right curve
      endX, midY + yOffset
    );

    ctx.strokeStyle = gradient;
    ctx.lineWidth = i === 0 ? 3 : 2;
    ctx.shadowBlur = i === 0 ? 25 : 15;
    ctx.shadowColor = "#00eaff";
    ctx.stroke();
  }

  // Glowing center circle
  ctx.beginPath();
  ctx.arc(centerX, midY, 25, 0, Math.PI * 2);
  const coreGradient = ctx.createRadialGradient(centerX, midY, 0, centerX, midY, 60);
  coreGradient.addColorStop(0, "rgba(0,255,255,0.8)");
  coreGradient.addColorStop(1, "rgba(0,255,255,0)");
  ctx.fillStyle = coreGradient;
  ctx.fill();

  // Random glowing dots
  for (let i = 0; i < 40; i++) {
    const x = Math.random() * canvas.width;
    const y = midY + (Math.random() - 0.5) * 200;
    ctx.beginPath();
    ctx.arc(x, y, 1.3, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#00eaff";
    ctx.fill();
  }
}

drawRibbon();
