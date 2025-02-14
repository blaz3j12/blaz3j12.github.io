let currentStep = 0;
let points = 0;
const answersContainer = document.querySelector('.answers');
const questionElement = document.getElementById('question');
const gifcontainer = document.getElementById('gif-ontainer');
const inputContainer = document.getElementById('inputContainer');
const catSound = new Audio('happy-cat.mp3');
const pop = new Audio('pop.mp3');
const gif = document.querySelector('.gif');
const backButton = document.getElementById('backButton');
const pointsDisplay = document.getElementById('pointsDisplay');
const wiad = document.getElementById('wiad');
const ost = document.getElementById('ost');
const muteButton = document.getElementById('muteButton');
const sendButton = document.getElementById('sendButton');
const pointsInput = document.getElementById('pointsInput');
const pow = document.getElementById('pow');
const point = document.getElementById('point');
const down = document.getElementById('down');

let aggressionLevel = 0;
let noButtonScale = 1;
let yesButtonScale = 1;

const aggressiveTexts = [
    "Czy na pewno chcesz to zrobić?",
    "Jesteś tego absolutnie pewien?",
    "Nie rób tego, serio!",
    "Zastanów się jeszcze raz!",
    "Ostatnia szansa, zmień decyzję!",
    "TO NAPRAWDĘ ZŁY WYBÓR!",
    "PRZESTAŃ KLIKAĆ NIE!",
    "MASZ OSTATNIE OSTRZEŻENIE!",
    "NIE MOŻESZ TEGO ZROBIĆ!",
    "JESTEŚ W BŁĘDZIE!"
];

function nextStep(answer) {
    if (currentStep === 0) {
        point.style.display = 'inline-block';
        pointsDisplay.style.display = 'inline-block';
        handleFirstStep(answer);
    } else if (currentStep === 1) {
        handleSecondStep(answer);
    } else if (currentStep === 2) {
        handleThirdStep(answer);
    } else if (currentStep === 3) {
        handleFourthStep(answer);
    } else if (currentStep === 4) {
        handleFifthStep(answer);
    } else if (currentStep === 5) {
        handleSixthStep(answer);
    } else if (currentStep === 6) {
        handleSeventhStep(answer);
    } else if (currentStep === 7) {
        handleEighthStep(answer);
    } else if (currentStep === 8) {
        handleNinthStep(answer);
    } else if (currentStep === 9) {
        handleTenthStep(answer);
    }
}

function handleFirstStep(answer) {
    currentStep = 1;
    questionElement.textContent = "Jak nazywa się największy ocean na Ziemi?";
    clearAnswers();
    createAnswers(['Atlantycki', 'Indyjski', 'Spokojny'], [handleSecondStep, handleSecondStep, handleSecondStep], 2); // Poprawna odpowiedź: Spokojny
}

function handleSecondStep(answer) {
    currentStep = 2;
    questionElement.textContent = "Który pierwiastek chemiczny ma symbol 'O'?";
    clearAnswers();
    createAnswers(['Żelazo', 'Tlen', 'Złoto'], [handleThirdStep, handleThirdStep, handleThirdStep], 1); // Poprawna odpowiedź: Tlen
}

function handleThirdStep(answer) {
    currentStep = 3;
    questionElement.textContent = "Kto wynalazł żarówkę?";
    clearAnswers();
    createAnswers(['Thomas Edison', 'Nikola Tesla', 'Albert Einstein'], [handleFourthStep, handleFourthStep, handleFourthStep], 0); // Poprawna odpowiedź: Thomas Edison
}

function handleFourthStep(answer) {
    currentStep = 4;
    questionElement.textContent = "Ile wynosi pierwiastek kwadratowy z 64?";
    clearAnswers();
    createAnswers(['6', '8', '10'], [handleFifthStep, handleFifthStep, handleFifthStep], 1); // Poprawna odpowiedź: 8
}

function handleFifthStep(answer) {
    currentStep = 5;
    questionElement.textContent = "Jaka jest stolica Francji?";
    clearAnswers();
    createAnswers(['Berlin', 'Paryż', 'Madryt'], [handleSixthStep, handleSixthStep, handleSixthStep], 1); // Poprawna odpowiedź: Paryż
}

