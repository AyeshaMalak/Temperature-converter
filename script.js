function calculateTemp() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;

    let convertedResult = 0;

    if (unitFrom === 'celsius') {
        if (unitTo === 'fahrenheit') {
            convertedResult = (tempInput * 9 / 5) + 32;
        } else if (unitTo === 'kelvin') {
            convertedResult = tempInput + 273.15;
        } else {
            convertedResult = tempInput; // Celsius to Celsius
        }
    } else if (unitFrom === 'fahrenheit') {
        if (unitTo === 'celsius') {
            convertedResult = (tempInput - 32) * 5 / 9;
        } else if (unitTo === 'kelvin') {
            convertedResult = ((tempInput - 32) * 5 / 9) + 273.15;
        } else {
            convertedResult = tempInput; // Fahrenheit to Fahrenheit
        }
    } else if (unitFrom === 'kelvin') {
        if (unitTo === 'celsius') {
            convertedResult = tempInput - 273.15;
        } else if (unitTo === 'fahrenheit') {
            convertedResult = ((tempInput - 273.15) * 9 / 5) + 32;
        } else {
            convertedResult = tempInput; // Kelvin to Kelvin
        }
    }

    document.getElementById('convertedResult').innerText = convertedResult.toFixed(2);
}
