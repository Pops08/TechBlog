const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  post_content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      //we establish the relationship between this post and the user by creating a reference to the User model, 
      //specifically to the id column that is defined by the key property
      model: 'user',
      key: 'id'
    }
  }
}, {
  // pass in our imported sequelize connection (the direct connection to our database)
  sequelize,
  // don't pluralize name of database table
  freezeTableName: true,
  // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
  underscored: true,
  // make it so our model name stays lowercase in the database
  modelName: 'post'
});

module.exports = Post;