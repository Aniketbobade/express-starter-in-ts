/* eslint-disable no-undef */
require('dotenv').config();
console.log(process.env.NODE_ENV);
import { Config } from '../interfaces/config';
import  development from './development';
let environment : Config;

if (process.env.NODE_ENV === 'production') {
  environment = require('./production');
} else if (process.env.NODE_ENV === 'stagging') {
  environment = require('./stagging');
} else if (process.env.NODE_ENV === 'test') {
  environment = require('./test');
} else {
  environment = development as Config
}

export default environment;