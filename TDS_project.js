// --- F1 History Quiz Questions (24 races in 2024 calendar order) ---
const questions = [
  { question: "Who won the first ever Bahrain Grand Prix in 2004?", answers: [
    { text: "Michael Schumacher", correct: true },
    { text: "Fernando Alonso", correct: false },
    { text: "Kimi Räikkönen", correct: false },
    { text: "Rubens Barrichello", correct: false }
  ]},
  { question: "Which driver won the inaugural Saudi Arabian GP in 2021?", answers: [
    { text: "Lewis Hamilton", correct: true },
    { text: "Max Verstappen", correct: false },
    { text: "Valtteri Bottas", correct: false },
    { text: "Charles Leclerc", correct: false }
  ]},
  { question: "Who holds the record for most Australian GP wins?", answers: [
    { text: "Michael Schumacher", correct: false },
    { text: "Lewis Hamilton", correct: false },
    { text: "Lex Davison & Michael Schumacher (4 each)", correct: true },
    { text: "Sebastian Vettel", correct: false }
  ]},
  { question: "Which circuit hosts the Japanese GP?", answers: [
    { text: "Suzuka Circuit", correct: true },
    { text: "Fuji Speedway", correct: false },
    { text: "Okayama", correct: false },
    { text: "Motegi", correct: false }
  ]},
  { question: "Which driver won the Chinese GP when it debuted in 2004?", answers: [
    { text: "Michael Schumacher", correct: false },
    { text: "Rubens Barrichello", correct: true },
    { text: "Jenson Button", correct: false },
    { text: "Fernando Alonso", correct: false }
  ]},
  { question: "Who was the first American driver to win the Miami GP (2022)?", answers: [
    { text: "Nobody yet, all winners have been non-American", correct: true },
    { text: "Alexander Rossi", correct: false },
    { text: "Logan Sargeant", correct: false },
    { text: "Scott Speed", correct: false }
  ]},
  { question: "Which F1 team has the most victories at Imola (Emilia Romagna GP)?", answers: [
    { text: "Ferrari", correct: true },
    { text: "McLaren", correct: false },
    { text: "Williams", correct: false },
    { text: "Red Bull", correct: false }
  ]},
  { question: "Which driver famously crashed in Monaco 1988 while leading comfortably?", answers: [
    { text: "Ayrton Senna", correct: true },
    { text: "Nigel Mansell", correct: false },
    { text: "Alain Prost", correct: false },
    { text: "Nelson Piquet", correct: false }
  ]},
  { question: "Who won the first Canadian GP at Montreal (1978)?", answers: [
    { text: "Gilles Villeneuve", correct: true },
    { text: "Jacques Laffite", correct: false },
    { text: "Alan Jones", correct: false },
    { text: "Niki Lauda", correct: false }
  ]},
  { question: "Which Austrian GP track is currently used?", answers: [
    { text: "Red Bull Ring", correct: true },
    { text: "A1 Ring", correct: false },
    { text: "Zeltweg Airfield", correct: false },
    { text: "Österreichring", correct: false }
  ]},
  { question: "Who is nicknamed 'Mr. Silverstone' for his British GP performances?", answers: [
    { text: "Lewis Hamilton", correct: true },
    { text: "Nigel Mansell", correct: false },
    { text: "Jim Clark", correct: false },
    { text: "Stirling Moss", correct: false }
  ]},
  { question: "Which driver gave Ferrari their 1st F1 win at the German GP 1951?", answers: [
    { text: "José Froilán González", correct: true },
    { text: "Alberto Ascari", correct: false },
    { text: "Luigi Villoresi", correct: false },
    { text: "Juan Manuel Fangio", correct: false }
  ]},
  { question: "Which F1 legend has the most Hungarian GP wins?", answers: [
    { text: "Lewis Hamilton", correct: true },
    { text: "Michael Schumacher", correct: false },
    { text: "Sebastian Vettel", correct: false },
    { text: "Nelson Piquet", correct: false }
  ]},
  { question: "Who won the 1st Belgian GP at Spa in 1950?", answers: [
    { text: "Juan Manuel Fangio", correct: true },
    { text: "Giuseppe Farina", correct: false },
    { text: "Luigi Fagioli", correct: false },
    { text: "Alberto Ascari", correct: false }
  ]},
  { question: "Which driver has the most wins at the Dutch GP (Zandvoort)?", answers: [
    { text: "Max Verstappen", correct: false },
    { text: "Jim Clark", correct: true },
    { text: "Jackie Stewart", correct: false },
    { text: "Alain Prost", correct: false }
  ]},
  { question: "Which legendary Ferrari driver won Monza 1960 Italian GP?", answers: [
    { text: "Phil Hill", correct: true },
    { text: "John Surtees", correct: false },
    { text: "Lorenzo Bandini", correct: false },
    { text: "Mike Hawthorn", correct: false }
  ]},
  { question: "Who won the 1st Azerbaijan GP in 2017?", answers: [
    { text: "Daniel Ricciardo", correct: true },
    { text: "Sebastian Vettel", correct: false },
    { text: "Valtteri Bottas", correct: false },
    { text: "Lewis Hamilton", correct: false }
  ]},
  { question: "Who won the 1st Singapore GP under lights in 2008?", answers: [
    { text: "Fernando Alonso", correct: true },
    { text: "Felipe Massa", correct: false },
    { text: "Lewis Hamilton", correct: false },
    { text: "Kimi Räikkönen", correct: false }
  ]},
  { question: "Which driver has the most USA GP wins at COTA?", answers: [
    { text: "Lewis Hamilton", correct: true },
    { text: "Sebastian Vettel", correct: false },
    { text: "Max Verstappen", correct: false },
    { text: "Michael Schumacher", correct: false }
  ]},
  { question: "Who won the first Mexican GP in 1963?", answers: [
    { text: "Jim Clark", correct: true },
    { text: "Graham Hill", correct: false },
    { text: "Jack Brabham", correct: false },
    { text: "Dan Gurney", correct: false }
  ]},
  { question: "Which driver famously lost Brazil 2008 title on last lap?", answers: [
    { text: "Felipe Massa", correct: true },
    { text: "Lewis Hamilton", correct: false },
    { text: "Sebastian Vettel", correct: false },
    { text: "Robert Kubica", correct: false }
  ]},
  { question: "Who won the inaugural Las Vegas GP (1981 Caesars Palace GP)?", answers: [
    { text: "Alan Jones", correct: false },
    { text: "Nelson Piquet", correct: true },
    { text: "Carlos Reutemann", correct: false },
    { text: "Keke Rosberg", correct: false }
  ]},
  { question: "Who won the inaugural Qatar GP in 2021?", answers: [
    { text: "Lewis Hamilton", correct: true },
    { text: "Max Verstappen", correct: false },
    { text: "Fernando Alonso", correct: false },
    { text: "Valtteri Bottas", correct: false }
  ]},
  { question: "Which driver has the most Abu Dhabi GP wins?", answers: [
    { text: "Lewis Hamilton", correct: true },
    { text: "Sebastian Vettel", correct: false },
    { text: "Nico Rosberg", correct: false },
    { text: "Max Verstappen", correct: false }
  ]}
];

