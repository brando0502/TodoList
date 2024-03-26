//Selecionando o que vai ser botão e o que vai ser o input
const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')


//Criando array 
let minhaListaDeItens = []


//Criando função de adicionar novas tarefas
function adicionarNovaTarefa(){
    //o .push inclui no array cada vez que a função for chamada quando o botão for clicado
    minhaListaDeItens.push({
    tarefa: input.value,
    concluida: false
    })

    //Limpar o input depois de clicar em adicionar
    input.value = ''

    //Depois de adicionar o item no array chamo a função seguinte para adicionar na lista da página
    mostrarTarefas()
}

//Criando função de adicionar tarefas para o usuário
function mostrarTarefas(){

    let novaLi = ''
    // Criado para percorrer as posições do array
    minhaListaDeItens.forEach((item, posicao) => {

        novaLi = novaLi + `
        
        <li class="task ${item.concluida && "done"}">
                <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
                <p>${item.tarefa}</p>
                </p>
                <img src="./img/trash.png" alt="tarefa-para-lixo" onclick="deletarItem(${posicao})">
        </li> 

        `

        listaCompleta.innerHTML = novaLi
    })
}

function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas()

}

//Criando a função de deletar com os parâmetros de posição na lista do array
function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
    
    mostrarTarefas()
}

//Toda vez que o botão for clicado crie este evento e chama a função 
button.addEventListener('click', adicionarNovaTarefa)