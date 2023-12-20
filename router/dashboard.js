import express from 'express';
import { updateuserTimer  } from '../contontrollers/dailyupdate.js';
import { getUsersByAgeCount, getUsersByCityWithTehsilCount, getUsersByCourseCount, getUsersByEducationCount, getUsersBySexCount } from '../contontrollers/dashboard.js';
const router =express.Router();


router.post('/timerupdate',updateuserTimer);

router.get('/getuserbycity',getUsersByCityWithTehsilCount);

router.get('/getuserbyage',getUsersByAgeCount);

router.get('/getuserbysexcount',getUsersBySexCount);

router.get('/getuserbyeducation',getUsersByEducationCount);

router.get('/getuserbycourse',getUsersByCourseCount);




export default router;
