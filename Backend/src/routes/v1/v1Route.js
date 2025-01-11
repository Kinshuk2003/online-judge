import express from 'express';
import { registerUser, loginUser} from '../../controller/userController.js';

const router = express.Router();

// login and Register routes
router.post('/login', loginUser);
router.post('/register', registerUser);
// if the remaining req url starts with /compiler, use compilerRouter

// if the remaining req url starts with /problems, use problemsRouter

export default router;