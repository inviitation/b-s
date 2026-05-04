const intro = document.getElementById("intro");
const main = document.getElementById("main");
const music = document.getElementById("music");
const btn = document.getElementById("musicBtn");

/* يبدأ من Intro */
window.onload = () => {
  intro.style.display = "flex";
  main.style.display = "none";
  document.body.classList.add("no-scroll");
};

/* دخول */
intro.onclick = () => {
  intro.style.display = "none";
  main.style.display = "block";
  document.body.classList.remove("no-scroll");

  fadeInMusic();

  requestAnimationFrame(() => {
    document.querySelectorAll(".section").forEach((sec, i) => {
      setTimeout(() => sec.classList.add("show"), i * 300);
    });

    setTimeout(() => {
      document.querySelector("h1").classList.add("show");
    }, 500);
  });
};

/* Fade In */
function fadeInMusic() {
  music.volume = 0;
  music.play().catch(()=>{});

  let v = 0;
  const fade = setInterval(() => {
    if (v < 1) {
      v += 0.05;
      music.volume = v;
    } else {
      clearInterval(fade);
    }
  }, 100);
}

/* Fade Out */
function fadeOutMusic() {
  let v = music.volume;

  const fade = setInterval(() => {
    if (v > 0) {
      v -= 0.05;
      music.volume = v;
    } else {
      music.pause();
      clearInterval(fade);
    }
  }, 100);
}

/* زرار الصوت */
btn.onclick = () => {
  if (music.paused) {
    fadeInMusic();
    btn.innerHTML = "🔊";
  } else {
    fadeOutMusic();
    btn.innerHTML = "🔇";
  }
};

/* countdown */
const target = new Date("May 15, 2026 19:30").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;

  update("days", Math.floor(diff / (1000 * 60 * 60 * 24)));
  update("hours", Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  update("minutes", Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
  update("seconds", Math.floor((diff % (1000 * 60)) / 1000));
}, 1000);

function update(id, value) {
  const el = document.getElementById(id);

  if (el.textContent != value) {
    el.classList.add("animate");

    setTimeout(() => {
      el.textContent = value;
      el.classList.remove("animate");
    }, 120);
  }
}

/* hearts */
document.addEventListener("click", (e) => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
});