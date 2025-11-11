import express from 'express';
import { postDeveloper,getDevelopers,updateDeveloper,deleteDeveloper } from '../controller/devcontroller.js';

const router = express.Router();


router.get('/developers',getDevelopers)
router.post('/developers',postDeveloper)
router.put('/developers/:id',updateDeveloper)
router.delete('/developers/:id',deleteDeveloper)

export default router;