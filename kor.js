var answer = document.getElementById("musicInput");
// git test
// commit 2
var music = ["크루엘라", "왕좌의 게임", "모아나", "셜록", "씽", 
    "해리 포터", "나 홀로 집에", "퍼시픽 림", "하울의 움직이는 성", 
    "슈렉", "주토피아", "업", "겨울왕국", "겨울왕국 2", "아케인", "카", 
    "카 2", "X 파일", "토르 러브 앤 썬더", "가디언즈 오브 갤럭시", 
    "스파이더맨 뉴 유니버스", "너의 이름은", "빅 히어로", "토이 스토리",
    "이웃집 토토로", "언더테일", "괴짜가족 괴담일기", "네모바지 스폰지밥",
    "오버워치", "마다가스카", "토마스와 친구들", "엔칸토", "터미네이터",
    "미션 임파서블", "007", "카우보이 비밥", "알라딘", "인어공주",
    "스타 워즈", "슈퍼맨", "메이즈 러너", "문명", "포탈",
    "명탐정 코난", "위대한 쇼맨", "라라랜드", "코코",
    "벅스 라이프", "월-E", "몬스터 주식회사", "니모를 찾아서", "라따뚜이",
    "인디아나 존스", "리그 오브 레전드", "발로란트", "쥬라기 공원",
    "핑크 팬더", "GTA V", "이니셜 D", "도라에몽",
    "짱구는 못말려", "배틀그라운드", "동물의 숲", "인터스텔라", "소닉",
    "주먹왕 랄프 2", "마녀 배달부 키키", "하스스톤", "진격의 거인",
    "원피스", "보헤미안 랩소디", "비긴 어게인", "토르 라그나로크",
    "킹스맨", "이태원 클라쓰", "영혼기병 라젠카", "포켓몬스터", 
    "어벤져스", "가디언즈 오브 갤럭시 2", "메이플스토리",
    "카트라이더", "오징어 게임", "캐리비안의 해적", "요괴워치",
    "제트팩 조이라이드", "타이타닉", "아따맘마", "라이온 킹",
    "그 여자 작사 그 남자 작곡", "러브 액츄얼리", "슬램덩크",
    "유희왕", "이누야샤", "블루 아카이브", "강철 수염과 게으른 동네",
    "쿠키런 킹덤", "쿠키런 오븐브레이크", "쿠키런", "슈퍼배드",
    "앵그리버드", "캔디 크러쉬 사가", "분노의 질주",
    "분노의 질주 홉스 앤 쇼", "슈퍼 마리오 월드", "슈퍼 마리오 브라더스",
    "팩맨", "테트리스", "티미의 못말리는 수호천사", "어몽 어스",
    "위플래쉬", "지오메트리 대쉬", "레이튼 교수와 이상한 마을",
    "별의 커비", "드래곤빌리지", "ALTF4", "미스터 션샤인", "도깨비",
    "별에서 온 그대", "야인시대", "추노", "크레이지 아케이드",
    "테일즈런너", "고스트버스터즈"];

var audio = document.getElementById("music");

var playBtn = document.getElementById("play");

var guessWhatText = document.getElementById("guessWhat");

var guessWhatInnerText = ['훌륭해요!', '맞았어요!', '우와, 또 해내셨네요!', '음악가시군요!'];

var guessWhatInnerTextWrong = ['틀렸어요...', '삐빅. 그거 아닙니다.', '다른 음악인 것 같아요.', '아니야!'];

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
    audio.src = `./korMusic/${currentSong}.mp3`;
}

function play_pause() {
    if (audio.paused) {
        playBtn.innerText = '정지';
        audio.play();
    } else {
        playBtn.innerText = '재생';
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
        audioFx.src = './ding.mp3';
        audioFx.volume = 0.4;
        audioFx.play();
        setTimeout(() => guessWhatText.innerText = '+1', 1000);
        setTimeout(() => guessWhatText.classList.add('plus'), 1000);
        setTimeout(() => number.innerText =`점수: ${score}`, 2000);
        setTimeout(() => guessWhatText.innerText = '다음 문제 나갑니다!', 2000);
        setTimeout(song(), 2000);
        setTimeout(() => playBtn.innerText = '재생', 4000);
        setTimeout(() => question.innerText = `#${stack + 1} / 50`, 4000);
        setTimeout(() => guessWhatText.innerText = '무엇일까요?!', 4000);
        setTimeout(() => guessWhatText.classList.remove('plus'), 4000);
        setTimeout(() => answer.value = '', 4000);
        if (stack == 50) {
            if (score >= 50) {
                audioFx.src = './ppuuu.mp3';
            } else {
                audioFx.src = './single clap.mp3';
            }
            setTimeout(() => audioFx.play(), 4000);
            setTimeout(() => alert(`당신의 점수는 ${score}점 입니다.`), 4100);
            setTimeout(() => alert('타이틀 화면으로 돌아갑니다.'), 4100);
            setTimeout(() => location.href = './index.html', 4100);
        }
    } else {
        guessWhatText.innerText = guessWhatInnerTextWrong[randomText];
        setTimeout(() => guessWhatText.innerText = '무엇일까요?!', 1000);
    }
}

function skip() {
    guessWhatText.innerText = `정답은 ${currentSong} 이었습니다!`
    stack += 1;
    audioFx.src = './huh.mp3';
    audioFx.play();
    setTimeout(() => guessWhatText.innerText = '아쉽지만 다음으로 넘어갈게요!', 4000);
    setTimeout(() => question.innerText = `#${stack + 1} / 50`, 4000);
    setTimeout(song(), 5000);
    setTimeout(() => guessWhatText.innerText = '무엇일까요?!', 5000);
    setTimeout(() => playBtn.innerText = '재생', 5000);
    if (stack == 50) {
        if (score >= 50) {
            audioFx.src = './ppuuu.mp3';
        } else {
            audioFx.src = './single clap.mp3';
        }
        setTimeout(() => audioFx.play(), 4000);
        setTimeout(() => alert(`당신의 점수는 ${score}점 입니다.`), 4100);
        setTimeout(() => alert('타이틀 화면으로 돌아갑니다.'), 4100);
        setTimeout(() => location.href = './index.html', 4100);
    }
}

randomInt();
song();
setInterval(() =>audio.volume = volume.value/100,  10);
