import express from 'express';
import { login } from '../contontrollers/user.js';
const router =express.Router();


router.post('/login',login);




export default router;
