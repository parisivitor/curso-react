const pessoa = {
  nome: 'vitor',
  sobrenome: 'parisi',
  idade: 27,
  cargo: 'junim'
}

console.log(pessoa)
let { nome } = pessoa;
console.log(nome)
let { sobrenome } = pessoa;
console.log(sobrenome)
let { idade, cargo } = pessoa;
console.log(`${idade} e  ${cargo}` )

let{ cargo:programador } = pessoa
console.log(pessoa)
console.log(programador)
cargo = 'louco'
console.log(cargo)
console.log(pessoa)
///

let nomes = ['vitor', 'parisi', 27]

let { 1:segundonome } = nomes
console.log(segundonome)

let { 0:vitor, 2:anos } = nomes
console.log(`${vitor} tem ${anos} anos`)

let [ nome1, sobrenome1, idade1] = nomes
console.log(`${nome1} ${sobrenome1}, ${idade1}`)
