// Simple fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-content");
  heroText.style.opacity = 0;
  heroText.style.transform = "translateY(30px)";
  setTimeout(() => {
    heroText.style.transition = "all 1s ease";
    heroText.style.opacity = 1;
    heroText.style.transform = "translateY(0)";
  }, 300);
});


const images = document.querySelectorAll('.mcn-image-carousel .carousel-img');
let currentIndex = 0;

function showNextImage() {
 /* images[currentIndex].classList.remove('active');*/
  currentIndex = (currentIndex + 1) % images.length;
 /* images[currentIndex].classList.add('active');*/
}

// Auto rotate every 3 seconds
setInterval(showNextImage, 3000);



