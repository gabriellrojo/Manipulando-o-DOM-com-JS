let filtro = document.querySelector(".filtro")

//para printar ou captar o que é digitado na busca, utilizaremos o input como evento:

filtro.addEventListener("input", function() {

    //Agora que já tenho como "capturar" o que é digitado no formulário através do evento "input", vamos fazer uma comparação com os nomes que existem na lista para que seja realizado o filtro:
    let pacientes = document.querySelectorAll(".paciente")

    if(filtro.value.length > 0){
        for(c=0; c<pacientes.length; c++){
            let tdNome = pacientes[c].querySelector(".info-nome");
            let nome = tdNome.textContent
            let regex = new RegExp (filtro.value, "i") //Utilizando Regex. "i" = case não sensitive
            if(!regex.test(nome)){
                pacientes[c].classList.add("invisivel")
            }else{
                pacientes[c].classList.remove("invisivel")
            }
        }
    }else{
        for(c=0; c<pacientes.length; c++){
            pacientes[c].classList.remove("invisivel")
        }
    }

})




