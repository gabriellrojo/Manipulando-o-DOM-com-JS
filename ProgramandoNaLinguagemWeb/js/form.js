//Agora, vamos adicionar novos pacientes na tabela:

let botao = document.querySelector("#adicionar-paciente")

botao.addEventListener("click", event => {
    event.preventDefault() //método que evita o comportamento padrão de logo "limpar" o que foi impreso no browser

    //Vamos capturar os valores inseridos no formulário:

    let form = document.querySelector("#form-adiciona");
    
    //Características do objeto novoPaciente

    let novoPaciente = registraNovoPaciente(form)

    let erros = validaNovoPaciente(novoPaciente)
    console.log(erros)

    if(erros.length > 0){
        mensagemErro(erros)
        return 
    }

    //Agora que temos como obter os valores fornecidos ao preencher o formulário, vamos criar a nosa tr (linhas) e nossos td (célular)

    adicionaNovoPaciente(novoPaciente)

    let ul = document.querySelector("ul")
    ul.innerHTML = ""
    form.reset()

})

function registraNovoPaciente(form){
    const novoPaciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return novoPaciente
}

function criaNovaTr(paciente){
    let novaTr = document.createElement("tr");
    novaTr.classList.add("paciente")

    novaTr.appendChild(criaNovaTd(paciente.nome, "info-nome"));
    novaTr.appendChild(criaNovaTd(paciente.peso, "info-peso"));
    novaTr.appendChild(criaNovaTd(paciente.altura, "info-altura"));
    novaTr.appendChild(criaNovaTd(paciente.gordura, "info-gordura"));
    novaTr.appendChild(criaNovaTd(imc.toFixed(2), "info-imc"))

    return novaTr
}

function criaNovaTd(dado, classe){
    let novaTd = document.createElement("td")
    novaTd.textContent = dado //ADICIONANDO o valor peso à célula que guarda o peso. O mesmo vale para ALTERAR. É diferente de salvar o valor em uma variável.
    novaTd.classList.add(classe)

    return novaTd
}

function validaNovoPaciente(paciente){
    var erros = []
    
    if(!validaPeso(paciente.peso)){
        erros.push("Peso Inválido")
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura Inválida")
    }
    if(paciente.nome.length == 0){
        erros.push("Nome Inválido")
    }
    if(paciente.gordura.length == 0){
        erros.push("Valor % de Gordura Inválido")
    }
    return erros
}

function mensagemErro(erros){
    let ul = document.querySelector("#mensagem-erro")
    erros.forEach(erro => {
        let li = document.createElement("li");
        li.textContent = erro
        ul.appendChild(li)
    })
}

function adicionaNovoPaciente (paciente){
    let novosDados = criaNovaTr(paciente)
    let tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(novosDados)

}
