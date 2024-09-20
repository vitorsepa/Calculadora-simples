var numero = ''
var operadorAtual = ''
var numeroAnterior = ''

// Função para adicionar os números no display
function addNumero(caractere) {
    numero += caractere
    document.getElementById('display').value = numero
}

// Função para limpar o display
function limparDisplay() {
    numero = ''
    operadorAtual = ''
    numeroAnterior = ''
    document.getElementById('display').value = ''
}

// Apagar o último numero digitado
function apagar() {
    numero = numero.slice(0, -1)
    document.getElementById('display').value = numero
}

// Função para os operadores
function operador(op) {
    if (numero !== '') {
        operadorAtual = op
        numeroAnterior = numero
        numero = ''
        document.getElementById('display').value = ''
    }
}

// Função para calcular
function calcular() {
    let resultado = 0
    let atual = parseFloat(numero)
    let anterior = parseFloat(numeroAnterior)

    if (operadorAtual === '+') {
        resultado = anterior + atual

    } else if (operadorAtual === '-') {
        resultado = anterior - atual

    } else if (operadorAtual === '*') {
        resultado = anterior * atual

    } else if (operadorAtual === '√') {
        if (anterior >= 0) {
            resultado = Math.sqrt(anterior)
        } else {
            document.getElementById('display').value = 'Erro'
            return
        }

    } else if (operadorAtual === '/') {
        if (atual === 0) {
            document.getElementById('display').value = 'Erro: divisão por zero'
            return
        }
        resultado = anterior / atual

    } else if (operadorAtual === '%') {
        resultado = (anterior * atual) / 100

    } else {
        document.getElementById('display').value = 'Erro'
        return
    }

    document.getElementById('display').value = resultado
    numero = resultado.toString()
    operadorAtual = ''
    numeroAnterior = ''
}

// Função para calcular porcentagem
function calcularPorcentagem() {
    if (estadoCalculadora.numeroAnterior !== '' && estadoCalculadora.numero !== '') {
        let porcentagem = (parseFloat(estadoCalculadora.numeroAnterior) * parseFloat(estadoCalculadora.numero)) / 100;
        estadoCalculadora.numero = porcentagem.toString();
        estadoCalculadora.expressao += ' % = ' + porcentagem; // Atualiza a expressão com o resultado
        atualizarDisplay();
    } else {
        exibirErro('Erro: insira números antes de calcular a porcentagem');
    }
}