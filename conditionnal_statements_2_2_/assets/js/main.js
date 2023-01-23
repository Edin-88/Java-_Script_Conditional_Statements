// Elemente ins js holen
console.log("Hallo");

let range = document.querySelector("#aqi");
const levelHealthConcern = document.querySelector("#healthConcern")
const levelHealthEffect = document.querySelector("#healthEffect")
const body = document.querySelector("#body")

function checkAirQuality () {
    console.log(range.value);

    if (range.value <= 50) {
        levelHealthConcern.innerHTML = "Good"
        levelHealthEffect.innerHTML = "Little or no risk"
        body.style.backgroundColor="green"
    }   else if (range.value >= 51 && range.value <= 100) {
        levelHealthConcern.innerHTML = "Moderate"
        levelHealthEffect.innerHTML = "Acceptable quality"
        body.style.backgroundColor="yellow"
    }   else if (range.value >= 100 && range.value <= 150) {
        levelHealthConcern.innerHTML = "Unhealthy for sensitive groups"
        levelHealthEffect.innerHTML = "Generable publics not likely affected"
        body.style.backgroundColor="orange"
    }   
}

checkAirQuality()