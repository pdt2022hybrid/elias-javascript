

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
      const playerScoreBoard = document.querySelector('.p-count');
      const computerScoreBoard = document.querySelector('.c-count');

    
      if(person == 'K' && bot == 'P') {
        alert("Prehral si")
        computerScore++;
        computerScoreBoard.score = computerScore;
      } else if(person == 'P' && bot == 'K') {
        alert("Vyhral si")
        playerScore++;
        playerScoreBoard.score = playerScore;
      } else if(person == 'P' && bot == 'N') {
        alert("Prehral si")
        computerScore++;
        computerScoreBoard.score = computerScore;
      } else if(person == 'N' && bot == 'P') {
        alert("Vyhral si")
        playerScore++;
        playerScoreBoard.score = playerScore;
      } else if(person == 'N' && bot == 'K') {
        alert("Prehral si")
        computerScore++;
        computerScoreBoard.score = computerScore;
      } else if(person == 'N' && bot == 'N') {
        alert("Remiza")
      } else if(person == 'K' && bot == 'K') {
        alert("Remiza")
      } else if(person == 'P' && bot == 'P') {
        alert("Remiza")
      } else {
        alert("Vyhral si")
        playerScore++;
        playerScoreBoard.score = playerScore;
      }
    }




    const movesLeft = document.querySelector(movesLeft);
    console.log(movesLeft)
    moves++;
    movesLeft.innerHTML = `Moves left: ${10-moves}`;

      const choiceNumber = Math.floor(Math.random()*3);
     

      



showResult()
alert(generateLetter())




function showScore() {
  bot = document.querySelector("#pcChoice");
  let score = document.querySelector("#score");

  score.innerHTML = bot.value + person.value;

}


