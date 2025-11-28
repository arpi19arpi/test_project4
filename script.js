// NASA API
const apiURL = "https://api.nasa.gov/planetary/apod?api_key=8lX7oxoVj2NvzLhqOyZZmhotHUIqkmIzrzgdan0L";

// ELEMENTS
const card = document.querySelector(".card");
const btn = document.getElementById("openNasaBtn");
const img = document.getElementById("spaceImg");

// INITIAL HIDDEN STATES 
card.style.opacity = 0;
card.style.transform = "translateY(40px)";
btn.style.transform = "scale(0)";

// Fetch NASA APOD data
async function getNASAData() {
  const response = await fetch(apiURL);
  const data = await response.json();

  img.src = data.url;
  document.getElementById("title").textContent = data.title;
  document.getElementById("desc").textContent = data.explanation;

  // WAIT UNTIL IMAGE LOADS
  img.onload = () => {
    animateCard();
  };
}

//  ANIMATIONS 

// Fade + slide card
function animateCard() {
  popmotion.spring({
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    stiffness: 100,
    damping: 20
  }).start(v => {
    card.style.opacity = v.opacity;
    card.style.transform = `translateY(${v.y}px)`;
  });

  // After the card animation finishes, animate the button
  setTimeout(() => {
    animateButton();
  }, 300);
}

// Button bounce pop-in
function animateButton() {
  popmotion.spring({
    from: { scale: 0 },
    to: { scale: 1 },
    stiffness: 200,
    damping: 12
  }).start(v => {
    btn.style.transform = `scale(${v.scale})`;
  });
}

// Button click → NASA APOD website
btn.addEventListener("click", () => {
  window.open("https://apod.nasa.gov/apod/astropix.html", "_blank");
});

// Start loading data
getNASAData();
