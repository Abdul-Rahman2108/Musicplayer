const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressBar = document.getElementById('progress-bar');
const trackTitle = document.getElementById('track-title');

const tracks = [
    { title: "Track 1", src: "track1.mp3" },
    { title: "Track 2", src: "track2.mp3" },
    { title: "Track 3", src: "track3.mp3" }
];

let currentTrackIndex = 0;

function loadTrack(index) {
    audio.src = tracks[index].src;
    trackTitle.textContent = tracks[index].title;
    audio.load();
}

function playTrack() {
    audio.play();
    playPauseBtn.textContent = '⏸';
}

function pauseTrack() {
    audio.pause();
    playPauseBtn.textContent = '▶️';
}

function togglePlayPause() {
    if (audio.paused) {
        playTrack();
    } else {
        pauseTrack();
    }
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex > 0) ? currentTrackIndex - 1 : tracks.length - 1;
    loadTrack(currentTrackIndex);
    playTrack();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex < tracks.length - 1) ? currentTrackIndex + 1 : 0;
    loadTrack(currentTrackIndex);
    playTrack();
}

function updateProgress() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
}

function setProgress(e) {
    const duration = audio.duration;
    const clickX = e.target.value;
    audio.currentTime = (clickX / 100) * duration;
}

playPauseBtn.addEventListener('click', togglePlayPause);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);
audio.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('input', setProgress);

loadTrack(currentTrackIndex);
