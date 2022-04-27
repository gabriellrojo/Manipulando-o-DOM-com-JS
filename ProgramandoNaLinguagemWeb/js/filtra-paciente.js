let filtro = document.querySelector(".filtro")

//para printar ou captar o que é digitado na busca, utilizaremos o input como evento:

filtro.addEventListener("input", function() {

    //Agora que já tenho como "capturar" o que é digitado no formulário através do evento "input", vamos fazer uma comparação com os nomes que existem na lista para que seja realizado o filtro:
    let pacientes = document.querySelectorAll(".paciente")


    pacientes.forEach(paciente => {
        let nome = paciente.querySelector(".info-nome").textContent
        let regex = new RegExp(filtro.value, "i")
        if(regex.test(nome)){
            paciente.classList.remove("invisivel")
        }else if(filtro.value.length === 0){
            paciente.classList.remove("invisivel")
        }else{
            paciente.classList.add("invisivel")
        }
    })
})




