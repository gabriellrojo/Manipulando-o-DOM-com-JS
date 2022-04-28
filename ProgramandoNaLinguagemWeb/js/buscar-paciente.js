let botaoBusca = document.querySelector(".busca-paciente")

//Vamos criar o evento de click para esse botão:

botaoBusca.addEventListener("click", () => {
    
    //O próximo passo é realizar a requisição e para isso usamos o XLMHtmlRequest (pode ser também o fetch)

    var xhr = new XMLHttpRequest;
    //Vamos abrir a requisição:
    xhr.open ("GET", "https://api-pacientes.herokuapp.com/pacientes") //vai o que queremos fazer, no caso é pegar (get), as informações de uma api (interface que mostra apenas dados, funcoes, etc de determinado programa sem todo o processo que envolve esses dados em si)

    //Feito isso, agora preciamos receber essa requisição:
    xhr.send();

    //Vamos carregar essa requisição para que era apareça no console:

    xhr.addEventListener("load", () => {
        console.log(xhr.responseText)
        console.log(typeof xhr.responseText)
        //Veja que esse objeto está no formado JSON (JavaScript object notation) e o JS nos retorna esse objeto como o tipo string. A notação JSON é muito utilizada para requisições. Vamos trasformar essa string em um objeto de fato
        let resposta = JSON.parse(xhr.responseText)
        console.log(resposta) //Perfeito. Agora temos uma string com 7 objetos.

        //Vamos adicionar esses pacientes na tabela:
        resposta.forEach(paciente => {
            adicionaNovoPaciente(paciente)
        })

        //Vamos agora capturar possíveis erros:

        if(xhr.status == 200){
            let resposta = JSON.parse(xhr.responseText)
            console.log(resposta) //Perfeito. Agora temos uma string com 7 objetos.
            console.log(xhr.status)

            //Vamos adicionar esses pacientes na tabela:
            resposta.forEach(paciente => {
                adicionaNovoPaciente(paciente)
            })

        }else {
            console.log(xhr.status)
            console.log(xhr.responseText)
        }
        
    })
})

