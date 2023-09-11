let usuario = []
let usuarioIdade = []

alert('Cadastro de Usuários')

while (true){
    var menu = prompt('Digite 1 para adicionar um usuário, \nDigite 2 para listar os usuários, \nDigite 3 para mostrar um usuário e sua idade, \nDigite 4 para remover o usuário do sistema, \nDigite 5 para sair do sistema');
        if (menu === '' || menu === null){
            alert('Tente usar as opções disponíveis com os números de 1 a 4')
            console.log(menu)
        } else {
            
    if (menu === '1'){
        quantidade = prompt('Quantos usuários você quer registrar?')
            if (quantidade == '' || quantidade === null){
                alert('Digite somente números, tente novamente.')
            } else{
                for (let i = 0; i < quantidade; i++){
                    var nome = prompt('Digite o nome do usuário:')
                        if (nome !== '' && nome !== null){
                            usuario.push(nome)
                            console.log(usuario)
                        } else {
                            alert('Dados inválidos, tente novamente depois')
                        }

                    var idade = prompt('Digite a idade do usuário:')
                        if (nome === '' && nome !== null){
                            alert('Sem o nome de usuário, a opção de idade fica indisponível, tente novamente depois.')
                        } else if (idade !== '' && idade !== null){
                            usuarioIdade.push(idade)
                            console.log(usuarioIdade)
                        } else{
                            alert('Dados inválidos, tente novamente depois')
                        }
                        
                }
            }
    }

    if (menu === '2'){
        if (usuario.length === 0 || usuarioIdade.length === 0){
            alert('Ainda não tem usuários cadastrados')
        } else{
            alert(`Nomes: ${usuario} | Idades: ${usuarioIdade} \n`)
        }
    }

    if (menu === '3'){
        let info = prompt('Digite o nome do usuário que deseja buscar:')
        
        var posicao = buscar(info)
        if (posicao > -1 ){
            alert(`Este usuário se encontra na posição: ${[posicao]}\nE a seguir apresento seus dados:\nNome: ${usuario[posicao]} | Idade: ${usuarioIdade[posicao]}`)
        } else {
            alert('Usuário não cadastrado')
        }
        
    }

    if (menu === '4'){
        var excluir = prompt('Digite o nome do usuário que deseja remover')
        remover(excluir)
            
    }

    if (menu === '5'){
        alert('Saindo do sistema de registro')
        break
    }
        }
    
}

function buscar(info){
   
 if (info == '' || info === null){
        alert('Operação indisponível! \nTalvez você não tenha registrado um usuário primeiro. \nRegistre alguém e depois tente essa opção novamente')
    } else if (usuario.length === 0 && usuarioIdade.length === 0){
        alert('Não tem usuários cadastrados')
    }

    for (let i = 0; i <= usuario.length; i++){
        if (usuario[i] == info){
            return i
        }
    }   
    return -1
    
}

function remover(excluir){

    if (excluir == '' || excluir === null){
        alert('Digite o nome de alguém se deseja apagá-lo do registro')
    } else if (usuario.length === 0){
        alert('Não tem usuários cadastrados')
    }


    for (let i = 0; i < usuario.length; i++){
        if (usuario[i] === excluir){
            alert(`Os dados deste usuário: ${usuario[i]} serão excluídos`)
            usuario.splice(i, 1)
            usuarioIdade.splice(i, 1)
        }
    }
    alert(`Nomes: ${usuario} | Idades: ${usuarioIdade} \n`)

}  