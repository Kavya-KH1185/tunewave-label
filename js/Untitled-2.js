
  // ================= FAQ Accordion =================
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  // ================ Animate text letter by letter =================
  function animateText(selector, className) {
    const element = document.querySelector(selector);
    if (!element) return;

    const text = element.textContent;
    element.textContent = '';

    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.animationDelay = `${index * 0.05}s`; // stagger letters
      span.classList.add(className);
      element.appendChild(span);
    });
  }

  animateText('.who-we-are', 'animate-text');
  animateText('.who-we-are-desc', 'animate-text-desc');

  // ================= Starfield Background =================
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');

  let stars = [];
  const numStars = 100;

  function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Create stars
  for (let i = 0; i < numStars; i++) {
      stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2,
          alpha: Math.random(),
          dx: (Math.random() - 0.5) * 0.2,
          dy: (Math.random() - 0.5) * 0.2
      });
  }

  // Animate stars
  function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
          ctx.fill();

          star.x += star.dx;
          star.y += star.dy;

          // Wrap around edges
          if (star.x < 0) star.x = canvas.width;
          if (star.x > canvas.width) star.x = 0;
          if (star.y < 0) star.y = canvas.height;
          if (star.y > canvas.height) star.y = 0;
      });

      requestAnimationFrame(animateStars);
  }

  animateStars();
  // Accordion
const items = document.querySelectorAll('.accordion-item');
items.forEach(item=>{
  item.addEventListener('click', ()=>{
    item.classList.toggle('active');
  });
});

