var app = document.getElementById("typewriter");

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(300)
  .typeString("I am a freelance developer.")
  .deleteChars(20) // Menghapus karakter "freelance developer"
  .typeString("Junior Backend Developer.")
  .pauseFor(1000)
  .start();
