// Using NASA's API
const apiURL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

async function getNASAData() {
  const response = await fetch(apiURL);
  const data = await response.json();

  document.getElementById("spaceImg").src = data.url;
  document.getElementById("title").textContent = data.title;
  document.getElementById("desc").textContent = data.explanation;

  // Using spring animation here
  const { spring } = window.popmotion;

  spring({
    from: { scale: 0.5 },
    to: { scale: 1 },
    stiffness: 120,
    damping: 10,
    mass: 0.5,
    onUpdate: latest => {
      document.getElementById("spaceImg").style.transform =
        `scale(${latest.scale})`;
    }
  }).start();
}

getNASAData();


// Button redirects 
document.getElementById("openNasaBtn").addEventListener("click", () => {
  window.open("https://apod.nasa.gov/apod/astropix.html", "_blank");
});