// --- Elements from page ---
const loginBox = document.getElementById("loginBox");
const quizBox = document.getElementById("quizBox");
const playerInput = document.getElementById("playerInput");
const greeting = document.getElementById("greeting");
const questionText = document.getElementById("questionText");
const choicesArea = document.getElementById("choicesArea");
const restartBtn = document.getElementById("restartBtn");
const progressText = document.getElementById("progressText");
const trophyShelf = document.getElementById("trophyShelf");
const leaderboardBox = document.getElementById("leaderboardBox");
const leaderboardList = document.getElementById("leaderboardList");
const podiumArea = document.getElementById("podiumArea");
const podiumFirst = document.getElementById("podiumFirst");
const podiumSecond = document.getElementById("podiumSecond");
const podiumThird = document.getElementById("podiumThird");
const timerDisplay = document.getElementById("quizTimer");

// --- Game state ---
let currentIndex = 0;
let score = 0;
let playerName = "";
let timerInterval;
let secondsElapsed = 0;

// --- Start game ---
function startGame() {
  playerName = playerInput.value.trim();
  if (!playerName) { alert("Type your name to play!"); return; }
  loginBox.style.display = "none";
  quizBox.style.display = "block";
  startQuiz();
}

// --- Start quiz ---
function startQuiz() {
  currentIndex = 0;
  score = 0;
  secondsElapsed = 0;
  updateTimer();
  clearInterval(timerInterval);
  timerInterval = setInterval(() => { secondsElapsed++; updateTimer(); }, 1000);

  greeting.innerHTML = `Hello, ${playerName}! 👋`;

  // reset trophies
  trophyShelf.style.display = "none";
  trophyShelf.innerHTML = "";
  for (let i = 0; i < questions.length; i++) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.classList.add("trophy");
    svg.innerHTML = '<path d="M6 3h12v2h3v3c0 3.31-2.69 6-6 6h-6c-3.31 0-6-2.69-6-6V5h3V3zm6 18a5 5 0 0 0 5-5H7a5 5 0 0 0 5 5z"/>';
    trophyShelf.appendChild(svg);
  }

  showQuestion();
}

// --- Timer display ---
function updateTimer() {
  const m = Math.floor(secondsElapsed / 60).toString().padStart(2,"0");
  const s = (secondsElapsed % 60).toString().padStart(2,"0");
  timerDisplay.innerHTML = `⏱️ ${m}:${s}`;
}

