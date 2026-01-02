// subtle floating animation for phone
const phone = document.querySelector(".circle-bg");

let pos = 0;
setInterval(() => {
  pos += 0.5;
  phone.style.transform = `translateY(${Math.sin(pos * 0.05) * 6}px)`;
}, 30);


const marquee = document.querySelector(".logo-track");

marquee.addEventListener("mouseenter", () => {
  marquee.style.animationPlayState = "paused";
});

marquee.addEventListener("mouseleave", () => {
  marquee.style.animationPlayState = "running";
});



// Keeps animation smooth after tab switch
document.querySelectorAll('.visual').forEach(img => {
  img.style.willChange = "opacity, transform";
});



// Future-ready for slider expansion
const dots = document.querySelectorAll(".dots span");
let active = 0;

setInterval(() => {
  dots[active].classList.remove("active");
  active = (active + 1) % dots.length;
  dots[active].classList.add("active");
}, 4000);


document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

const slider = document.getElementById("autoSlider");
slider.innerHTML += slider.innerHTML; // duplicate cards for infinite scroll
