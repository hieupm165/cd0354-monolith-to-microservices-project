import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  dialect: config.dialect, // e.g., 'postgres'
  dialectOptions: {
    ssl: {
      require: true,               // Forces SSL connection
      rejectUnauthorized: false,   // Accept self-signed certificates
    },
  },
  storage: ':memory:', 
});