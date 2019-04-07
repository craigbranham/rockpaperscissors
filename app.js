let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.results > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const userResults_span = document.getElementById('user-results');
const compResults_span = document.getElementById('comp-results');

function selectCompChoice() {
	const choices = ['r', 'p', 's'];
	let rand = Math.floor(Math.random() * 3);
	return choices[rand];
}

function convertToWord(letter) {
	if (letter === 'r') {return "Rock"};
	if (letter === 'p') {return "Paper"};
	return "Scissors";
}

function win(userChoice, compChoice) {
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = "You win!";
	userResults_span.innerHTML = `${convertToWord(userChoice)}`;
	compResults_span.innerHTML = `${convertToWord(compChoice)}`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
	scoreBoard_div.classList.remove('gray-glow');
	scoreBoard_div.classList.remove('red-glow');
	scoreBoard_div.classList.add('green-glow');
}

function lose(userChoice,compChoice) {
	const userChoice_div = document.getElementById(userChoice);
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = "You lose.";
	userResults_span.innerHTML = `${convertToWord(userChoice)}`;
	compResults_span.innerHTML = `${convertToWord(compChoice)}`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
	scoreBoard_div.classList.remove('green-glow');
	scoreBoard_div.classList.remove('gray-glow');
	scoreBoard_div.classList.add('red-glow');
}

function draw(userChoice,compChoice) {
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = "It's a draw!";
	userResults_span.innerHTML = `${convertToWord(userChoice)}`;
	compResults_span.innerHTML = `${convertToWord(compChoice)}`;
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
	scoreBoard_div.classList.remove('green-glow');
	scoreBoard_div.classList.remove('red-glow');
	scoreBoard_div.classList.add('gray-glow');
}

function game (userChoice) {
	const compChoice = selectCompChoice();
	switch (userChoice + compChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, compChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice,compChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,compChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click',() => game('r'));

	paper_div.addEventListener('click',() => game('p'));

	scissors_div.addEventListener('click',() => game('s'));
}

main();