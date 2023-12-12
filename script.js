
const calcular = document.querySelector('.calcular')
function calcularImc() {
    nome = document.querySelector("#name").value;
    altura = document.querySelector("#altura").value;
    peso = document.querySelector("#peso").value;
    res = document.querySelector(".res")


if(nome == '' || altura == '' || peso == ''){
    res.textContent = 'Preencha os campos corretamente'
} else{
    let valorImc = (peso / (altura * altura)).toFixed(2);

    if(valorImc <= 16.9){
        res.textContent = `${nome}, seu IMC é ${valorImc} e você esta muito abaixo do peso`
    } else if(valorImc <= 18.4 && valorImc >= 17) {
        res.textContent = `${nome}, seu IMC é ${valorImc} e você esta abaixo do peso`
    } else if(valorImc <= 24.90 && valorImc >= 18.5) {
        res.textContent = `${nome}, seu IMC é ${valorImc} e você esta com Peso normal`
    }else if(valorImc <= 29.9 && valorImc >= 25) {
        res.textContent = `${nome}, seu IMC é ${valorImc} e você esta Acima do peso`
    }else if(valorImc <= 34.9 && valorImc >= 30) {
        res.textContent = `${nome}, seu IMC é ${valorImc} e você esta com Obesidade grau I`
    } else if(valorImc <= 40 && valorImc >= 35) {
        res.textContent = `${nome}, seu IMC é ${valorImc} e você esta comObesidade grau II`
    } else if(valorImc > 40) {
        res.textContent = `${nome}, seu IMC é ${valorImc} e você esta com Obesidade grau III`
    } 
    
}
}
calcular.addEventListener('click', calcularImc);