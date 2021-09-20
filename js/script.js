function ConverterKelvin() {
  var valorElement = document.getElementById("temp");
  var temperatura = parseFloat(valorElement.value);
  console.log(temperatura);

  var kelvin = temperatura + 273.15;

  var elementValorConvertido = document.getElementById("kelvin");
  var valorConvertido = "O resultado em Kelvin é " + kelvin + " °";
  elementValorConvertido.innerHTML = valorConvertido;
}

function Converterfarenheit() {
  var valorElement = document.getElementById("temp");
  var temperatura = parseFloat(valorElement.value);
  console.log(temperatura);

  var farenheit = temperatura * 1.8 + 32;

  var elementValorConvertido = document.getElementById("farenheit");
  var valorConvertido = "O resultado em Farenheit é " + farenheit + " °";
  elementValorConvertido.innerHTML = valorConvertido;
}