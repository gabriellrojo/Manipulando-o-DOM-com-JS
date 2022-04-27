//O primeiro desafio consiste em preencher o imc dos pacientes presentes na tambela. Sabe-se que o calculo do imc é feito dividindo o peso do índivido pelo quadrado de sua altura:

let pacientes = document.querySelectorAll(".paciente")

//Veja que ele me deu um array com 5 elementos e por isso vamos utilizar um laço de repetição para o preenchimento do imc de cada paciente da tabela.

for (c = 0; c < pacientes.length; c++){
    let tdPeso = pacientes[c].querySelector(".info-peso");
    let peso = tdPeso.textContent //SALVANDO o valor peso dentro da variável criada chamada peso

    let tdAltura = pacientes[c].querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = pacientes[c].querySelector(".info-imc")

    //Ao assumir os booleanos abaixo como verdadeiros, poderemos imprimir o imc na tabela através de uma condicional:

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura)

    if(!pesoValido){
        tdImc.textContent = "Peso Inválido"
        pesoValido = false
        pacientes[c].classList.add("pesoInvalido")
    }
    if(!alturaValida){
        tdImc.textContent = "Altura Inválida"
        alturaValida = false
        pacientes[c].classList.add("alturaInvalida")
    }
    if(pesoValido && alturaValida){
        tdImc.textContent = calculaImc(peso, altura)
        
    }
}

function calculaImc(peso, altura){
    imc = peso / (altura*altura)
    return imc.toFixed(2)
}

function validaPeso(peso){
    if(peso > 0 && peso < 500){
        return true
    } else {
        return false
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3){
        return true
    } else {
        return false
    }
}