import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import {requestLogger} from './utility-services/logger'
import * as middlewares from './middlewares';
import api from './router';
import MessageResponse from './interfaces/MessageResponse';

require('dotenv').config();

const app = express();
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'server is running',
  });
});
app.use((req, res, next) => {
  const requestBody = req.body ? JSON.stringify(req.body) : '{}'
  requestLogger.info(`${req.method} ${req.originalUrl} - ${req.ip} \n body: ${requestBody}`);
  next();
});
app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
