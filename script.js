// Using NASA's API
const apiURL = "https://api.nasa.gov/planetary/apod?api_key=8lX7oxoVj2NvzLhqOyZZmhotHUIqkmIzrzgdan0L";

async function getNASAData() {
  const response = await fetch(apiURL);
  const data = await response.json();

  document.getElementById("spaceImg").src = data.url;
  document.getElementById("title").textContent = data.title;
  document.getElementById("desc").textContent = data.explanation;
}

// Wait until the DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  // Load NASA data
  getNASAData();

  // Button element
  const btn = document.getElementById("openNasaBtn");

  // Popmotion spring animation
  const { spring } = window.popmotion;

  spring({
    from: { scale: 0.5 },
    to: { scale: 1 },
    stiffness: 150,
    damping: 12,
    mass: 0.5,
    onUpdate: latest => {
      btn.style.transform = `scale(${latest.scale})`;
    }
  }).start();

  // Redirect on click
  btn.addEventListener("click", () => {
    window.open("https://apod.nasa.gov/apod/astropix.html", "_blank");
  });
});