// --- Show a question ---
function showQuestion() {
  resetChoices();
  const q = questions[currentIndex];
  questionText.innerHTML = q.question;
  progressText.innerHTML = `Question ${currentIndex+1} of ${questions.length}`;
  [...q.answers].sort(() => Math.random()-0.5).forEach(ans => {
    const btn = document.createElement("button");
    btn.innerHTML = ans.text;
    btn.classList.add("btn");
    if (ans.correct) btn.dataset.correct = ans.correct;
    btn.addEventListener("click", pickAnswer);
    choicesArea.appendChild(btn);
  });
}

// --- Reset old answers ---
function resetChoices() {
  restartBtn.style.display = "none";
  while (choicesArea.firstChild) choicesArea.removeChild(choicesArea.firstChild);
}

// --- When player picks an answer ---
function pickAnswer(e) {
  const chosen = e.target;
  const right = chosen.dataset.correct === "true";
  if (right) { chosen.classList.add("correct"); score++; launchConfetti(); }
  else { chosen.classList.add("wrong"); }
  Array.from(choicesArea.children).forEach(b => {
    if (b.dataset.correct === "true") b.classList.add("correct");
    b.disabled = true;
  });
  setTimeout(() => nextStep(), 1000); // auto move
}

// --- Show final results ---
function showFinalScore() {
  resetChoices();
  questionText.innerHTML = `🎉 ${playerName}, you scored ${score} / ${questions.length}!`;
  restartBtn.innerHTML = "Play Again";
  restartBtn.style.display = "block";
  clearInterval(timerInterval);
  launchConfetti();

  // fill trophies
  trophyShelf.style.display = "grid";
  trophyShelf.querySelectorAll(".trophy").forEach((t,i) => {
    if (i < score) t.classList.add("filled");
  });

  // save & show leaderboard
  saveScore();
}

// --- Save score ---
function saveScore() {
  const entry = { name: playerName, score, time: secondsElapsed };
  let board = JSON.parse(localStorage.getItem("leaderboard")) || [];
  board.push(entry);
  board.sort((a,b) => b.score===a.score ? a.time-b.time : b.score-a.score);
  board = board.slice(0,10); // keep top 10
  localStorage.setItem("leaderboard", JSON.stringify(board));
  displayLeaderboard(board);
}

// --- Display leaderboard and podium ---
function displayLeaderboard(board) {
  leaderboardBox.style.display = "block";
  leaderboardList.innerHTML = "";
  board.forEach((p,i) => {
    const m = Math.floor(p.time/60).toString().padStart(2,"0");
    const s = (p.time%60).toString().padStart(2,"0");
    const li = document.createElement("li");

    // Top 3 get colored trophies
    let trophyColor = "gold";
    if (i === 1) trophyColor = "silver";
    if (i === 2) trophyColor = "#cd7f32";

    li.innerHTML = `
      <svg viewBox="0 0 24 24" style="fill:${trophyColor}">
        <path d="M6 3h12v2h3v3c0 3.31-2.69 6-6 6h-6c-3.31 0-6-2.69-6-6V5h3V3zm6 18a5 5 0 0 0 5-5H7a5 5 0 0 0 5 5z"/>
      </svg>
      ${i+1}. ${p.name} — ${p.score}/24 in ${m}:${s}
    `;
    leaderboardList.appendChild(li);
  });

  // podium update
  podiumArea.style.display = board.length ? "flex" : "none";
  podiumFirst.textContent = board[0] ? `${board[0].name} (${board[0].score})` : "";
  podiumSecond.textContent = board[1] ? `${board[1].name} (${board[1].score})` : "";
  podiumThird.textContent = board[2] ? `${board[2].name} (${board[2].score})` : "";
}

// --- Next step ---
function nextStep() {
  currentIndex++;
  if (currentIndex < questions.length) showQuestion();
  else showFinalScore();
}

// --- Restart / Next button ---
restartBtn.addEventListener("click", () => {
  if (currentIndex < questions.length) nextStep();
  else startQuiz();
});

// --- Confetti launcher ---
function launchConfetti() {
  const left = document.getElementById("barrelLeft");
  const right = document.getElementById("barrelRight");
  left.classList.add("show"); right.classList.add("show");
  for (let i=0; i<80; i++) {
    const piece = document.createElement("div");
    piece.classList.add("confetti");
    if (Math.random()>0.5) piece.style.left="80px"; else piece.style.right="80px";
    piece.style.setProperty("--x",(Math.random()*200-100)+"px");
    piece.style.background=`hsl(${Math.random()*360},100%,50%)`;
    piece.style.animationDuration=(2+Math.random()*1.5)+"s";
    document.body.appendChild(piece);
    setTimeout(()=>piece.remove(),3000);
  }
  setTimeout(()=>{ left.classList.remove("show"); right.classList.remove("show"); },2000);
}
