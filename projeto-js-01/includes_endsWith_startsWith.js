let nomes = [ 'vitor', 'ricardo', 'joao']

console.log(nomes.includes('vitor'))
console.log(nomes.includes('vito'))


let vitor = 'vitor'
console.log(vitor.endsWith('tor'))


let maria = 'maria'
console.log(maria.startsWith('mar'))


console.log(nomes.some(nome => nome === 'vitor'))
console.log(nomes.some(nome => nome === 'maria'))

let pessoas = [
  {
    nome: 'vitor',
    idade: 17
  },
  {
    nome: 'carol',
    idade: 22
  },
  {
    nome: 'pedro',
    idade: 33
  }
]
maior = pessoas.every(pessoa => pessoa.idade >= 18)
console.log(maior)


pessoas.forEach(pessoa => {
  if(pessoa.idade >= 18){
    console.log(`${pessoa.nome} eh maior de idade`)
  }else{
    console.log(`${pessoa.nome} nao eh maior de idade`)
  }
})
