x = 0
while(x < 10){
  document.write("<br> O valor de X: " + x)
  x++
}

document.write("<hr>")

for(i=0; i < 10; i++ ){
  document.write("<br> O valor de i: " + i)
}

document.write("<hr>")

function pedir(){
  x = prompt('oque deseja pedir?')

  switch(x){
    case "0":
      alert('x vale sorvete')
      brerak

    case "1":
      alert('x vale suco')
      brerak

    case "2":
      alert('x vale coca')
      brerak

    default:
      alert('Valor invalido')
      pedir()
  }
}

function acao(){
  document.write("Executando... <br>")
}

// setInterval(acao, 1000)
// setTimeout(acao, 3000)

//WEB STORAGE
//cook
localStorage.setItem('nome', 'vitor')
localStorage.getItem('nome')
localStorage.removeItem('nome')
localStorage.idade = 25

//apenas na sessao
sessionStorage.setItem('nome', 'vitor')
sessionStorage.getItem('nome')
sessionStorage.removeItem('nome')

var nome = ''
if( typeof localStorage.nome == 'undefined'){
  localStorage.nome = prompt('Digite seu nome')
}
nome  = localStorage.nome
document.getElementById('nome').innerHTML = nome
