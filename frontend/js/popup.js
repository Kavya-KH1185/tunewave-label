document.addEventListener("DOMContentLoaded", () => {
  // Get popup elements
  const demoOverlay = document.getElementById("demoOverlay");
  const closeDemo = document.getElementById("closeDemo");

  if (!demoOverlay) return; // Exit if no popup exists on the page

  // Function to open popup
  const openPopup = () => {
    demoOverlay.style.display = "flex";
  };

  // Function to close popup
  const closePopup = () => {
    demoOverlay.style.display = "none";
  };

  // Header button
  const openDemoBtns = document.querySelectorAll("#openDemo, .footer-more-info-btn, .more-info-btn, .outline-button");
  openDemoBtns.forEach(btn => btn.addEventListener("click", openPopup));

  // Close button
  if (closeDemo) closeDemo.addEventListener("click", closePopup);

  // Close when clicking outside popup
  window.addEventListener("click", (e) => {
    if (e.target === demoOverlay) closePopup();
  });
});
