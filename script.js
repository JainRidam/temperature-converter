document.addEventListener("DOMContentLoaded", function () {
  const convertBtn = document.getElementById("convertBtn");
  convertBtn.addEventListener("click", function () {
    convertTemperature();
  });
});

function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById("inputTemp").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  let result;

  if (fromUnit === "celsius" && toUnit === "fahrenheit") {
    result = (inputTemp * 9) / 5 + 32;
  } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
    result = ((inputTemp - 32) * 5) / 9;
  } else {
    result = inputTemp; // No conversion needed
  }

  document.getElementById(
    "result"
  ).textContent = `${inputTemp} ${fromUnit} is ${result.toFixed(2)} ${toUnit}`;
}
