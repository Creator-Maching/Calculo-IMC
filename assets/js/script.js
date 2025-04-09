function envioDados(dados) {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");

    function ativarEvento(evento){
        evento.preventDefault()

        const peso = Number(document.querySelector(".peso").value);
        const altura = Number(document.querySelector(".altura").value);
        const imc = peso / (altura * altura);

          resultado.innerHTML = "";

        if (imc < 18.5){
            console.log("Você está abaixo do peso");
            resultado.innerHTML += `<h1> Você está abaixo do peso ele é: <br> ${imc.toFixed(2)}</h1>`;
        } else if (imc >= 18.5 && imc <= 24.9) {
            console.log("Você tem um peso normal");
            resultado.innerHTML +=`<h1>Você tem um peso normal ele é: <br> ${imc.toFixed(2)}</h1>`;
        } else if (imc >= 25 && imc <= 29.9 ) {
            console.log("Você está com Sobrepeso");
            resultado.innerHTML += `<h1>Você está com Sobrepeso ele é: <br> ${imc.toFixed(2)}</h1>`;            
        } else if (imc >= 30 && imc <= 34.5 ) {
            console.log("Você está com Obsidade grau 1");
            resultado.innerHTML += `<h1>Você está com Obsidade grau 1: <br> ${imc.toFixed(2)}</h1>`; 
        } else if (imc >= 35 && imc <= 39.9 ) {
            console.log("Você está com Obsidade grau 2");
            resultado.innerHTML += `<h1>Você está com Obsidade grau 2 <br> ${imc.toFixed(2)}</h1>`; 
        } else if (imc >= 40){
            console.log("Você está com Obsidade grau 3");
            resultado.innerHTML += `<h1>Você está com Obsidade grau 3 <br> ${imc.toFixed(2)}</h1>`;
        } else{
            resultado.innerHTML += "Erro";
        }
    }
    form.addEventListener("submit", ativarEvento);
}
envioDados();
