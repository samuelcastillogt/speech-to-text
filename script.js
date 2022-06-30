// new speech recognition object
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

// This runs when the speech recognition service starts
recognition.onstart = function () {
  console.log("We are listening. Try speaking into the microphone.");
};

recognition.onspeechend = function () {
  // when user is done speaking
  recognition.stop();
};

// This runs when the speech recognition service returns result
recognition.onresult = function (event) {
  var transcript = event.results[0][0].transcript;
  var confidence = event.results[0][0].confidence;
  if (transcript == "Hola como estas") {
    console.log("bien");
  }
  document.getElementById("resultado").innerHTML = `<h3>${transcript}</h3>`;
};
document.getElementById("play").addEventListener("click", (e) => {
  e.preventDefault();
  recognition.start();
});
