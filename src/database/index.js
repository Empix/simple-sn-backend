const Sequelize = require('sequelize');
const config = require('../config/database');

const User = require('../models/User');
const Post = require('../models/Post');

const sequelize = new Sequelize(config[process.env.NODE_ENV]);

User.init(sequelize);
Post.init(sequelize);

User.associate(sequelize.models);
Post.associate(sequelize.models);

module.exports = sequelize;
