import { Sequelize } from 'sequelize-typescript';

const config = require('../config/config');

const sequelize = new Sequelize(config);

export default sequelize;
