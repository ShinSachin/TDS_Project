const questions = [
  // 1. Bahrain
  {
    question: "Who won the inaugural Bahrain Grand Prix in 2004?",
    answers: [
      { text: "Michael Schumacher", correct: true },
      { text: "Fernando Alonso", correct: false },
      { text: "Kimi Räikkönen", correct: false },
      { text: "Rubens Barrichello", correct: false }
    ]
  },
  // 2. Saudi Arabia
  {
    question: "Who won the first Saudi Arabian Grand Prix in 2021?",
    answers: [
      { text: "Lewis Hamilton", correct: true },
      { text: "Max Verstappen", correct: false },
      { text: "Valtteri Bottas", correct: false },
      { text: "Sergio Pérez", correct: false }
    ]
  },
  // 3. Australia
  {
    question: "Which city replaced Adelaide as the Australian GP host in 1996?",
    answers: [
      { text: "Melbourne", correct: true },
      { text: "Sydney", correct: false },
      { text: "Perth", correct: false },
      { text: "Brisbane", correct: false }
    ]
  },
  // 4. Japan
  {
    question: "At which circuit is the Japanese Grand Prix traditionally held?",
    answers: [
      { text: "Suzuka Circuit", correct: true },
      { text: "Fuji Speedway", correct: false },
      { text: "Okayama", correct: false },
      { text: "Motegi", correct: false }
    ]
  },
  // 5. China
  {
    question: "Who won the first Chinese Grand Prix in 2004?",
    answers: [
      { text: "Rubens Barrichello", correct: true },
      { text: "Michael Schumacher", correct: false },
      { text: "Fernando Alonso", correct: false },
      { text: "Kimi Räikkönen", correct: false }
    ]
  },
  // 6. Miami
  {
    question: "In which year was the first Miami Grand Prix held?",
    answers: [
      { text: "2022", correct: true },
      { text: "2021", correct: false },
      { text: "2023", correct: false },
      { text: "2020", correct: false }
    ]
  },
  // 7. Emilia Romagna (Imola)
  {
    question: "What is the official name of the Imola circuit hosting the Emilia Romagna GP?",
    answers: [
      { text: "Autodromo Enzo e Dino Ferrari", correct: true },
      { text: "Autodromo Nazionale Monza", correct: false },
      { text: "Mugello Circuit", correct: false },
      { text: "Vallelunga Circuit", correct: false }
    ]
  },
  // 8. Monaco
  {
    question: "Who holds the record for the most Monaco Grand Prix wins?",
    answers: [
      { text: "Ayrton Senna", correct: true },
      { text: "Michael Schumacher", correct: false },
      { text: "Graham Hill", correct: false },
      { text: "Alain Prost", correct: false }
    ]
  },
  // 9. Canada
  {
    question: "Who was the first Canadian driver to win the Canadian Grand Prix?",
    answers: [
      { text: "Gilles Villeneuve", correct: true },
      { text: "Jacques Villeneuve", correct: false },
      { text: "Lance Stroll", correct: false },
      { text: "George Eaton", correct: false }
    ]
  },
  // 10. Spain
  {
    question: "Which Spanish driver won his home race at the 2006 Spanish Grand Prix?",
    answers: [
      { text: "Fernando Alonso", correct: true },
      { text: "Carlos Sainz", correct: false },
      { text: "Pedro de la Rosa", correct: false },
      { text: "Marc Gené", correct: false }
    ]
  },
  // 11. Austria
  {
    question: "Which circuit is home to the Austrian Grand Prix?",
    answers: [
      { text: "Red Bull Ring", correct: true },
      { text: "A1 Ring", correct: false },
      { text: "Zeltweg Airfield", correct: false },
      { text: "Salzburg Ring", correct: false }
    ]
  },
  // 12. Great Britain
  {
    question: "Who holds the record for most British Grand Prix wins at Silverstone?",
    answers: [
      { text: "Lewis Hamilton", correct: true },
      { text: "Jim Clark", correct: false },
      { text: "Nigel Mansell", correct: false },
      { text: "Alain Prost", correct: false }
    ]
  },
  // 13. Hungary
  {
    question: "The Hungaroring, home of the Hungarian GP, is located near which city?",
    answers: [
      { text: "Budapest", correct: true },
      { text: "Debrecen", correct: false },
      { text: "Szeged", correct: false },
      { text: "Miskolc", correct: false }
    ]
  },
  // 14. Belgium
  {
    question: "Which circuit hosts the Belgian Grand Prix?",
    answers: [
      { text: "Spa-Francorchamps", correct: true },
      { text: "Zolder", correct: false },
      { text: "Nivelles", correct: false },
      { text: "Mettet", correct: false }
    ]
  },
  // 15. Netherlands
  {
    question: "Who is the most successful driver at the Dutch Grand Prix?",
    answers: [
      { text: "Jim Clark", correct: true },
      { text: "Max Verstappen", correct: false },
      { text: "Niki Lauda", correct: false },
      { text: "Jackie Stewart", correct: false }
    ]
  },
  // 16. Italy (Monza)
  {
    question: "Which circuit has hosted the most Formula 1 World Championship races?",
    answers: [
      { text: "Monza", correct: true },
      { text: "Silverstone", correct: false },
      { text: "Spa-Francorchamps", correct: false },
      { text: "Monaco", correct: false }
    ]
  },
  // 17. Azerbaijan (Baku)
  {
    question: "Who won the first F1 race held in Baku in 2016 (then titled the European GP)?",
    answers: [
      { text: "Nico Rosberg", correct: true },
      { text: "Lewis Hamilton", correct: false },
      { text: "Sebastian Vettel", correct: false },
      { text: "Daniel Ricciardo", correct: false }
    ]
  },
  // 18. Singapore
  {
    question: "Who ended Red Bull’s 2023 winning streak by winning the Singapore GP?",
    answers: [
      { text: "Carlos Sainz", correct: true },
      { text: "Charles Leclerc", correct: false },
      { text: "Lewis Hamilton", correct: false },
      { text: "Lando Norris", correct: false }
    ]
  },
  // 19. United States (Austin)
  {
    question: "Which city has hosted the United States GP since 2012?",
    answers: [
      { text: "Austin", correct: true },
      { text: "Indianapolis", correct: false },
      { text: "Miami", correct: false },
      { text: "Las Vegas", correct: false }
    ]
  },
  // 20. Mexico City
  {
    question: "What is the name of the circuit that hosts the Mexico City Grand Prix?",
    answers: [
      { text: "Autódromo Hermanos Rodríguez", correct: true },
      { text: "Autódromo de los Pinos", correct: false },
      { text: "Circuito Miguel Hidalgo", correct: false },
      { text: "Parque Fundidora Circuit", correct: false }
    ]
  },
  // 21. São Paulo (Brazil)
  {
    question: "Which Brazilian circuit hosts the São Paulo Grand Prix?",
    answers: [
      { text: "Interlagos (Autódromo José Carlos Pace)", correct: true },
      { text: "Jacarepaguá", correct: false },
      { text: "Brasília Autódromo", correct: false },
      { text: "Curitiba Circuit", correct: false }
    ]
  },
  // 22. Las Vegas
  {
    question: "In what year did Las Vegas first host an F1 championship race prior to 2023?",
    answers: [
      { text: "1981", correct: true },
      { text: "1984", correct: false },
      { text: "1986", correct: false },
      { text: "1979", correct: false }
    ]
  },
  // 23. Qatar
  {
    question: "Which circuit hosts the Qatar Grand Prix?",
    answers: [
      { text: "Losail International Circuit", correct: true },
      { text: "Yas Marina Circuit", correct: false },
      { text: "Dubai Autodrome", correct: false },
      { text: "Jeddah Corniche Circuit", correct: false }
    ]
  },
  // 24. Abu Dhabi
  {
    question: "Who won the first Abu Dhabi Grand Prix in 2009?",
    answers: [
      { text: "Sebastian Vettel", correct: true },
      { text: "Lewis Hamilton", correct: false },
      { text: "Jenson Button", correct: false },
      { text: "Fernando Alonso", correct: false }
    ]
  }
];

