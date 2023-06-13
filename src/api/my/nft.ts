import express from 'express';
import body_parser from 'body-parser';
import { route } from '../../neck';
import { alchemy } from '../../core/alchemy';
import { NftFilters } from 'alchemy-sdk';

const secret = require('../../../.secret.json');

const router = express.Router();

router.post('/getNftsForOwner', body_parser.json(), async (req, res) => {
  console.log(req.body);
  res.json(await alchemy.nft.getNftsForOwner(secret.address, req.body));
});

export default [route(__filename), router] as any;
