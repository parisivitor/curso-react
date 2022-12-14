function minhaLista(nomes){
  console.log(nomes)
}
function minhaLista1(...nomes){
  console.log(nomes)
}
// minhaLista('Matues', 'Claudia', 'Carol')
minhaLista(1,2,3,4,5,6)
minhaLista1('Matues', 'Claudia', 'Carol')
// minhaLista1(1,2,3,4,5,6)

function cadastrarUsuario(usuarios, ...novosUsuarios){
  console.log([...usuarios, ...novosUsuarios] )
}

let usuarios = ['vitor', 'iago']

let novosUsuarios = cadastrarUsuario(usuarios, 'carol', ' vinicios')
