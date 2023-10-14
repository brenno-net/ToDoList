const {Router} = require ('express');

const { getToDo, saveToDo, updateToDo, deleteToDo, checkToDo } = require("../controller/ToDoControler");

const router = Router()
 
router.get ('/', getToDo);
router.post('/save', saveToDo);
router.post('/update/', updateToDo);
router.post('/delete/', deleteToDo);
router.post('/check/',checkToDo);
router.post('/categories', );


module.exports = router;