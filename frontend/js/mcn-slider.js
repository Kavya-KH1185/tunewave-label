document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    {
      img: "../assets/Container1.jpg",
      heading: "MCN SERVICE",
      desc: "Empower your artists and their channels with TuneWave’s Multi-Channel Network services. Designed to help creators fully unlock YouTube’s potential, we streamline monetization, boost channel performance, and maximize audience engagement."
    },
    {
      img: "../assets/customer.png",
      heading: "CUSTOMER SUPPORT",
      desc: "Focus on growing your label, and let TuneWave handle the technical side. With multilingual support, fast response times, and a dedicated account manager, we keep your operations running smoothly-no matter where you are. Enterprise clients enjoy priority support within one business day."
    },
    {
      img: "../assets/innovation.jpg",
      heading: "CONTINUOUS INNOVATION FOR YOUR SUCCESS",
      desc: "At TuneWave, we're always evolving to meet the needs of modern record labels. We know the music industry moves fast, so we provide cutting-edge tools to manage your catalog, distribute music, and maximize royalties."
    }
  ];

  const imageEl = document.getElementById("mcn-image");
  const headingEl = document.getElementById("mcn-title");
  const descEl = document.getElementById("mcn-text");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  if (!imageEl || !headingEl || !descEl) {
    console.error("MCN elements not found in DOM");
    return;
  }

  let current = 0;

  function showSlide(index) {
    const slide = slides[index];
    imageEl.style.opacity = 0;
    headingEl.style.opacity = 0;
    descEl.style.opacity = 0;

    setTimeout(() => {
      imageEl.src = slide.img;
      headingEl.textContent = slide.heading;
      descEl.textContent = slide.desc;
      imageEl.style.opacity = 1;
      headingEl.style.opacity = 1;
      descEl.style.opacity = 1;
    }, 400);
  }

  // Auto-slide
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);

  // Manual controls
  if (leftArrow && rightArrow) {
    leftArrow.addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });

    rightArrow.addEventListener("click", () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });
  }

  showSlide(current);
});
