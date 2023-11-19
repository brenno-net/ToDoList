// Importa o modelo de tarefa (ToDoModel) da aplicação
const ToDoModel = require('./models/ToDoModel')

// Função para obter todas as tarefas do banco de dados
module.exports.getToDo = async (req, res) => {
  const ToDo = await ToDoModel.find()
  res.send(ToDo) // Envia a lista de tarefas como resposta
}

// Função para salvar uma nova tarefa
module.exports.saveToDo = async (req, res) => {
  const { text } = req.body // Extrai o campo 'text' do corpo da solicitação (request body)

  if (!text || text.trim() === '') {
    // Verifica se o campo 'text' está vazio ou apenas contém espaços em branco
    console.log('Campo de texto não pode estar vazio...')
    return res.status(400).send('O campo de texto não pode estar vazio.')
  }

  // Cria uma nova tarefa no banco de dados usando o modelo ToDoModel
  ToDoModel.create({ text })
    .then((data) => {
      console.log(data)
      console.log('Adicionado com sucesso...')
      res.send(data)
    })
    .catch((error) => {
      console.error(error)
      res.status(500).send('Erro ao criar tarefa.')
    })
}

// Função para atualizar uma tarefa existente
module.exports.updateToDo = async (req, res) => {
  try {
    // Extrai o campo '_id' e 'text' do corpo da solicitação (request body)
    const { _id, text } = req.body

    // Atualiza a tarefa no banco de dados usando o modelo ToDoModel
    const updatedToDo = await ToDoModel.findByIdAndUpdate(
      _id,
      { text },
      { new: true } // Retorna o documento atualizado
    )

    console.log(updatedToDo)
    res.send(updatedToDo)
    console.log('Atualizado com sucesso...')
  } catch (error) {
    console.error(error)
    res.status(500).send('Erro ao atualizar tarefa.')
  }
}

// Função para excluir uma tarefa
module.exports.deleteToDo = async (req, res) => {
  try {
    // Extrai o campo '_id' do corpo da solicitação (request body)
    const { _id } = req.body

    // Exclui a tarefa do banco de dados usando o modelo ToDoModel
    const deletedToDo = await ToDoModel.findByIdAndDelete(_id)

    console.log(deletedToDo)
    res.send('Deletado com sucesso...')
    console.log('Deletado com sucesso...')
  } catch (error) {
    console.error(error)
    res.status(500).send('Erro ao deletar tarefa.')
  }
}

// Função para marcar uma tarefa como concluída
module.exports.checkToDo = async (req, res) => {
  try {
    // Extrai o campo '_id' e 'check' do corpo da solicitação (request body)
    const { _id, check } = req.body

    // Atualiza o campo 'check' da tarefa no banco de dados usando o modelo ToDoModel
    const checkedToDo = await ToDoModel.findByIdAndUpdate(
      _id,
      { check },
      { new: true } // Retorna o documento atualizado
    )

    console.log('Atualizado com sucesso...')
    console.log(checkedToDo)
    res.send(checkedToDo)
    console.log('Atualizado com sucesso...')
  } catch (error) {
    console.error(error)
    res.status(500).send('Erro ao atualizar tarefa.')
  }
}
