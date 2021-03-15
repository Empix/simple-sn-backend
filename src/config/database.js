const path = require('path');

const defaultConfig = {
  dialect: 'sqlite',
  storage: path.join(__dirname, '..', 'database', 'database.sqlite'),
  define: {
    timestamps: true,
    underscored: true,
  },
};

module.exports = {
  development: defaultConfig,
  production: defaultConfig,
  test: {
    ...defaultConfig,
    storage: path.join(__dirname, '..', 'database', 'database.test.sqlite'),
  },
};
