import express from 'express';
import nft from './api/my/nft';

const _app = express();
_app.use(...nft);

export const app = _app;
