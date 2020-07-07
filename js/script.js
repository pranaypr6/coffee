// document.querySelector(".services").addEventListener('click',()=>{
//     document.querySelector('#services').scrollIntoView({
//         behavior: 'smooth'
//       });
// })

var slideUp = {
  distance: "150%",
  origin: "bottom",
  opacity: null,
  delay: 200,
  reset: true,
};
ScrollReveal().reveal(".service-tags", slideUp);

const audio = document.querySelector(".audio");

const playAudio = () => {
  audio.play();
};

const content = document.querySelector(".content");
const assistent = document.querySelector(".assistent");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("started");
};
recognition.onresult = function (event) {
  console.log(event);
};

assistent.addEventListener("click", () => {
  recognition.start();
});
