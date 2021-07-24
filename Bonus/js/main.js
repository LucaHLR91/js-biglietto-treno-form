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
        display_ticket.className = this.classList + ' show';

        //CALCOLO PREZZI E STAMPO A VIDEO
        var price_trip = km * km_price;
        if (select_eta == 'minorenne'){
            var price_min = (price_trip - ((price_trip * 20) / 100)).toFixed(2);
            document.getElementById('price').innerHTML = price_min + '€'; 
            document.getElementById('offerta').innerHTML = 'Sconto Minorenni'
        }else if (select_eta == 'over65'){
            var price_over = (price_trip - ((price_trip * 40) / 100)).toFixed(2);
            document.getElementById('price').innerHTML = price_over + '€'; 
            document.getElementById('offerta').innerHTML = 'Sconto Over65'
        }else{
            price_trip.toFixed(2);
            document.getElementById('price').innerHTML = price_trip + '€'; 
            document.getElementById('offerta').innerHTML = 'Biglietto Standard'
        }

        //NUMERO RANDOM CARROZZA E TRENO E NOME PASSEGGERO
        document.getElementById('nome_passeggero').innerHTML = nome;
        var numero_carrozza = Math.floor(Math.random() * 9) + 1;
        document.getElementById('carrozza').innerHTML = numero_carrozza;
        var numero_treno = Math.floor(Math.random() * (10000- 9000)) + 9000;
        document.getElementById('treno').innerHTML = numero_treno;
    }


    
)


// CANCELLA DATI
var btnAnnulla = document.getElementById('annulla');

btnAnnulla.addEventListener('click',
    function() {
        var display_ticket = document.getElementById('ticket');
        display_ticket.style.display = 'none';

        //svuoto imput
        document.getElementById('nome').value = '';
        document.getElementById('km').value = '';
        document.getElementById('eta').value = '';
    }
)