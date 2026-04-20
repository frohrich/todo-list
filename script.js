// Seleciona o campo de texte onde o usuário digita a tarefa
let txtTarefa = document.querySelector('#txttarefa')

// Seleciona o botão de adicionar
let btnAdicionar = document.querySelector('#btnAdicionar')

// Seleciona a lista onde as tarefas serão mostradas
let lista = document.querySelector('#listaTarefas')

// Array que guarda as tarefas
let tarefas = []

// Quando o botão for clicado, a função adicionarTarefa será executada
btnAdicionar.addEventListener('click', adicionarTarefa)

// Função responsável por adicionar uma nova Tarefa
function adicionarTarefa() {
    // Pega o texto digitado pelo usuário
    let tarefa = txtTarefa.value

    // Verifica se o campo está vazio
    if (tarefa.length === 0) {
        alert('Digite uma tarefa antes de adicionar.')
        return
    }
    
    // Adicionar a tarefa no array
    tarefas.push(tarefa)

    // Cria um novo item de lista <li>
    let item = document.createElement('li')

    // Coloca o texto da tarefa dentro do <li>
    item.innerText = tarefa

    // Adiciona o <li> dentro da <ul>
    lista.appendChild(item)

    // Limpa o campo depois de adicionar
    txtTarefa.value = ''

    // Coloca o cursor de volta no input
    txtTarefa.focus()
}

