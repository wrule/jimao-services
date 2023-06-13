import express from 'express';
import cors from 'cors';
import nft from './api/my/nft';

const _app = express();
_app.use(cors());
_app.use(...nft);

export const app = _app;
