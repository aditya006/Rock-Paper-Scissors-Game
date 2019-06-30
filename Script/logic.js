let userScore = 0;
let compScore = 0;
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".results")
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
const reset_div=document.getElementById("reset");
function reset(){
	userScore=0;
	compScore=0;
	userScore_span.innerHTML=userScore;
 	compScore_span.innerHTML=compScore;
 	
}
function getCompChoice(){
	const choice = ["r","p","s"];
	const i=Math.floor(Math.random()*3);
	return choice[i];
}
function game(userChoice){
	const compChoice=getCompChoice();
	switch(userChoice+compChoice){
		case "rs":
		case "pr":
		case "sp":
		 wins(userChoice,compChoice);
		 break;
		case "sr":
		case "rp":
		case "ps":
		 loss(userChoice,compChoice);
		 break;
	    case "rr":
		case "pp":
		case "ss":
		 draw(userChoice,compChoice);
		 break;
	}
 };
function convert(l){
	if(l==="r") return "Rock";
	if(l==="p") return "Paper";
	return "Scissors";
};

function wins(user, comp){
 	userScore++;
 	userScore_span.innerHTML=userScore;
 	compScore_span.innerHTML=compScore;
 	result_div.innerHTML=`${convert(user)} beats ${convert(comp)}. You Win!`
 	document.getElementById(user).classList.add("green-glow");
 	setTimeout(function(){document.getElementById(user).classList.remove("green-glow")},1000);
 }

function loss(user,comp){
 	compScore++;
 	compScore_span.innerHTML=compScore;
 	userScore_span.innerHTML=userScore;
 	result_div.innerHTML=`${convert(comp)} beats ${convert(user)}. You lose!`
 	document.getElementById(user).classList.add("red-glow");
 	setTimeout(function(){document.getElementById(user).classList.remove("red-glow")},1000);

 }

function draw(user,comp){
	result_div.innerHTML="Its a Draw!"
	document.getElementById(user).classList.add("grey-glow");
	setTimeout(function(){document.getElementById(user).classList.remove("grey-glow")},1000);


}

function main(){
	rock_div.addEventListener('click' , function(){
		game("r");

	})

	paper_div.addEventListener('click' , function(){
		game("p");

	})

	scissors_div.addEventListener('click' , function(){
		game("s");

	})
	reset_div.addEventListener('click',function(){
		reset();
	})
};
main();