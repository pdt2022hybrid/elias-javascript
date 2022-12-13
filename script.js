

function myFunction() {
    alert("Hello World!");
}



function showAlert() {
    let person = prompt("Si pripravenny hrat ? (ano/nie)");
    if (person == null || person == "") {
        alert("Nic ste nenapisali.")
      } else if (person == "ano") {
        alert("Hra zacina...Vela stastia! Stlac START.")
      } else {
        alert("Tak si este precitajte navod na hranie.")
      }
}

showAlert





function playGame() {
    let person = prompt("Zadaj K,P alebo N");
    if(person == null || person == "") {
        alert("Musis nieco napisat!")
    } 
    
}
   
playGame




function generateLetter() {
  const alphabet = 'KPN';

  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

alert(generateLetter)




function showResult() {

  if(person == K && generateLetter() == P) {
    alert("Prehral si")
  } else if(person == P && generateLetter() == K) {
    alert("Vyhral si")
  } else if(person == P && generateLetter() == N) {
    alert("Prehral si")
  } else if(person == N && generateLetter() == P) {
    alert("Vyhral si")
  } else if(person == N && generateLetter() == K) {
    alert("Prehral si")
  } else if(person == N && generateLetter() == N) {
    alert("Remiza")
  } else if(person == K && generateLetter() == K) {
    alert("Remiza")
  } else if(person == P && generateLetter() == P) {
    alert("Remiza")
  } else {
    alert("Vyhral si")
  }

}

showResult

