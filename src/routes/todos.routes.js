const express = require('express');
const {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
} = require('../controllers/todos.controller');

const router = express.Router();

router.get('/', getTodos);
router.get('/:id', getTodoById);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.patch('/:id/toggle', toggleTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
