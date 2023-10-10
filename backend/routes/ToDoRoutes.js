const {Router} = require ('express');

const { getToDo, saveToDo, updateToDo, deleteToDo, checkToDo } = require("../controller/ToDoControler");

const router = Router()
 
router.get ('/', getToDo);
router.post('/save', saveToDo);
router.post('/update/:id', updateToDo);
router.post('/delete/:id', deleteToDo);
router.post('/check/:id',checkToDo);
router.post('/categories', );


module.exports = router;