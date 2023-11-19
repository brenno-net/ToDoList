// Importa o módulo mongoose para trabalhar com o MongoDB
const mongoose = require('mongoose')

// Define o esquema para a coleção de tarefas "ToDo"
const todoSchema = new mongoose.Schema({
  text: {
    type: String, // Campo 'text' é do tipo String
    required: true, // É obrigatório fornecer um valor para 'text'
  },

  date: {
    type: Date, // Campo 'date' é do tipo Date
    default: Date.now(), // O valor padrão é a data e hora atual
  },
})

// Exporta o modelo de tarefa (ToDo) criado a partir do esquema criado
module.exports = mongoose.model('ToDo', todoSchema)
