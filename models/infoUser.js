module.exports = function(sequelize, DataTypes) {
    var UserInfo = sequelize.define("UserInfo", {
      firstName: DataTypes.TEXT,
      lastName: DataTypes.TEXT,
      email: DataTypes.TEXT
    });

  
  Author.associate = function(models) {
   // Associating Author with Posts
   // When an Author is deleted, also delete any associated Posts
   Author.hasMany(models.Post, {
     onDelete: "cascade"
   });
 };
    return UserInfo;
  };