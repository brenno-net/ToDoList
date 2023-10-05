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