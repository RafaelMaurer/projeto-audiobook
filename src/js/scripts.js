const btnPlayPause = document.getElementById('play-pause');
const audio = document.getElementById('audio-chapter');
const btnNext = document.getElementById('next');
const btnBack = document.getElementById('back');
const textChapter = document.getElementById('chapter');


const audios = [
    "https://res.cloudinary.com/dguk8jwsv/video/upload/v1760580955/1.mp3",
    "https://res.cloudinary.com/dguk8jwsv/video/upload/v1760580950/2.mp3",
    "https://res.cloudinary.com/dguk8jwsv/video/upload/v1760580961/3.mp3",
    "https://res.cloudinary.com/dguk8jwsv/video/upload/v1760580956/4.mp3",
    "https://res.cloudinary.com/dguk8jwsv/video/upload/v1760580955/5.mp3",
    "https://res.cloudinary.com/dguk8jwsv/video/upload/v1760580948/6.mp3",
    "https://res.cloudinary.com/dguk8jwsv/video/upload/v1760580955/7.mp3",
    "https://res.cloudinary.com/dguk8jwsv/video/upload/v1760580955/8.mp3",
    "https://res.cloudinary.com/dguk8jwsv/video/upload/v1760580959/9.mp3",
    "https://res.cloudinary.com/dguk8jwsv/video/upload/v1760580958/10.mp3",

];

let isPlaying = false;
let currentAudio = 0;

function playAudio() {
    audio.play();
    isPlaying = true;
    btnPlayPause.classList.add('active');
}

function pauseAudio() {
    audio.pause();
    isPlaying = false;
    btnPlayPause.classList.remove('active');
}

function togglePlayPause() {
    if (isPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
}

function nextAudio() {
    pauseAudio();
    currentAudio = (currentAudio + 1) % audios.length;
    audio.src = audios[currentAudio];
    textChapter.innerText = "Capítulo " + (currentAudio + 1);
    playAudio();
}

function backAudio() {
    pauseAudio();
    currentAudio = (currentAudio - 1 + audios.length) % audios.length;
    audio.src = audios[currentAudio];
    textChapter.innerText = "Capítulo " + (currentAudio + 1);
    playAudio();
}

btnPlayPause.addEventListener('click', togglePlayPause);
btnNext.addEventListener('click', nextAudio);
btnBack.addEventListener('click', backAudio);


audio.src = audios[currentAudio];
textChapter.innerText = "Capítulo 1";
