var source = "https://github.com/inlandsche/turubos/blob/3b1cbf3c49823a08c05c20d34d3f6c6b12b6c1aa/turulah.mp3";
var audio = document.createElement('audio');

audio.autoplay = true;
audio.src = source;
audio.load()

audio.addEventListener("load", () => { audio.play();}, true);
audio.volume = 0.2;
