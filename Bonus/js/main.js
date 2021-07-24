// Ciao ragazzi,
// esercizio di oggi: calcolo del prezzo del biglietto del treno con form
// cartella/repo: js-biglietto-treno-form
// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

// ACQUISIZIONE DATI
var btnGenera = document.getElementById('genera');

var km_price = 0.21;

btnGenera.addEventListener('click',
    function() {
        var nome = document.getElementById('nome').value;
        var km = document.getElementById('km').value;
        var select_eta = document.getElementById('eta').value;
        var display_ticket = document.getElementById('ticket');
        display_ticket.style.display = 'block';
    }
)