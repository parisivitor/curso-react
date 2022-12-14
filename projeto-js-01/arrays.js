var lista = ['vitor', 'carol', 'iago', 'joao', 15]
var result = lista.indexOf('vitor')
lista[result]
lista.pop() //dropa o ultimo
lista.shift() //dropa o primeiro
lista[lista.indexOf('carol')] = ' carol parisi'
lista.push('vitor') // adiciona na ultima posicao
if(lista.indexOf('vitor') > -1){
  alert('esta na posicao: '+ lista.indexOf('vitor'))
}else{
  alert('nao encontrado')
}
document.write(lista.join(', '))

// operando arrays
const lista1 = [1,2,3,4,5,6]

const novaLista = lista1.map(function(item){
  return item * 2
})

const novaLista2 = lista1.map(function(item, index){
  return item + index
})

console.log(novaLista)
console.log(novaLista2)


const soma = lista1.reduce(function(total, proximoValue){
  // console.log(total + proximoValue)
  return total + proximoValue
})

console.log(soma)

const find = lista1.find(function(item){
  return item === 6
})
console.log(find)

// Funcoes anonimas


function adicionar(...numeros){
  let total = numeros.reduce((total, proximo) =>{
    let soma = total + proximo
    return soma
  })
  console.log(total)
}

function adicionar1(...numeros){
  let total = numeros.reduce((total, proximo) => total + proximo)
  console.log(total)
}

adicionar(1,2,3,4,5,5,6,7,8,9)
adicionar1(1,2,3,4,5,5,6,7,8,9)
