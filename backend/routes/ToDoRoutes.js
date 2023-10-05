const {Router} = require ("express");
const { getToDo } = require("../controller/ToDoControler");

const router = Router()

router.get ('/', getToDo)

module.exports = router;