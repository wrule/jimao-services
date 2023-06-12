import { Alchemy, Network } from 'alchemy-sdk';

const secret = require('../../.secret.json');

const config = {
  apiKey: secret.alchemy.api_key,
  network: Network.ETH_MAINNET,
};

export
const alchemy = new Alchemy(config);
