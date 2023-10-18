const ToDoModel = require("./models/ToDoModel");

module.exports.getToDo = async (req,res) =>  {
    const ToDo = await ToDoModel.find()
        res.send(ToDo)
    
};

module.exports.saveToDo = async (req, res) => {
  const { text, category } = req.body;

  ToDoModel.create({ text, category })
    .then((data) => {
      console.log("Adicionado com sucesso...");
      console.log(data);
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Erro ao criar tarefa.");
    });
};

module.exports.updateToDo = async (req, res) => {
    try {
      const { _id, text, category } = req.body;
      const updatedToDo = await ToDoModel.findByIdAndUpdate(
        _id,
        { text, category },
        { new: true }
      );
      console.log("Atualizado com sucesso...");
      console.log(updatedToDo);
      res.send(updatedToDo);
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


    module.exports.checkToDo = async (req, res) => {
      try {
        const  { _id, check } = req.body;
        const checkedToDo = await ToDoModel.findByIdAndUpdate(_id, { check }, { new: true });
        console.log("Atualizado com sucesso...");
        console.log(checkedToDo);
        res.send(checkedToDo);
      } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao atualizar tarefa.");
      }
      }
  
    