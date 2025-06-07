import express from 'express';
import { getBond, createBond } from '../controllers/bondController.js';

const router = express.Router();

router.get('/', getBond);
router.post('/', createBond);

export default router;