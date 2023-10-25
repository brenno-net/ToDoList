const { Router } = require("express");

// Importa funções do controlador relacionadas às operações com tarefas "ToDo"
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
  checkToDo,
} = require("../controller/ToDoController");

const router = Router();

// Define rotas e associa cada rota a uma função do controlador correspondente

router.get("/", getToDo); // Rota para obter todas as tarefas (GET)
router.post("/save", saveToDo); // Rota para salvar uma nova tarefa (POST)
router.post("/update/", updateToDo); // Rota para atualizar uma tarefa existente (POST)
router.post("/delete/", deleteToDo); // Rota para excluir uma tarefa (POST)
router.post("/check/", checkToDo); // Rota para marcar uma tarefa como concluída (POST)

// Exporta o objeto router para que possa ser usado em outros lugares
module.exports = router;
