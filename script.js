// Seleciona o campo de texto onde o usuário digita a tarefa
let txtTarefa = document.querySelector('#txttarefa')

// Seleciona o botão de adicionar
let btnAdicionar = document.querySelector('#btnAdicionar')

// Seleciona a lista onde as tarefas serão mostradas
let lista = document.querySelector('#listaTarefas')

// Array que guarda as tarefas
let tarefas = []

// Quando o botão for clicado, a função adicionarTarefa será executada
btnAdicionar.addEventListener('click', adicionarTarefa)

function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

// Função responsável por adicionar uma nova tarefa
function adicionarTarefa() {
    let tarefa = txtTarefa.value

    if (tarefa.length === 0) {
        alert('Digite uma tarefa antes de adicionar.')
        return
    }

    let vazio = document.querySelector('#vazio')
    if (vazio) {
        vazio.remove()
    }

    tarefas.push(tarefa)
    salvarTarefas()
    criarTarefaNaTela(tarefa)

    txtTarefa.value = ''
    txtTarefa.focus()
}

function carregarTarefas() {
    let tarefasSalvas = localStorage.getItem('tarefas')

    if (tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas)
        lista.innerHTML = ''

        for (let tarefa of tarefas) {
            criarTarefaNaTela(tarefa)
        }
    }
}

function criarTarefaNaTela(tarefa) {
    let item = document.createElement('li')

    let texto = document.createElement('span')
    texto.innerText = tarefa

    texto.addEventListener('click', function () {
        texto.classList.toggle('concluida')
    })

    let btnExcluir = document.createElement('button')
    btnExcluir.innerText = 'Excluir'

    btnExcluir.addEventListener('click', function () {
        let pos = tarefas.indexOf(tarefa)

        if (pos !== -1) {
            tarefas.splice(pos, 1)
        }

        lista.removeChild(item)
        salvarTarefas()

        if (lista.children.length === 0) {
            let itemVazio = document.createElement('li')
            itemVazio.innerText = 'Nenhuma tarefa adicionada'
            itemVazio.id = 'vazio'
            lista.appendChild(itemVazio)
        }
    })

    item.appendChild(texto)
    item.appendChild(btnExcluir)
    lista.appendChild(item)
}

carregarTarefas()