var title = document.getElementById("title");

var korBtn = document.getElementById("kor");

var engBtn = document.getElementById("eng");

var audio = new Audio();

var audioTwo = new Audio();

var btn = document.getElementById("go");

function proceed() {
    btn.style = 'display: none;';
    audio.src = './tada.mp3';
    audio.play();
    btn.classList.add('disapper');
    title.classList.add("fadeIn");
    setTimeout(() => title.classList.add('titleMove'), 1700);
    setTimeout(() => korBtn.classList.add('fadeIn'), 2400);
    setTimeout(() => engBtn.classList.add('fadeIn'), 2400);
}

function kor() {
    audioTwo.src = './go.mp3';
    audioTwo.volume = 0.5;
    audioTwo.play();
    title.classList.add('titleMoveFinal');
    korBtn.classList.add('buttonMoveFinal');
    engBtn.classList.add('buttonMoveFinal');
    setTimeout(() => location.href = './kor.html', 1000);
}

function eng() {
    audioTwo.src = './go.mp3';
    audioTwo.volume = 0.5;
    audioTwo.play();
    title.classList.add('titleMoveFinal');
    korBtn.classList.add('buttonMoveFinal');
    engBtn.classList.add('buttonMoveFinal');
    setTimeout(() => location.href = './eng.html', 1000);
}