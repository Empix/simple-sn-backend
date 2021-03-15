const { Model, DataTypes } = require('sequelize');
const uuid = require('uuid');

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

    this.addHook('beforeSave', async (user) => {
      return (user.id = uuid.v4());
    });
  }

  static associate(models) {
    this.hasMany(models.Post, { foreignKey: 'user_id', as: 'posts' });
    this.belongsToMany(models.User, {
      foreignKey: 'follower_id',
      through: 'user_follow',
      as: 'following',
    });
    this.belongsToMany(models.User, {
      foreignKey: 'followed_id',
      through: 'user_follow',
      as: 'followers',
    });
  }
}

module.exports = User;