function handleSixthStep(answer) {
    currentStep = 6;
    questionElement.textContent = "Które zwierzę jest najszybsze na Ziemi?";
    clearAnswers();
    createAnswers(['Gepard', 'Struś', 'Orzeł'], [handleSeventhStep, handleSeventhStep, handleSeventhStep], 0); // Poprawna odpowiedź: Gepard
}

function handleSeventhStep(answer) {
    currentStep = 7;
    questionElement.textContent = "Ile wynosi 2 + 2 * 2?";
    clearAnswers();
    createAnswers(['6', '8', '4'], [handleEighthStep, handleEighthStep, handleEighthStep], 0); // Poprawna odpowiedź: 6
}

function handleEighthStep(answer) {
    currentStep = 8;
    questionElement.textContent = "Kto napisał 'Romeo i Julia'?";
    clearAnswers();
    createAnswers(['William Szekspir', 'Charles Dickens', 'Mark Twain'], [handleNinthStep, handleNinthStep, handleNinthStep], 0); // Poprawna odpowiedź: William Szekspir
}

function handleNinthStep(answer) {
    currentStep = 9;
    questionElement.textContent = "Ile planet znajduje się w Układzie Słonecznym?";
    clearAnswers();
    createAnswers(['7', '8', '9'], [handleTenthStep, handleTenthStep, handleTenthStep], 1); // Poprawna odpowiedź: 8
}

function handleTenthStep(answer) {
    currentStep = 10;
    questionElement.textContent = "Chcesz zostać moją walentynką?";
    clearAnswers();
    createAnswers(['Tak', 'Nie'], [showGif, shrinkNoButton], 0); // Poprawna odpowiedź: Tak
}

let noClickedcount = 0;

function shrinkNoButton() {
    console.log("shrinkNoButton called");
    noButtonScale *= 0.9;
    console.log("noButtonScale:", noButtonScale);
    event.target.style.transform = `scale(${noButtonScale})`;

    yesButtonScale *= 1.3;
    const yesButton = document.querySelector('.answer-yes');
    if (yesButton) {
        console.log("yesButtonScale:", yesButtonScale);
        yesButton.style.transform = `scale(${yesButtonScale})`;
        noClickedcount++;
    }

    if (aggressionLevel < aggressiveTexts.length - 1) {
        aggressionLevel++;
        console.log("aggressionLevel:", aggressionLevel);
        questionElement.textContent = aggressiveTexts[aggressionLevel];
    }
}

function clearAnswers() {
    answersContainer.innerHTML = '';
}

function checkAnswer(questionIndex, selectedAnswerText) {
    const correctAnswersText = [
        'Spokojny','Tlen','Thomas Edison','8','Paryż','Gepard','6','William Szekspir','8','Tak'
    ];

    const correctAnswer = correctAnswersText[questionIndex].trim().toLowerCase();
    const userAnswer = selectedAnswerText.trim().toLowerCase();

    const pointsFeedback = document.getElementById('pointsFeedback');
    const eloImage = document.getElementById('eloImage');

    if (correctAnswer === userAnswer) {
        points++;
        console.log(`Correct! Points: ${points}`);
        pointsFeedback.textContent = '+1';
        setTimeout(() => {
            playPopSound();
        }, 220);

        eloImage.style.display = 'block';
        eloImage.src = 'elo.png';

        setTimeout(() => {
            eloImage.src = 'elo2.png';
        }, 200);

        setTimeout(() => {
            eloImage.src = 'elo.png';
        }, 600);

        setTimeout(() => {
            eloImage.style.display = 'none';
        }, 800);
    } else {
        console.log(`Incorrect! Points: ${points}`);
        pointsFeedback.textContent = '+0';
    }
    pointsDisplay.textContent = `Punkty: ${points}/10`;

    pointsInput.value = points;
    setTimeout(() => {
        pointsFeedback.textContent = '';
    }, 8000);
}
function playPopSound() {
    pop.volume = 0.1;
    pop.play()
        .then(() => {
            console.log("Dźwięk pop został odtworzony.");
        })
        .catch(error => {
            console.error("Błąd odtwarzania dźwięku:", error);
        });
}

