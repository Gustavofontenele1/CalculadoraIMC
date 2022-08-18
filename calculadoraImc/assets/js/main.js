const form = document.querySelector(".formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`
  setResultado(msg, true);
});

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) {
    return nivel[5];
  }
  if (imc >= 34.9) {
    return nivel[4];
  }
  if (imc >= 29.9) {
    return nivel[3];
  }
  if (imc >= 24.9) {
    return nivel[2];
  }
  if (imc >= 18.5) {
    return nivel[1];
  }
  if (imc < 18.5) {
    return nivel[0];
  }
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criarParagrafo() {
  const paragrafo = document.createElement("p");
  return paragrafo;
}

function setResultado(msg, isValid) {
  const resultadoImc = document.querySelector(".resultado");
  resultadoImc.innerHTML = "";

  const paragrafo = criarParagrafo();

  if (isValid) {
    paragrafo.classList.add('paragrafo-resultado-true')
  }else {
    paragrafo.classList.add('paragrafo-resultado-false')
  }

  paragrafo.innerHTML = msg;
  resultadoImc.appendChild(paragrafo);
}

// function imc() {
//     const form = document.querySelector('.form');
//     function calculoImc (event) {
//         event.preventDefault();
//         const peso = document.querySelector('#peso')
//         const altura = document.querySelector('#altura')
//         const resultado = document.querySelector('.resultado')

//         const resultadoImc = (peso.value) / (altura.value * altura.value);
//         if (resultadoImc < 18.5) {
//             resultado.innerHTML += `<p>${resultadoImc.toFixed(2)}, Abaixo do peso. </p>`

//         }else if (resultadoImc >= 18.5 && resultadoImc <= 24.9) {
//             resultado.innerHTML += `<p>Seu IMC é ${resultadoImc.toFixed(2)}, (Peso normal). </p>`
//         }else if (resultadoImc >= 25 && resultadoImc <= 29.9) {
//             resultado.innerHTML += `<p>Seu IMC é ${resultadoImc.toFixed(2)}, (Sobrepeso). </p>`
//         }else if (resultadoImc >= 30 && resultadoImc <= 34.9) {
//             resultado.innerHTML += `<p>Seu IMC é ${resultadoImc.toFixed(2)}, (Obesidade grau 1). </p>`
//         }else if (resultadoImc >= 35 && resultadoImc <= 39.9) {
//             resultado.innerHTML += `<p>Seu IMC é ${resultadoImc.toFixed(2)}, (Obesidade grau 2). </p>`
//         }else if (resultadoImc > 40) {
//             resultado.innerHTML += `<p>Seu IMC é ${resultadoImc}, (Obesidade grau 3). </p>`
//         }else {
//             resultado.innerHTML += `<p>Conta inválida. </p>`
//         }

//     }
//     form.addEventListener('submit', calculoImc);
// }

// imc();
