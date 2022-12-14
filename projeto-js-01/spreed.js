let primeiros = [1,2,3]
console.log(primeiros)
let numeros  = [...primeiros,4,5,6]
console.log(numeros)
let numeros2 = [primeiros,4,5,6]
console.log(numeros2)


const pessoa = {
  nome: 'vitor',
  idade: 27,
  cargo: 'programador'
}
console.log(pessoa)

let novaPessoa = {
  ...pessoa,
  sobrenome: 'parisi',
  cidade: 'sjrp'
}
console.log(novaPessoa)

let novaPessoa2 = {
  pessoa,
  sobrenome: 'parisi',
  cidade: 'sjrp'
}
console.log(novaPessoa2)


function cadastroPessoa(info){
  let novosDados = {
    codigo: 1,
    ...info,
    criado_em: new Date('Jul 12 2011').toDateString(),
    status: 'criado'
  }
  return novosDados
}
console.log(cadastroPessoa(
  {
    nome: 'Vitor',
    sobrenome: 'parisi',
    idade: 27
  }
))
