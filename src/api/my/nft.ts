import express from 'express';
import { route } from '../../neck';
import { alchemy } from '../../core/alchemy';

const router = express.Router();

router.get('/hi', (req, res) => {
  res.json({ message: 'hello' });
});

router.get('/allnfts/:address', async (req, res) => {
  res.json(await alchemy.nft.getNftsForOwner(req.params.address));
});

export default [route(__filename), router] as any;
