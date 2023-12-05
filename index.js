var cetadireita = window.document.getElementById("ceta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var cetaesquerda = window.document.getElementById("ceta-esquerda")

function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    cetadireita.style ="display:none"
    cetaesquerda.style ="display:flex"
}

function RolarParaEsquerda() {
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    cetadireita.style ="display:flex"
    cetaesquerda.style ="display:none"
}
