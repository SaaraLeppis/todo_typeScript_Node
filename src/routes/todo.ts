import { Router } from 'express';
import { createTodo, deleteTodo, getTodos, updatesTodos } from '../controllers/todos';

const router = Router();

router.post('/', createTodo);
router.get('/', getTodos);
router.patch('/:id', updatesTodos);
router.delete('/:id', deleteTodo);

export default router; 