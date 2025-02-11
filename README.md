<!DOCTYPE html>
<html lang="pl">
<head>
    <link rel="icon" href="pobrane1.png" type="image/x-icon">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Miłość</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100vw;
            overflow: hidden;
            flex-direction: column;
            text-align: center;
            margin: 0;
        }

        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
            position: relative;
        }

        h1 {
            font-size: 4vw;
        }

        .answers {
            margin-top: 10vh;
            display: flex;
            justify-content: center;
            gap: 2vw;
            border-radius: 50px;
        }

        #question {
            margin-top: -3vh;
            user-select: none;
            position: relative;
            top: 10%;
            left: 0%;
            margin-bottom: 10vh;
        }

        #ost {
            display: none;
            font-size: 3vw;
            color: #333;
            font-weight: bold;
            user-select: none;
            margin-bottom: 20px;
        }

        .answer {
            border-radius: 10px;
            padding: 2vw 5vw;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 2vw;
            transition: background-color 0.3s, transform 0.2s;
        }

        .answer:hover {
            background-color: #45a049;
        }

        .answer:active {
            background-color: #3e8e41;
        }

        .answer-yes {
            position: absolute;
            left: 35%;
            transition: transform 0.2s;
        }

        .answer-yes.clicked {
            transform: scale(1.5);
        }

        .answer-no {
            background-color: #cf0000;
            position: absolute;
            left: 53%;
            transition: transform 0.2s;
        }

        .answer-no:hover {
            background-color: #960000;
        }

        .answer-no.clicked {
            background-color: #ff2b2b;
            transform: scale(0.8);
        }

        .gif-container {
            display: none;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 100%;
            margin-top: 20px;
        }

        .gif {
            width: auto;
            height: 50vh;
            max-width: 100%;
            max-height: 50vh;
        }

        #muteButton {
            position: absolute;
            top: 0;
            right: 0;
            margin: 1vw;
            padding: 1vw 2vw;
            background-color: #f44336;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 1.2vw;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s;
        }

        #muteButton:hover {
            background-color: #d32f2f;
        }

        #muteButton:active {
            background-color: #c62828;
            transform: scale(0.98);
        }

        #wiad {
            display: none;
            margin-bottom: 1vh;
            font-size: 4vh;
        }

        .input-container {
            display: none;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 20px;
        }

        .input-container input {
            text-align: left;
            display: inline-block;
            height: 1vw;
            font-size: 2vw;
            padding: 1.5vw;
            width: 60%;
            border-radius: 5px;
            border: 1px solid #ccc;
            margin-bottom: 0;
        }

        #sendButton {
            display: inline-block;
            padding: 1.5vw 2vw;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 2vw;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s;
            margin-left: 10px;
            height: auto;
        }

        #sendButton:hover {
            background-color: #45a049;
        }

        #sendButton:active {
            background-color: #3e8e41;
        }

        .fixed-button.left {
            position: fixed;
            top: 10px;
            left: 10px;
        }

        .fixed-button.right {
            position: fixed;
            top: 10px;
            right: 10px;
        }

        #backButton {
            display: none;
            font-family: Arial;
            font-weight: bold;
            padding: 7px 15px;
            background-color: #2b2b2b;
            color: white;
            border-radius: 5px;
            border: black 5px;
            font-size: 1vw;
            cursor: pointer;
            z-index: 1000;
        }

        #backButton:hover {
            background-color: #3b3b3b;
        }

        #backButton:active {
            background-color: #696969;
        }

        #pointsDisplay {
            display: none;
            font-family: Arial;
            font-size: 1.5vw;
            color: #333;
            font-weight: bold;
            z-index: 1000;
            user-select: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <button id="backButton" class="fixed-button left">Powrót</button>
        <div id="pointsDisplay" class="fixed-button right">Punkty: 0/10</div>

        <div class="question-container">
            <h1 id="question">Cześć! Jaką opcję wybierasz?</h1>
            <div class="answers">
                <button class="answer" onclick="nextStep(1)">Opcja 1</button>
                <button class="answer" onclick="nextStep(2)">Opcja 2</button>
                <button class="answer" onclick="nextStep(3)">Opcja 3</button>
            </div>
        </div>

        <div>
            <h2 id="ost">Dziękuję za wybór! Oto kot!</h2>
        </div>

        <div class="gif-container" id="gif-ontainer">
            <img class="gif" src="https://media.giphy.com/media/3o6ZsY8BDA7g7J7csM/giphy.gif" alt="Gif kota" />
            <button id="muteButton">Wycisz</button>
        </div>

        <p id="wiad" style="display: none;">Wiadomość:</p>

        <div class="input-container" id="inputContainer">
            <form id="emailForm">
                <input type="text" id="textInput" name="textInput" placeholder="Wiadomość do mnie" required>
                <button id="sendButton" type="submit">Wyślij</button>
            </form>
        </div>
    </div>

    <script>
        let currentStep = 0;
        let points = 0;
        const answersContainer = document.querySelector('.answers');
        const questionElement = document.getElementById('question');
        const gifcontainer = document.getElementById('gif-ontainer');
        const inputContainer = document.getElementById('inputContainer');
        const catSound = new Audio('happy-cat.mp3');
        const gif = document.querySelector('.gif');
        const backButton = document.getElementById('backButton');
        const pointsDisplay = document.getElementById('pointsDisplay');
        const wiad = document.getElementById('wiad');
        const ost = document.getElementById('ost');
        const muteButton = document.getElementById('muteButton');
        const sendButton = document.getElementById('sendButton');

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
            questionElement.textContent = "Jakie jest twoje ulubione zwierzę?";
            clearAnswers();
            createAnswers(['Kot', 'Pies', 'Papuga'], [handleSecondStep, handleSecondStep, handleSecondStep], 0);
        }

        function handleSecondStep(answer) {
            currentStep = 2;
            questionElement.textContent = "Jaki jest twój ulubiony kolor?";
            clearAnswers();
            createAnswers(['Niebieski', 'Czerwony', 'Zielony'], [handleThirdStep, handleThirdStep, handleThirdStep], 1);
        }

        function handleThirdStep(answer) {
            currentStep = 3;
            questionElement.textContent = "Wolisz kawę czy herbatę?";
            clearAnswers();
            createAnswers(['Kawa', 'Herbata', 'Nie piję'], [handleFourthStep, handleFourthStep, handleFourthStep], 2);
        }

        function handleFourthStep(answer) {
            currentStep = 4;
            questionElement.textContent = "Jaką porę roku lubisz najbardziej?";
            clearAnswers();
            createAnswers(['Wiosna', 'Lato', 'Zima'], [handleFifthStep, handleFifthStep, handleFifthStep], 3);
        }

        function handleFifthStep(answer) {
            currentStep = 5;
            questionElement.textContent = "Jaki jest twój ulubiony gatunek muzyczny?";
            clearAnswers();
            createAnswers(['Rock', 'Pop', 'Jazz'], [handleSixthStep, handleSixthStep, handleSixthStep], 4);
        }

        function handleSixthStep(answer) {
            currentStep = 6;
            questionElement.textContent = "Gdzie chciałbyś pojechać na wakacje?";
            clearAnswers();
            createAnswers(['Góry', 'Plaża', 'Miasto'], [handleSeventhStep, handleSeventhStep, handleSeventhStep], 5);
        }

        function handleSeventhStep(answer) {
            currentStep = 7;
            questionElement.textContent = "Jakie jest twoje ulubione danie?";
            clearAnswers();
            createAnswers(['Pizza', 'Sushi', 'Burger'], [handleEighthStep, handleEighthStep, handleEighthStep], 6);
        }

        function handleEighthStep(answer) {
            currentStep = 8;
            questionElement.textContent = "Jaki sport uprawiasz najchętniej?";
            clearAnswers();
            createAnswers(['Bieganie', 'Pływanie', 'Siłownia'], [handleNinthStep, handleNinthStep, handleNinthStep], 7);
        }

        function handleNinthStep(answer) {
            currentStep = 9;
            questionElement.textContent = "Który film lub serial najbardziej ci się podoba?";
            clearAnswers();
            createAnswers(['Matrix', 'Gra o Tron', 'Breaking Bad'], [handleTenthStep, handleTenthStep, handleTenthStep], 8);
        }

        function handleTenthStep(answer) {
            currentStep = 10;
            questionElement.textContent = "Wybierz: Tak czy Nie?";
            clearAnswers();
            createAnswers(['Tak', 'Nie'], [showGif, shrinkNoButton], 9);
        }

        function shrinkNoButton() {
            noButtonScale *= 0.9;
            event.target.style.transform = `scale(${noButtonScale})`;

            yesButtonScale *= 1.3;
            const yesButton = document.querySelector('.answer-yes');
            if (yesButton) {
                yesButton.style.transform = `scale(${yesButtonScale})`;
            }

            if (aggressionLevel < aggressiveTexts.length - 1) {
                aggressionLevel++;
            }
        }

        function clearAnswers() {
            answersContainer.innerHTML = '';
        }

        function checkAnswer(questionIndex, selectedAnswerText) {
            const correctAnswersText = [
                'Papuga', 'Zielony', 'Kawa', 'Zima', 'Pop',
                'Góry', 'Burger', 'Pływanie', 'Matrix', 'Tak'
            ];

            if (correctAnswersText[questionIndex] === selectedAnswerText) {
                points++;
            }
            pointsDisplay.textContent = `Punkty: ${points}/10`;
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
            backButton.style.display = 'inline-block';
            muteButton.style.display = 'inline-block';

            gif.src = 'image.gif';
            gif.alt = 'Gif kota';
            catSound.loop = true;
            catSound.volume = 0.008;
            catSound.play();
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

        document.getElementById('emailForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Zapobiega domyślnej akcji formularza

            const text = document.getElementById('textInput').value;

            fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: text }),
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
            })
            .catch(error => {
                console.error('Błąd:', error);
            });
        });
    </script>
</body>
</html>
