const john = document.getElementById("john");
const mike = document.getElementById("mike");
const gewinnerAnzeigen = document.getElementById("gewinner")

// John
const johnAlter = 22
const johnGröße = 170

// Mike
const mikeAlter = 34
const JohnGröße = 168

// Funktion Punkte Berechnen
function berechnePunkte() {
    const ergebnisJohn = (johnAlter * 5) + 170
    const ergebnisMike = (mikeAlter * 5) + 168
        if (ergebnisJohn > ergebnisMike) {
             gewinnerAnzeigen.innerHTML = "John mit: " + ergebnisJohn;
        }   else if (ergebnisJohn < ergebnisMike) {
             gewinnerAnzeigen.innerHTML = "Mike mit: " + ergebnisMike
        }   else if (ergebnisJohn === ergebnisMike) {
            gewinnerAnzeigen.innerHTML = "Unentschieden, beide haben folgende Punktzahl: " + ergebnisJohn + " und " + ergebnisMike;
        } 

}

berechnePunkte ()