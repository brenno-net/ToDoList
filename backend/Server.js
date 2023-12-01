// Importação das bibliotecas necessárias
const express = require('express') // Importa o framework Express
const mongoose = require('mongoose') // Importa o Mongoose para trabalhar com o MongoDB
const cors = require('cors') // Importa o CORS para lidar com políticas de origens crusadas

const routes = require('./routes/ToDoRoutes') // Importa o arquivo de rotas

require('dotenv').config() // Carrega variáveis de ambiente do arquivo .env

const app = express() // Cria uma instância do Express

const PORT = process.env.PORT || 5000 // Define a porta do servidor

app.use(express.json()) // Habilita o Express para interpretar solicitações no formato JSON
// Configuração do CORS para permitir solicitações de um frontend específico
const corsOptions = {
  origin: '*', // Substitua pelo URL do seu frontend
  optionsSuccessStatus: 200 // Alguns navegadores podem retornar um código de status 204 (No Content) para requisições OPTIONS pré-voo; aqui você pode definir 200
};


app.use(cors(corsOptions)) // Habilita o CORS para permitir solicitações de diferentes origens

// Conexão com o banco de dados MongoDB
mongoose
  .connect(process.env.MONGODB_URL) // Conecta ao MongoDB usando a URL definida em .env
  .then(() => console.log('Conectado ao MONGODB...')) // Mensagem de sucesso, confirmando a conexão com banco de dados
  .catch((err) => console.log(err)) // Trata dos erros, exibindo-os no console

app.use(routes) // Monta as rotas definidas em 'ToDoRoutes.js'

// Inicia o servidor na porta especificada (5000) e exibe uma mensagem de confirmação no console
app.listen(PORT, () => console.log(`Servidor rodando em: http://localhost:${PORT}`))
