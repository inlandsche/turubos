var source = "https://github.com/inlandsche/turubos/raw/main/turulah.mp3";
var audio = document.createElement('audio');

audio.autoplay = true;
audio.src = source;
audio.load()

audio.addEventListener("load", () => { audio.play();}, true);
audio.volume = 0.2;
