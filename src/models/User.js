const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.hasMany(models.Post, { foreignKey: 'user_id', as: 'posts' });
    this.hasMany(models.User, {
      foreignKey: 'follower_id',
      through: 'user_follow',
      as: 'following',
    });
    this.hasMany(models.User, {
      foreignKey: 'followed_id',
      through: 'user_follow',
      as: 'followers',
    });
  }
}

module.exports = User;
