import express from 'express';
import { route } from '../../neck';

const router = express.Router();

router.get('/hi', (req, res) => {
  res.json({ message: 'hello' });
});

export default [route(__filename), router] as any;
