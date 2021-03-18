// Dichiarazione variabili
var addProject = $('#add-project'),
    addValue,
    projectDate,
    templateLine = $('.list-template .list-element'),
    temporaryLine,
    today = $('#today'),
    tomorrow = $('#tomorrow'),
    valid;



// Dichiarazione funzione di controllo del testo
function inputControl (word) {

  // Controllo se l' input è vuoto
  if (word.length === 0 || !word.trim()) {
    alert("Please enter a word");
  } else {
    valid = true;
  }
}


// Onclick addProject legge valore e lo aggiunge come nuova riga di testo
addProject.on('keydown', function (e) {
  valid = false;
  if ( e.keyCode == 13 ) {
    addValue = addProject.val();
    inputControl(addValue);
    console.log(addValue);
  }
  if ( valid == true ) {
    projectDate = prompt("Insert the date\n(Example: today, tomorrow, 31/12/1999)");
    temporaryLine = templateLine.clone();
    temporaryLine.prepend(addValue);
    if ( projectDate.toLowerCase() == "today" ) {
      today.append(temporaryLine);
    } else if ( projectDate.toLowerCase() == "tomorrow" ) {
      tomorrow.append(temporaryLine);
    // } else {
    //   projectDate
    // }
    }
  }
});
