const intro = document.getElementById("intro");
const main = document.getElementById("main");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

/* دايمًا يبدأ من Intro */
window.onload = () => {
  intro.style.display = "flex";
  main.style.display = "none";
  document.body.classList.add("no-scroll");
};

/* دخول */
intro.addEventListener("click", () => {
  intro.style.display = "none";
  main.style.display = "block";

  document.body.classList.remove("no-scroll");

  fadeInMusic();

  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.add("show");
  });

  document.querySelectorAll("h1").forEach(h => {
    h.classList.add("show");
  });
});

/* Music */
function fadeInMusic() {
  music.volume = 0;
  music.play();
  let v = 0;
  const i = setInterval(()=>{
    if(v<1){ v+=0.05; music.volume=v }
    else clearInterval(i)
  },100);
}

function fadeOutMusic() {
  let v = music.volume;
  const i = setInterval(()=>{
    if(v>0){ v-=0.05; music.volume=v }
    else{ music.pause(); clearInterval(i) }
  },100);
}

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    fadeInMusic();
    musicBtn.innerHTML = "🔊 Stop Music";
  } else {
    fadeOutMusic();
    musicBtn.innerHTML = "🔇 Play Music";
  }
});

/* Countdown */
const target = new Date("May 15, 2026 19:30:00").getTime();

setInterval(()=>{
  const now = new Date().getTime();
  const d = target - now;

  update("days", Math.floor(d/(1000*60*60*24)));
  update("hours", Math.floor((d%(1000*60*60*24))/(1000*60*60)));
  update("minutes", Math.floor((d%(1000*60*60))/(1000*60)));
  update("seconds", Math.floor((d%(1000*60))/1000));
},1000);

function update(id,val){
  const el = document.getElementById(id);
  if(el.textContent != val){
    el.classList.add("animate");
    setTimeout(()=>{
      el.textContent = val;
      el.classList.remove("animate");
    },120);
  }
}

/* Hearts + vibration */
document.addEventListener("click", (e) => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";

  document.body.appendChild(heart);

  if (navigator.vibrate) navigator.vibrate(10);

  setTimeout(()=>heart.remove(),1000);
});

/* Vibration زرار */
document.querySelector(".map-btn").addEventListener("click", ()=>{
  if(navigator.vibrate){
    navigator.vibrate([20,40,20]);
  }
});