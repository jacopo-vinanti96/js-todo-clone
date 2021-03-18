// Dichiarazione variabili
var addProject = $('#add-project'),
    addValue,
    today = $('#today'),
    valid;


// Dichiarazione funzione di controllo del testo
function inputControl (word) {

  // Controllo se l' input è vuoto
  if (word.length === 0 || !word.trim()) {
    alert("Please enter a word");
  } else {
    valid = true;
    return word;
  }
}


// Onclick addProject legge valore e lo aggiunge come nuova riga di testo
addProject.on('keydown', function (e) {
  valid = false;
  if ( e.keyCode == 13 ) {
    addValue = addProject.val();
    addValue = inputControl(addValue);
    console.log(addValue);
  }
});
