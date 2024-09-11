var numero = ''
var operadorAtual = ''
var numeroAnterior = ''

//funcao pra adicionar os numeros no display
function addNumero(caractere){
    numero += caractere
    document.getElementById('display').value = numero
}

//funcao pra limpar display quando clicar no botao C
function limparDisplay(){
    numero = ''
    operadorAtual = ''
    numeroAnterior = ''
    document.getElementById('display').value = ''
}

//apagar o ultimo caractere digitado
function apagar(){
    let display = document.getElementById('display').value
    document.getElementById('display').value = display.slice(0,-1)
}

//funcao para os operadores
function operador(op){
    if(numero !== ''){
        operadorAtual = op
        numeroAnterior = numero
        numero = ''
        document.getElementById('display').value = ''
    }
}


//função para calcular
function calcular(){
    let resultado = 0
    let atual = parseFloat(numero)
    let anterior = parseFloat(numeroAnterior)

    if (operadorAtual === '+') {
        resultado = anterior + atual
    }else if (operadorAtual === '-'){
        resultado = anterior - atual
    }else if (operadorAtual === '*'){
        resultado = anterior * atual
    }else if(operadorAtual === '/'){
        if(atual === 0){
            document.getElementById('display').value = 'Erro: divisão por zero'
            return
        }
        resultado = anterior / atual
    }

    document.getElementById('display').value = resultado
    numero = resultado.toString()
    //resetar operador atual e numero anterior
    operadorAtual = ''
    numeroAnterior = ''
}