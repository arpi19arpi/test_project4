// Using NASA's API
const apiURL = "https://api.nasa.gov/planetary/apod?api_key=8lX7oxoVj2NvzLhqOyZZmhotHUIqkmIzrzgdan0L";

async function getNASAData() {
  const response = await fetch(apiURL);
  const data = await response.json();

  document.getElementById("spaceImg").src = data.url;
  document.getElementById("title").textContent = data.title;
  document.getElementById("desc").textContent = data.explanation;
}

// load NASA data
getNASAData();

// Using spring animation here on the button
const btn = document.getElementById("openNasaBtn");

// use the global popmotion object
popmotion.spring({
  from: 0.5,
  to: 1,
  stiffness: 120,
  damping: 12
}).start(v => {
  // v is the animated value from 0.5 -> 1
  btn.style.transform = `scale(${v})`;
});

// Button to redirect to NASA website
btn.addEventListener("click", () => {
  window.open("https://apod.nasa.gov/apod/astropix.html", "_blank");
});
