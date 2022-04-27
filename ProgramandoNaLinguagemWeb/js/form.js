//Agora, vamos adicionar novos pacientes na tabela:

let botao = document.querySelector("#adicionar-paciente")

botao.addEventListener("click", event => {
    event.preventDefault() //método que evita o comportamento padrão de logo "limpar" o que foi impreso no browser

    //Vamos capturar os valores inseridos no formulário:

    let form = document.querySelector("#form-adiciona");
    
    //Características do objeto novoPaciente

    let novoPaciente = registraNovoPaciente(form)

    //Agora que temos como obter os valores fornecidos ao preencher o formulário, vamos criar a nosa tr (linhas) e nossos td (célular)

    let novosDados = criaNovaTr(novoPaciente)

    //Agora para adicionar de fato o novo paciente à tabela:

    let tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(novosDados)

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
    if(validaPeso(paciente))

}