const loginContainer = document.getElementById("login-container");
const quizContainer = document.getElementById("quiz-container");
const playerNameInput = document.getElementById("player-name");
const welcomeText = document.getElementById("welcome");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const progressText = document.getElementById("progress");
const trophyContainer = document.getElementById("trophy-container");

let currentQuestionIndex = 0;
let score = 0;
let playerName = "";
let timerInterval;
let secondsElapsed = 0;
const timerDisplay = document.getElementById("timer");

function startGame() {
  playerName = playerNameInput.value.trim();
  if (playerName === "") {
    alert("Please enter your name to start!");
    return;
  }
  loginContainer.style.display = "none";
  quizContainer.style.display = "block";
  startQuiz();
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  secondsElapsed = 0;
  updateTimer();
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    secondsElapsed++;
    updateTimer();
  }, 1000);

  welcomeText.innerHTML = `Hello, ${playerName}! 👋`;

  // Reset and create 24 trophies
  trophyContainer.style.display = "none";
  trophyContainer.innerHTML = "";
  for (let i = 0; i < questions.length; i++) {
    const trophy = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    trophy.setAttribute("viewBox", "0 0 24 24");
    trophy.classList.add("trophy");
    trophy.innerHTML = '<path d="M6 3h12v2h3v3c0 3.31-2.69 6-6 6h-6c-3.31 0-6-2.69-6-6V5h3V3zm6 18a5 5 0 0 0 5-5H7a5 5 0 0 0 5 5z"/>';
    trophyContainer.appendChild(trophy);
  }

  showQuestion();
}
function updateTimer() {
  const minutes = Math.floor(secondsElapsed / 60).toString().padStart(2, "0");
  const seconds = (secondsElapsed % 60).toString().padStart(2, "0");
  timerDisplay.innerHTML = `⏱️ ${minutes}:${seconds}`;
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;
  progressText.innerHTML = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

  const shuffledAnswers = [...currentQuestion.answers].sort(() => Math.random() - 0.5);
  shuffledAnswers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
    launchConfetti();
  } else {
    selectedBtn.classList.add("wrong");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  setTimeout(() => {
    handleNextButton();
  }, 1000);

}

function showScore() {
  resetState();
  questionElement.innerHTML = `🎉 Congrats, ${playerName}! You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";

  clearInterval(timerInterval);
  
  launchConfetti();

  // Show and fill trophies
  trophyContainer.style.display = "grid";
  const trophies = trophyContainer.querySelectorAll(".trophy");
  trophies.forEach((trophy, index) => {
    if (index < score) {
      trophy.classList.add("filled");
    } else {
      trophy.classList.remove("filled");
    }
  });
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function launchConfetti() {
  const leftBarrel = document.getElementById("barrel-left");
  const rightBarrel = document.getElementById("barrel-right");

  leftBarrel.classList.add("show");
  rightBarrel.classList.add("show");

  for (let i = 0; i < 80; i++) { // doubled confetti
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    if (Math.random() > 0.5) {
      confetti.style.left = "80px";
    } else {
      confetti.style.right = "80px";
    }

    const spread = (Math.random() * 200 - 100) + "px";
    confetti.style.setProperty("--x", spread);

    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = (2 + Math.random() * 1.5) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }

  setTimeout(() => {
    leftBarrel.classList.remove("show");
    rightBarrel.classList.remove("show");
  }, 2000);
}

