// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.


// ACQUISIZIONE DATI
var btnGenera = document.getElementById('genera'); 
console.log(btnGenera);

btnGenera.addEventListener('click',
    function() {
        var name = document.getElementById('nome').value;
        var km = document.getElementById('km').value;
        var select_eta = document.getElementById('seleziona-eta').value;
        var display_ticket = document.getElementById('main-bottom');
        display_ticket.style.display = 'block';
    }
)

// CANCELLA DATI
var btnAnnulla = document.getElementById('annulla');

btnAnnulla.addEventListener('click',
    function() {
        var display_ticket = document.getElementById('main-bottom');
        display_ticket.style.display = 'none';

        //svuoto imput
        document.getElementById('nome').value = '';
        document.getElementById('km').value = '';
        document.getElementById('seleziona-eta').value = '';
    }
)
