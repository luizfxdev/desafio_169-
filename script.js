// Seleciona os elementos do DOM
const stoneAInput = document.getElementById('stoneA')
const stoneBInput = document.getElementById('stoneB')
const stoneCInput = document.getElementById('stoneC')
const decipherBtn = document.getElementById('decipherBtn')
const returnBtn = document.getElementById('returnBtn')
const resultDiv = document.getElementById('result')
const calculationDiv = document.getElementById('calculation')

// Função para verificar o triângulo
function checkTriangle(a, b, c) {
  // Encontra os dois menores números
  const min1 = Math.min(a, b, c)
  const min2 = [a, b, c].sort((x, y) => x - y)[1]

  // Encontra o maior número
  const max = Math.max(a, b, c)

  // Verifica se a soma dos dois menores é maior que o maior
  return min1 + min2 > max
}

// Função para formatar a explicação do cálculo
function formatCalculation(a, b, c, result) {
  const sorted = [a, b, c].sort((x, y) => x - y)
  return `Pedras ordenadas: ${sorted.join(', ')}<br>
            Soma das duas menores: ${sorted[0]} + ${sorted[1]} = ${sorted[0] + sorted[1]}<br>
            Comparação com a maior: ${sorted[0] + sorted[1]} > ${sorted[2]} → ${result ? 'Verdadeiro' : 'Falso'}`
}

// Event listener para o botão Decifrar
decipherBtn.addEventListener('click', () => {
  // Obtém os valores das pedras
  const a = parseInt(stoneAInput.value)
  const b = parseInt(stoneBInput.value)
  const c = parseInt(stoneCInput.value)

  // Verifica se todos os valores são números válidos
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    resultDiv.textContent = 'Por favor, insira valores válidos para todas as pedras.'
    calculationDiv.textContent = ''
    return
  }

  // Verifica a condição do triângulo
  const isPossible = checkTriangle(a, b, c)

  // Exibe o resultado
  resultDiv.textContent = isPossible ? 'Sim' : 'Não'

  // Exibe o cálculo
  calculationDiv.innerHTML = formatCalculation(a, b, c, isPossible)
})

// Event listener para o botão Retornar
returnBtn.addEventListener('click', () => {
  // Limpa os inputs e resultados
  stoneAInput.value = ''
  stoneBInput.value = ''
  stoneCInput.value = ''
  resultDiv.textContent = ''
  calculationDiv.textContent = ''

  // Foca no primeiro input
  stoneAInput.focus()
})

// Adiciona animação aos inputs quando focados
;[stoneAInput, stoneBInput, stoneCInput].forEach(input => {
  input.addEventListener('focus', () => {
    input.style.boxShadow = '0 0 10px #f5f5f5'
    input.style.borderColor = '#f5f5f5'
  })

  input.addEventListener('blur', () => {
    input.style.boxShadow = 'none'
    input.style.borderColor = '#f5f5f5'
  })
})
