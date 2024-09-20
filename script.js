function convertTemp() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    let resultTemp = 0;

    if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            resultTemp = (inputTemp * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            resultTemp = inputTemp + 273.15;
        } else {
            resultTemp = inputTemp; // Celsius to Celsius
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            resultTemp = (inputTemp - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            resultTemp = ((inputTemp - 32) * 5/9) + 273.15;
        } else {
            resultTemp = inputTemp; // Fahrenheit to Fahrenheit
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            resultTemp = inputTemp - 273.15;
        } else if (toUnit === 'fahrenheit') {
            resultTemp = ((inputTemp - 273.15) * 9/5) +
