const VideoEl = document.createElement('video');
VideoEl.setAttribute('src', 'media/video.mp4');

const contain = document.querySelector('.container');


const playEl = document.createElement("div");
const pauseEl = document.createElement("div");
const vidEl = document.createElement("div")

playEl.classList.add('videost__play');
pauseEl.classList.add('videost__pause');
vidEl.classList.add('videost');


playEl.addEventListener('click', function (e) {
    VideoEl.play();
});

pauseEl.addEventListener('click', function (e) {
    VideoEl.pause();
});

const rangeEl = document.createElement("input");
rangeEl.setAttribute('type', 'range');
rangeEl.setAttribute('min', '0');
rangeEl.setAttribute('max', '100');
rangeEl.setAttribute('value', '0');

rangeEl.classList.add('videost__range')

rangeEl.addEventListener('change', function (e) {
    VideoEl.currentTime = e.target.valume/100*VideoEl.duration;
});

VideoEl.addEventListener("timeupdate", (e) => {
    rangeEl.setAttribute("value", Math.round(VideoEl.currentTime/VideoEl.duration*100));
});

const valumeEl = document.createElement("input");
valumeEl.setAttribute('type', 'range');
valumeEl.setAttribute('min', '0');
valumeEl.setAttribute('max', '100');
valumeEl.setAttribute('value', '0');


VideoEl.addEventListener("loadeddata", (e) => {
    valumeEl.setAttribute('value', VideoEl.volume*100)
});

valumeEl.addEventListener('change', function (e) {
    VideoEl.volume = e.target.value/100;
});


contain.appendChild(vidEl);
vidEl.appendChild(VideoEl)
vidEl.appendChild(valumeEl)
vidEl.appendChild(rangeEl)
vidEl.appendChild(playEl);
vidEl.appendChild(pauseEl);
