const ToDoModel = require("./models/ToDoModel");

module.exports.getToDo = async (req,res) =>  {
    const ToDo = await ToDoModel.find()
        res.send(ToDo)
    
}

module.exports.saveToDo = async (req,res) =>  {

    const {text} = req.body

    ToDoModel
    .create({text})
    .then((data) => {
        console.log("adicionado com sucesso...");
        console.log(data);
        res.send(data)
    })    
}

module.exports.updateToDo = async (req, res) => {
    try {
      const { _id, text } = req.body;
      const updatedToDo = await ToDoModel.findByIdAndUpdate(_id, { text });
      console.log("Atualizado com sucesso...");
      console.log(updatedToDo);
      res.send("Atualizado com sucesso...");
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao atualizar tarefa.");
    }
  };

  module.exports.deleteToDo = async (req, res) => {
    try {
      const { _id } = req.body;
      const deletedToDo = await ToDoModel.findByIdAndDelete(_id);
      console.log("Deletado com sucesso...");
      console.log(deletedToDo);
      res.send("Deletado com sucesso...");
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao deletar tarefa.");
    }
  };
    