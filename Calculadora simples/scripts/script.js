//funcao pra adicionar os numeros no display
function addNumero(caracter){
    document.getElementById("diplay").value += caractere
}

//funcao pra limpar quando clicar no botao
function limparDisplay(){
    document.getElementById("display").value=""
}

//apagar o ultimo caractere digitado
function apagar(){
    let display = document.getElementById("display").value
    document.getElementById("display").value = display.slice(0,-1)
}

//funcao para os operadores
function operador(op){
    if (numero != ""){
        operadorAtual = op
        document.getElementById("display").value = ""
    }
}