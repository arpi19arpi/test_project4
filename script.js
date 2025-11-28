// Using NASA's API
const apiURL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

async function getNASAData() {
  const response = await fetch(apiURL);
  const data = await response.json();

  const img = document.getElementById("spaceImg");
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");

  title.textContent = data.title;
  desc.textContent = data.explanation;

  // Checking if NASA APOD is actually an image 
  if (data.media_type === "image") {
    img.src = data.url;

    // --- SPRING ANIMATION ---
    const { spring } = window.popmotion;

    spring({
      from: { scale: 0.5 },
      to: { scale: 1 },
      stiffness: 120,
      damping: 10,
      mass: 0.5,
      onUpdate: latest => {
        img.style.transform = `scale(${latest.scale})`;
      }
    }).start();

  } else {
    img.src = "https://via.placeholder.com/600x400?text=Today's+APOD+is+a+Video";
  }
}

getNASAData();


// Button redirects 
document.getElementById("openNasaBtn").addEventListener("click", () => {
  window.open("https://apod.nasa.gov/apod/astropix.html", "_blank");
});
