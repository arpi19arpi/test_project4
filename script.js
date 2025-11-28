// NASA API 
const apiURL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

async function getNASAData() {
  const response = await fetch(apiURL);
  const data = await response.json();

  document.getElementById("spaceImg").src = data.url;
  document.getElementById("title").textContent = data.title;
  document.getElementById("desc").textContent = data.explanation;
}

getNASAData();

// animation
const { animate } = window.popmotion;

document.getElementById("animateBtn").addEventListener("click", () => {
  animate({
    from: { scale: 1 },
    to: { scale: 1.2 },
    duration: 800,
    repeat: 1,
    yoyo: true,
    onUpdate: latest => {
      document.getElementById("spaceImg").style.transform = 
        `scale(${latest.scale})`;
    }
  });
});
