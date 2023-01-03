

// function myFunction() {
//     alert("Hello World!");
// }



function showAlert() {
    let person = prompt("Si pripravenny hrat ? (ano/nie)");
    if (person == null || person == "") {
        alert("Nic ste nenapisali.")
      } else if (person == "ano" || person == "ano ") {
        alert("Hra zacne po stlaceni tlacitka START. Vela stastia!")
      } else {
        alert("Tak si este precitajte navod na hranie.")
      }
}

function generateLetter() {
  const alphabet = 'KPN';

  return alphabet[Math.floor(Math.random() * alphabet.length)]
}



function playGame() {
    let person = prompt("Zadaj K,P alebo N");
    if(person == null || person == "") {
        alert("Musis nieco napisat!")
    } 
    const pcChoice = generateLetter();
    console.log(pcChoice);
    console.log(person)
    showResult(person, pcChoice);
}





  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;


    function showResult(person, bot) {
      alert(bot);
      const result = document.querySelector('.result');
      const playerScoreBoard = document.querySelector('.p-count');
      const computerScoreBoard = document.querySelector('.c-count');
      

    
      if(person == 'K' && bot == 'P') {
        alert("Prehral si")
        computerScore++;
        computerScoreBoard.innerHTML = computerScore;
      } else if(person == 'P' && bot == 'K') {
        alert("Vyhral si")
        playerScore++;
        playerScoreBoard.innerHTML = playerScore;
      } else if(person === bot) {
        alert("Remiza")
      } else if(person == 'P' && bot == 'N') {
        alert("Prehral si")
        computerScore++;
        computerScoreBoard.innerHTML = computerScore;
      } else if(person == 'N' && bot == 'P') {
        alert("Vyhral si")
        playerScore++;
        playerScoreBoard.innerHTML = playerScore;
      } else if(person == 'N' && bot == 'K') {
        alert("Prehral si")
        computerScore++;
        computerScoreBoard.innerHTML = computerScore;
      } else if(person == 'N' && bot == 'N') {
        alert("Remiza")
      } else if(person == 'K' && bot == 'K') {
        alert("Remiza")
      } else if(person == 'P' && bot == 'P') {
        alert("Remiza")
      } else {
        alert("Vyhral si")
        playerScore++;
        playerScoreBoard.innerHTML = playerScore;
      }
     
    }




    const movesLeft = document.querySelector('.movesLeft');
    console.log(movesLeft)
    moves++;
    movesLeft.innerHTML = `Moves left: ${10-moves}`;

    const choiceNumber = Math.floor(Math.random()*3);
    const computerChoice = alphabet[choiceNumber];

    // Function to check who wins
    winner(this.innerText,computerChoice)

    if(moves == 10) {
      gameOver(alphabet, movesLeft);
    }

     

      



showResult()
alert(generateLetter())




function showScore() {
  bot = document.querySelector("#pcChoice");
  let score = document.querySelector("#score");

  score.innerHTML = bot.value + person.value;

}


const gameOver = (alphabet, movesLeft) => {
  const over = document.querySelector('.vysledok-hry');
  const result = document.querySelector('.result');
  const reloadGame = document.querySelector('.reload');

  over.innerText = "Game Over!!!"

  if(playerScore > computerScore) {
    result.innerText = "You won the game!!";
  } else if(playerScore < computerScore){
    result.innerText = 'You Lost The Game';
  } else {
    result.innerText = 'Draw';
  }

  
  reloadGame.innerText = 'Restart';
  
  
  
  }


