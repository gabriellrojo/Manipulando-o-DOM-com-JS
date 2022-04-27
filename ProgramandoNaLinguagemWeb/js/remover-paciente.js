let tabela = document.querySelector("table")

tabela.addEventListener("dblclick", event => {
    event.target.parentNode.classList.add("fadeout") //Através do CSS utilizamos o recurso da transição para eliminar os dados.
    setTimeout(() => {
        event.target.parentNode.remove() //essa função permite a remoção das td e tl, além do seu conteúdo.
    },500)
    //event.target.parentNode.remove()
    //o target é o meu alvo do clique (td), o parentNode é o pai di target(tr = excluirá todo row)
    //a palavra reservada this, utilizada anteriormente, diz respeito ao evento e não ao alvo. No caso, se utilizarmos o this, ele excluirá toda tabela, como no exemplo anterior.
})

/*pacientes.forEach(paciente => {
    paciente.addEventListener("dblclick", function() {
        this.remove()
    })
})*/