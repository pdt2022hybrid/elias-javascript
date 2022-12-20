

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
    showResult(person, pcChoice);
}








    function showResult(person, bot) {
      alert(bot);
    
      if(person == 'K' && bot == 'P') {
        alert("Prehral si")
      } else if(person == 'P' && bot == 'K') {
        alert("Vyhral si")
      } else if(person == 'P' && bot == 'N') {
        alert("Prehral si")
      } else if(person == 'N' && bot == 'P') {
        alert("Vyhral si")
      } else if(person == 'N' && bot == 'K') {
        alert("Prehral si")
      } else if(person == 'N' && bot == 'N') {
        alert("Remiza")
      } else if(person == 'K' && bot == 'K') {
        alert("Remiza")
      } else if(person == 'P' && bot == 'P') {
        alert("Remiza")
      } else {
        alert("Vyhral si")
      }
    }





showResult()
alert(generateLetter())




function showScore() {
  let bot = document.querySelector("#pcChoice");
  let score = document.querySelector("#score");

  score.innerHTML = score;

}