function createAnswers(options, actions, questionIndex) {
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('answer');
        button.textContent = option;
        button.onclick = () => {
            actions[index](index);
            checkAnswer(questionIndex, option);
        };
        if (option === 'Tak') {
            button.classList.add('answer-yes');
        } else if (option === 'Nie') {
            button.classList.add('answer-no');
        }

        button.style.userSelect = 'none';
        answersContainer.appendChild(button);
    });
}

function showGif() {
    questionElement.style.display = 'none';
    answersContainer.style.display = 'none';

    gifcontainer.style.display = 'flex';
    ost.style.display = 'block';
    wiad.style.display = 'block';

    inputContainer.style.display = 'flex';
    inputContainer.style.flexDirection = 'row';
    pow.style.display = "inline-block";
    backButton.style.display = 'inline-block';
    muteButton.style.display = 'inline-block';

    let soundFile = '';
    let volumeLevel = 0.008;

    if (points >= 9) {
        gif.src = 'image.gif';
        soundFile = 'happy-cat.mp3';
        volumeLevel = 0.005;
        ost.textContent = "10/10 PUNKTÓW, BRAWOOO";
    } else if (points > 4) {
        gif.src = 'cat.gif';
        soundFile = 'cat-meow.mp3';
        volumeLevel = 0.008;
        ost.textContent = "Bardzo dużo punktów";
    } else {
        gif.src = 'banana.gif';
        soundFile = 'cry-banana-cat.mp3';
        volumeLevel = 0.01;
        ost.textContent = "Nic się nie stało, możesz kliknąć powrót";
    }

    gif.alt = 'Odpowiedni GIF';

    catSound.src = soundFile;
    catSound.loop = true;
    catSound.volume = volumeLevel;
    catSound.play();

    const container = document.getElementById('container');
    const screenWidth = window.innerWidth;
    container.style.height = "50000px";
    container.style.width = "850px";
    if (screenWidth > 426) {
        container.style.paddingLeft = "0";
        container.style.paddingRight = "0";
      } else if (screenWidth < 425) {
        container.style.paddingLeft = "15vw";
        container.style.paddingRight = "15vw";
      }
}

backButton.addEventListener('click', function() {
    location.reload();
});

muteButton.addEventListener('click', function() {
    if (catSound.paused) {
        catSound.play();
        muteButton.textContent = 'Wycisz';
    } else {
        catSound.pause();
        muteButton.textContent = 'Wznów';
    }
});

function hideElementsAfterMessage() {
    pointsDisplay.style.display = "none";
    catSound.pause();
    gifcontainer.style.display = "none";
    inputContainer.style.display = "none";
    muteButton.style.display = "none";
    ost.textContent = "A oto moja wiadomość";
    wiad.style.display = "none"
    point.style.display = "none"
    const screenWidth = window.innerWidth;
    if (screenWidth > 426) {
        container.style.height = "300px"
        container.style.width = "70%"
      } else if (screenWidth < 425) {
        container.style.height = "70px"
        container.style.width = "70%"
      }
    showAudioControls()
    down.style.display = "inline-block"
}

const audio = document.getElementById("customAudio");
const seekBar = document.getElementById("seekBar");
const controls = document.getElementById("audioControls");
const tim = document.getElementById("tim")

function showAudioControls() {
    controls.style.display = "flex";
    tim.style.display = "contents";
}

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

audio.addEventListener("timeupdate", () => {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
});

function download() {
    const audioElement = document.getElementById('customAudio');
    const link = document.createElement('a');
    link.href = audioElement.src;
    link.download = 'audio.mp3';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



document.getElementById("myForm").addEventListener("submit", function(event) {

    const pointsInput = document.getElementById('pointsInput');
    const noClicked = document.getElementById('noClicked');

    pointsInput.value = points;
    noClicked.value = noClickedcount;

    let formData = new FormData(this);

    event.preventDefault()

    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            console.log("wiadomość wysłana");
            hideElementsAfterMessage();
        }
    })
    .catch(error => {
        alert("Błąd: " + error);
        console.error("Błąd wysyłania wiadomości:", error);
    });
});
