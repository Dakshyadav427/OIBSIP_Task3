document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");
    const temperatureInput = document.getElementById("temperatureInput");
    const unitSelect = document.getElementById("unitSelect");
    const resultDiv = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const selectedUnit = unitSelect.value;
        let convertedTemperature = 0;
        let resultUnit = "";

        if (isNaN(temperature)) {
            resultDiv.textContent = "Please enter a valid number";
            return;
        }

        if (selectedUnit === "celsius") {
            convertedTemperature = (temperature - 32) * (5 / 9);
            resultUnit = "°C";
        } else if (selectedUnit === "fahrenheit") {
            convertedTemperature = (temperature * 9 / 5) + 32;
            resultUnit = "°F";
        }

        resultDiv.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
    });
});
