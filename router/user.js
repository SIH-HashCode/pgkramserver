import express from 'express';
import { updateuserTimer  } from '../contontrollers/dailyupdate.js';
const router =express.Router();


router.post('/timerupdate',updateuserTimer);




export default router;
