
const openDemo = document.getElementById("openDemo");
const closeDemo = document.getElementById("closeDemo");
const demoOverlay = document.getElementById("demoOverlay");

openDemo.onclick = () => demoOverlay.style.display = "flex";
closeDemo.onclick = () => demoOverlay.style.display = "none";
window.onclick = (e) => {
  if (e.target === demoOverlay) demoOverlay.style.display = "none";
};

