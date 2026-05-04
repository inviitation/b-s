const intro=document.getElementById("intro");
const main=document.getElementById("main");
const music=document.getElementById("music");

window.onload=()=>{
  intro.style.display="flex";
  main.style.display="none";
  document.body.classList.add("no-scroll");
};

intro.onclick=()=>{
  intro.style.display="none";
  main.style.display="block";
  document.body.classList.remove("no-scroll");

  music.play().catch(()=>{});

  requestAnimationFrame(()=>{
    document.querySelectorAll(".section").forEach((sec,i)=>{
      setTimeout(()=>sec.classList.add("show"),i*300);
    });

    setTimeout(()=>{
      document.querySelector("h1").classList.add("show");
    },500);
  });
};

/* countdown */
const t=new Date("May 15, 2026 19:30").getTime();
setInterval(()=>{
  let d=t-Date.now();
  upd("days",d/864e5);
  upd("hours",d/36e5%24);
  upd("minutes",d/6e4%60);
  upd("seconds",d/1e3%60);
},1000);

function upd(id,v){
  const e=document.getElementById(id);
  v=Math.floor(v);
  if(e.textContent!=v){
    e.classList.add("animate");
    setTimeout(()=>{e.textContent=v;e.classList.remove("animate")},120);
  }
}

/* hearts */
document.onclick=e=>{
  let h=document.createElement("div");
  h.className="heart";
  h.innerHTML="❤️";
  h.style.left=e.clientX+"px";
  h.style.top=e.clientY+"px";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),1000);
};