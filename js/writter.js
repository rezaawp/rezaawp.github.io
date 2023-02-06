var app = document.getElementById("typewriter");

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(300)
  .typeString("Saya adalah seorang <b>Freelance Developer</b>")
  .pauseFor(300)
  .deleteChars(19)
  .typeString("Junior Backend Developer.")
  .pauseFor(1000)
  .start();
