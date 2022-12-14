// comentario

/*
mais comentario
*/

// var idaide = prompt('Digite sua idada')
// alert(idaide)

document.write("<h1> Logo </h1")
// document.write("<img src='https://www.google.com/logos/google.jpg' />")
function entrar(){
  var area = document.getElementById('area')
  var texto = prompt('Digite seu nome')

  if(texto == '' || texto == null){
    alert('Campo deve ser preenchido')
    area.innerHTML = 'Bem vindo...'
  }else{
    area.innerHTML = 'Bem vindo ' + texto
  }
}

function entrar2(nome){
  var texto = prompt('Digite seu sobrenome')
  var area2 = document.getElementById('area2')

  area2.innerHTML ='Bem vindo ' + nome + ' ' + texto
}

function renomear(){
  var button = this.innerHTML
  var texto = prompt('Qual deve ser o nome desse botao?')

  this.innerHTML = texto

}
