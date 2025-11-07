const openDemo = document.getElementById("openDemo");
const closeDemo = document.getElementById("closeDemo");
const demoOverlay = document.getElementById("demoOverlay");

// Footer button (safe check)
const footerDemoBtn = document.querySelector(".footer-more-info-btn");

// Open popup function
function openPopup() {
  demoOverlay.style.display = "flex";
}

// Attach click events
if (openDemo) openDemo.onclick = openPopup;
if (footerDemoBtn) footerDemoBtn.onclick = openPopup;

// Close popup
if (closeDemo) closeDemo.onclick = () => demoOverlay.style.display = "none";

// Close popup when clicking outside
window.onclick = (e) => {
  if (e.target === demoOverlay) demoOverlay.style.display = "none";
};
