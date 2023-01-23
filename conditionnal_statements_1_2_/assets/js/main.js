// Elemente ins js holen

const number = document.getElementById("number")
const button = document.querySelector("button")
let ergebnis = document.getElementById("ergebnis")

// funktion weather 

function weather() {
    userInput = number.value;
    if (userInput >= 8 && userInput <= 10) {
            ergebnis.innerHTML = "super";
    }   else if (userInput >= 6 && userInput <= 7) {
            ergebnis.innerHTML = "gut";
    }    else if (userInput >= 3 && userInput <= 5) {
            ergebnis.innerHTML = "okay";
    }   else if (userInput >= 0 && userInput <= 2) {
            ergebnis.innerHTML = "schlecht";
    }
        else {
            ergebnis.innerHTML = "ungültige Eingabe"
        }
}