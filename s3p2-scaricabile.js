// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function cambiaTitolo() {
    let titolo = document.getElementById("titolo")
    titolo.innerText = "Hai cambiato il titolo"
}

function cambiaColorePagina(){
    let colore = document.querySelector("body")
    colore.style.backgroundColor = "red"
}

function cambiaIndirizzo(){
    let indirizzo = document.querySelector("span")
    indirizzo.innerHTML = "Via roma 56 <br>"
}

function cambiaCss() {
    let elementiAmazon = document.querySelectorAll(".amazon a")

    for (let i = 0; i < elementiAmazon.length; i++) {
        elementiAmazon[i].classList.add("color")
    }
}

function visibileInvisibile(){
    let immagini = document.querySelectorAll(".immagini img")
    
    for (let i = 0; i < immagini.length; i++) {
        immagini[i].classList.toggle("invisibileVisibile")
    }
} 

function coloreRandom(){
    let prezzo = document.querySelectorAll(".prezzo")

    let colori = ['#FF5733', '#33FF57', '#5733FF', '#FF33F5', '#33E5FF', '#D933FF', '#FF5733', '#33FF57', '#5733FF', '#FF33F5', '#33E5FF', '#D933FF'];

    for (let i=0;i<prezzo.length;i++){
        let coloreCasuale = colori[Math.floor(Math.random() * colori.length)]
        prezzo[i].style.color = coloreCasuale
    }
   
}