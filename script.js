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

    // Cria um span para guardar o texto da tarefa
    let texto = document.createElement('span')
    texto.innerText = tarefa

    // Cria o botão de excluir
    let btnExcluir = document.createElement('button')
    btnExcluir.innerText = 'Excluir'

    // Quando clicar no botão, remove o item da lista
    btnExcluir.addEventListener('click', function () {
        lista.removeChild(item)
    })

    // Coloca o texto e o botão dentro do item
    item.appendChild(texto)
    item.appendChild(btnExcluir)

    // Adiciona o <li> dentro da <ul>
    lista.appendChild(item)

    // Limpa o campo e devolve o foco
    txtTarefa.value = ''
    txtTarefa.focus()
}