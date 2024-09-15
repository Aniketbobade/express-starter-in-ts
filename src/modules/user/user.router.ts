import express from 'express';
import { validateUser } from './user.validator';
import { getUsers } from './user.services';

const router = express.Router();

router.get('/getUsers', validateUser, getUsers);
export default router;
