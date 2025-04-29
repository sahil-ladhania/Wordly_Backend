import express from 'express';
import { changePasswordController, forgotPasswordController, loginController, logoutController, signupController } from '../../controllers/common/AuthControllers.js';
const router = express.Router();

router.post('/signup', signupController);
router.post('/login', loginController);
router.post('/forgot-password', forgotPasswordController);
router.put('/change-password', changePasswordController);
router.post('/logout', logoutController);

export default router;