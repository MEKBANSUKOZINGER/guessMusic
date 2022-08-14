var answer = document.getElementById("musicInput");

var music = ["cruella", "game of thrones", "moana", "sherlock", "sing", 
    "harry potter", "home alone", "pacific rim", "howl's moving castle", 
    "shrek", "zootopia", "up", "frozen", "frozen 2", "arcane", "cars", 
    "cars 2", "the x-files", "thor love and thunder", "guardians of the galaxy", 
    "spider-man into the spider-verse", "your name", "big hero 6", "toy story",
    "neighbor totoro", "undertale", "gravity falls", "spongebob squarepants",
    "overwatch", "madagascar", "thomas the tank engine", "encanto", "the terminator",
    "mission impossible", "007", "cowboy bebop", "aladdin", "the little mermaid",
    "star wars", "superman", "maze runner", "civilization", "portal",
    "detective conan", "the greatest showman", "la la land", "coco",
    "a bug's life", "wall-e", "monsters, inc.", "finding nemo", "ratatouille",
    "indiana jones", "league of legends", "valorant", "jurassic park",
    "the pink panther", "grand theft auto v", "initial d", "doraemon",
    "crayon shin chan", "playerunknown's battlegrounds", "animal crossing",
    "interstellar", "sonic the hedgehog", "wreck-it ralph", "kiki's delivery service",
    "hearthstone", "attack on titan", "one piece", "bohemian rhapsody", "begin again"];

var audio = document.getElementById("music");

var playBtn = document.getElementById("play");

var guessWhatText = document.getElementById("guessWhat");

var guessWhatInnerText = ['Brilliant!', 'Correct!', 'Wow! You did it again!', 'What a musician!'];

var guessWhatInnerTextWrong = ['Wrong...', 'BEEP, IT`S NOT CORRECT.', 'Not This Thing', 'No!'];

var number = document.getElementById("number");

var question = document.getElementById("question");

var score = 0;

var musicList = [];

var len = 50;

var volume = document.getElementById("volumeBar");

var stack = 0;

var audioFx = new Audio();

function randomInt() {
    while (len > 0) {
        console.log('doing');
        var randomSong = Math.floor(Math.random()*music.length);
        if (!musicList.includes(randomSong)) {
            musicList.push(randomSong);
            len -= 1;
        }
    }
}

function song() {
    console.log(stack);
    currentSong = music[musicList[stack]];
    audio.src = `./engMusic/${currentSong}.mp3`;
}

function play_pause() {
    if (audio.paused) {
        playBtn.innerText = 'pause';
        audio.play();
    } else {
        playBtn.innerText = 'play';
        audio.pause();
    }
}

function check() {
    var randomText = Math.floor(Math.random()*guessWhatInnerText.length);
    console.log('running')
    if (answer.value == currentSong) {
        guessWhatText.innerText = guessWhatInnerText[randomText];
        score += 1;
        stack += 1;
        setTimeout(() => guessWhatText.innerText = '+1', 1000);
        setTimeout(() => guessWhatText.classList.add('plus'), 1000);
        setTimeout(() => number.innerText =`SCORE: ${score}`, 2000);
        setTimeout(() => guessWhatText.innerText = 'Now Guess Next One!', 2000);
        setTimeout(song(), 2000);
        setTimeout(() => playBtn.innerText = 'play', 4000);
        setTimeout(() => question.innerText = `#${stack + 1} / 50`, 4000);
        setTimeout(() => guessWhatText.innerText = 'What Is It?!', 4000);
        setTimeout(() => guessWhatText.classList.remove('plus'), 4000);
        setTimeout(() => answer.value = '', 4000);
        if (stack == 50) {
            if (score >= 50) {
                audioFx.src = './ppuuu.mp3';
            } else {
                audioFx.src = './single clap.mp3';
            }
            setTimeout(() => audioFx.play(), 4000);
            setTimeout(() => alert(`Your score is ${score}.`), 4100);
            setTimeout(() => alert("Let's get back to title."), 4100);
            setTimeout(() => location.href = './index.html', 4100);
        }
    } else {
        guessWhatText.innerText = guessWhatInnerTextWrong[randomText];
        setTimeout(() => guessWhatText.innerText = 'What Is It?!', 1000);
    }
}

function skip() {
    guessWhatText.innerText = `The Answer Was : ${currentSong}`
    stack += 1;
    setTimeout(() => guessWhatText.innerText = 'Then Guess The Next One!', 4000);
    setTimeout(() => question.innerText = `#${stack + 1} / 50`, 4000);
    setTimeout(song(), 5000);
    setTimeout(() => guessWhatText.innerText = 'What Is It?!', 5000);
    setTimeout(() => playBtn.innerText = 'play', 5000);
    if (stack == 50) {
        if (score >= 50) {
            audioFx.src = './ppuuu.mp3';
        } else {
            audioFx.src = './single clap.mp3';
        }
        audioFx.src = './ppuuu.mp3';
        setTimeout(() => audioFx.play(), 4000);
        setTimeout(() => alert(`Your score is ${score}.`), 4100);
        setTimeout(() => alert("Let's get back to title."), 4100);
        setTimeout(() => location.href = './index.html', 4100);
    }
}

randomInt();
song();
setInterval(() =>audio.volume = volume.value/100,  10);