document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    {
      img: "../assets/future.jpg",
      title: "01 — CATALOG",
      text: "Your music, your library, your way. TuneWave brings your entire catalog into one central hub — making it easy to organize, update, and keep every track accurate across platforms.",
    },
    {
      img: "../assets/distribution.jpg",
      title: "02 — DISTRIBUTION",
      text: "Take your music further. TuneWave delivers your tracks to major streaming platforms, supports flexible DSP partnerships, and automates workflows so your music reaches the world effortlessly.",
    },
    {
      img: "../assets/royalties.jpg.jpg",
      title: "03 — ROYALTIES MANAGEMENT",
      text: "Get paid accurately, every time. TuneWave automates royalty calculations and splits, ensuring contributors receive their share seamlessly and reducing errors.",
      extras: ["Blessy — 50%", "Sharon — 60%"]
    },
    {
      img: "../assets/analytics.jpg.png",
      title: "04 — REPORTS & ANALYTICS",
      text: "Know your music inside out. TuneWave gives you detailed performance reports, royalty tracking, and trend insights — helping you make informed decisions and maximize revenue in real time.",
      extras: ["🎯 Data Accuracy 70%", "💰 Revenue Focus 60%", "🌍 Audience Reach 80%"]
    },
    {
      img: "../assets/support.jpg.webp",
      title: "05 — CLIENT GROWTH & SUPPORT",
      text: "We’re here for you. TuneWave offers multilingual support, quick responses, and a dedicated account manager to guide your growth and ensure long-term success."
    }
  ];

  const imageEl = document.getElementById("empower-image");
  const titleEl = document.getElementById("empower-title");
  const textEl = document.getElementById("empower-text");
  const extraBox = document.getElementById("extra-box");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  let current = 0;

  function showSlide(index) {
    const slide = slides[index];
    imageEl.style.opacity = 0;
    titleEl.style.opacity = 0;
    textEl.style.opacity = 0;

    setTimeout(() => {
      imageEl.src = slide.img;
      titleEl.textContent = slide.title;
      textEl.textContent = slide.text;

      // Extras (like Blessy / Sharon)
      extraBox.innerHTML = "";
      if (slide.extras) {
        extraBox.style.display = "block";
        slide.extras.forEach(item => {
          const div = document.createElement("div");
          div.textContent = item;
          extraBox.appendChild(div);
        });
      } else {
        extraBox.style.display = "none";
      }

      imageEl.style.opacity = 1;
      titleEl.style.opacity = 1;
      textEl.style.opacity = 1;
    }, 300);
  }

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

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 6000);

  showSlide(current);
});
