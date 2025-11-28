// Using NASA's API
const apiURL = "https://api.nasa.gov/planetary/apod?api_key=8lX7oxoVj2NvzLhqOyZZmhotHUIqkmIzrzgdan0L";

// Fetch NASA Image of the Day
async function getNASAData() {
  const response = await fetch(apiURL);
  const data = await response.json();

  document.getElementById("spaceImg").src = data.url;
  document.getElementById("title").textContent = data.title;
  document.getElementById("desc").textContent = data.explanation;
}

// Calling the function 
getNASAData();

//Popmotion spring animation on the Button 
const btn = document.getElementById("openNasaBtn");
const { spring } = window.popmotion;

// Using spring animation here on the button
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

// Button Click will redirect to NASA's webpage
btn.addEventListener("click", () => {
  window.open("https://apod.nasa.gov/apod/astropix.html", "_blank");
});
