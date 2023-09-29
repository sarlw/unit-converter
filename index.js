/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("conversion-input")
const convertBtn = document.getElementById("convert-btn")
const resultEl = document.getElementsByTagName("p")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

convertBtn.addEventListener("click", function() {
    let conversionInput = inputEl.value
    let meterToFeet = conversionInput * 3.281
    let feetToMeter = conversionInput / 3.281
    length.textContent = `${conversionInput} meters = ${meterToFeet.toFixed(3)} feet | ${conversionInput} feet = ${feetToMeter.toFixed(3)} meters`
    
    let literToGallon = conversionInput * 0.264
    let gallonToLiter = conversionInput / 0.264
    volume.textContent = `${conversionInput} liters = ${literToGallon.toFixed(3)} gallons | ${conversionInput} gallons = ${gallonToLiter.toFixed(3)} liters`
    
    let kilosToPounds = conversionInput * 2.204
    let poundsToKilos = conversionInput / 2.204
    mass.textContent = `${conversionInput} kilos = ${kilosToPounds.toFixed(3)} pounds | ${conversionInput} pounds = ${poundsToKilos.toFixed(3)} kilos`
    
    for (let i = 0; i < resultEl.length; i++) {
        resultEl[i].style.opacity = "1"
    }
})