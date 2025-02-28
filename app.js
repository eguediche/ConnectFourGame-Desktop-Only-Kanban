const MainPage = document.querySelector(".main-page");
const Menu = document.querySelector(".menu-starter-div");
const Rules = document.querySelector(".rules-div");
const PauseMenu = document.querySelector(".menu-pause-div");

let MenuRulesBtn = document.querySelector(".game-rule-btn");
let RulesCloseBtn = document.querySelector(".rule-close-btn");
let GameStartBtn = document.querySelector(".plr-plr-btn");
let InGameMenuBtn = document.querySelector(".ingame-menu-btn");
let ContinueInGameBtn = document.querySelector(".menu-continue-btn");
let QuitInGameBtn = document.querySelector(".menu-quit-btn");
let RestartBtn = document.querySelector(".menu-restart-btn", ".ingame-reset-btn")

let j1Score = document.querySelector(".j1-score");
let j2Score = document.querySelector(".j2-score");
let J1Turn = document.querySelector(".player-1-timer-text");
let j2Turn = document.querySelector(".player-2-timer-text");

let chrono;

/*La je fait les btn ext*/

MenuRulesBtn.addEventListener("click", () => {
	Menu.style.display = "none";
	Rules.style.display = "flex";
});

RulesCloseBtn.addEventListener("click", () => {
	Rules.style.display = "none";
	Menu.style.display = "flex";
});

GameStartBtn.addEventListener("click", () => {
	Menu.style.display = "none";
	MainPage.style.display = "block";
	j1Score.textContent = "0";
	j2Score.textContent = "0";
	let secondes = 15;

	let para = document.querySelector(".player-timer-time");

	chrono = window.setInterval(tictictic, 1000);

	function tictictic() {
		secondes = secondes - 1;
		para.innerHTML = secondes;
		if (secondes == 0) {
			window.clearTimeout(chrono);
		}
	}
});

RestartBtn.addEventListener("click", () => {
    PauseMenu.style.display = "none";
	j1Score.textContent = "0";
	j2Score.textContent = "0";
	let secondes = 15;
    let para = document.querySelector(".player-timer-time");

	chrono = window.setInterval(tictictic, 1000);

	function tictictic() {
		secondes = secondes - 1;
		para.innerHTML = secondes;
		if (secondes == 0) {
			window.clearTimeout(chrono);
		}
	}
})

InGameMenuBtn.addEventListener("click", () => {
	PauseMenu.style.display = "flex";
	window.clearInterval(chrono);
});

ContinueInGameBtn.addEventListener("click", () => {
	PauseMenu.style.display = "none";
    chrono = window.setInterval(tictictic, 1000);
    
});

QuitInGameBtn.addEventListener("click", () => {
	PauseMenu.style.display = "none";
	MainPage.style.display = "none";
	Menu.style.display = "flex";
    j1Score.textContent = "0";
	j2Score.textContent = "0";
	let secondes = 15;
    secondes = secondes - 1;
});

/*La je fait la grille ext*/

const grille = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
];

const grilleAvecGagnant1 = [
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "X", "X", "X", "X",  "", "", "" ]
   ];
   
   const grilleAvecGagnant2 = [
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "X", "", "", "",  "", "", "" ],
    [ "X", "", "", "",  "", "", "" ],
    [ "X", "", "", "",  "", "", "" ],
    [ "X", "", "", "",  "", "", "" ]
   ];
   
   const grilleAvecGagnant3 = [
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "X",  "", "", "" ],
    [ "", "", "X", "",  "", "", "" ],
    [ "", "X", "", "",  "", "", "" ],
    [ "X", "", "", "",  "", "", "" ]
   ];
   
   const grilleAvecGagnant4 = [
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "X",  "", "", "" ],
    [ "", "", "X", "O",  "", "", "" ],
    [ "", "O", "O", "O",  "", "", "" ],
    [ "X", "O", "O", "O",  "O", "", "" ]
   ];
   
   const grilleSansGagnant = [
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "X",  "", "", "" ],
    [ "", "", "X", "O",  "", "", "" ],
    [ "", "O", "O", "O",  "", "", "" ],
    [ "X", "O", "O", "X",  "O", "", "" ]
   ];
   
   function checkWinner(grille) {
   if(grille = grilleAvecGagnant1) {
    winner = JeTurn;
   }
   else if(grille = grilleAvecGagnant2) {
    winner = JeTurn;
   }
   else if(grille = grilleAvecGagnant3) {
    winner = JeTurn;
   }
   else if(grille = grilleAvecGagnant4) {
    winner = JeTurn;
   }
   else if(grille = grilleSansGagnant) {
    winner = JeTurn;
   }
   }
   
   let resultat = "";
   
   resultat = checkWinner(grilleAvecGagnant1); // retourne "X"
   resultat = checkWinner(grilleAvecGagnant2); // retourne "X"
   resultat = checkWinner(grilleAvecGagnant3); // retourne "X"
   resultat = checkWinner(grilleAvecGagnant4); // retourne "O"
   resultat = checkWinner(grilleSansGagnant); // retourne ""

function scorePlayer() {
	if ((j1Score = winner)) {
		j1Score.textContent = j1Score + 1;
	}

	if ((j2Score = winner)) {
		j2Score.textContent = j2Score + 1;
	}
}

let JeTurn = 0;

for (let JeTurn = 0; JeTurn < 42; JeTurn++) {
    if(JeTurn % 2 != 0) {
        J1Turn.style.display = "flex";
        j2Turn.style.display = "none";
    }
     else if (JeTurn % 2 == 0) {
        J1Turn.style.display = "none";
        j2Turn.style.display = "flex";
     }
}

let Column1 = document.querySelector("grid-col-1");
let Column2 = document.querySelector("grid-col-2");
let Column3 = document.querySelector("grid-col-3");
let Column4 = document.querySelector("grid-col-4");
let Column5 = document.querySelector("grid-col-5");
let Column6 = document.querySelector("grid-col-6");
let Column7 = document.querySelector("grid-col-7");

let Pointer1Red = document.querySelector(".pointer-col1-red");
let Pointer1Yellow = document.querySelector(".pointer-col1-yellow");
let Pointer2Red = document.querySelector(".pointer-col2-red");
let Pointer2Yellow = document.querySelector(".pointer-col2-yellow");
let Pointer3Red = document.querySelector(".pointer-col3-red");
let Pointer3Yellow = document.querySelector(".pointer-col3-yellow");
let Pointer4Red = document.querySelector(".pointer-col4-red");
let Pointer4Yellow = document.querySelector(".pointer-col4-yellow");
let Pointer5Red = document.querySelector(".pointer-col5-red");
let Pointer5Yellow = document.querySelector(".pointer-col5-yellow");
let Pointer6Red = document.querySelector(".pointer-col6-red");
let Pointer6Yellow = document.querySelector(".pointer-col6-yellow");
let Pointer7Red = document.querySelector(".pointer-col7-red");
let Pointer7Yellow = document.querySelector(".pointer-col7-yellow");
let AllPointer = document.querySelectorAll("#img-col");


Column1.addEventListener("click", () => {
    if(J1Turn.style.display = "flex") {
        AllPointer.style.display = "none";
        Pointer1Red.style.display = "flex";
    }
});

