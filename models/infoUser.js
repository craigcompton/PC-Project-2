module.exports = function(sequelize, DataTypes) {
    var UserInfo = sequelize.define("UserInfo", {
      firstName: DataTypes.TEXT,
      lastName: DataTypes.TEXT,
      email: DataTypes.TEXT,
      password :DataTypes.TEXT
    });

<<<<<<< HEAD
  
  Author.associate = function(models) {
   // Associating Author with Posts
   // When an Author is deleted, also delete any associated Posts
   Author.hasMany(models.Post, {
     onDelete: "cascade"
   });
 };
=======
    // UserInfo.associate = function(models) {
    //   // Associating UserInfo with Posts
    //   // When an UserInfo is deleted, also delete any associated Posts
    //   UserInfo.hasMany(models.Reminders, {
    //     onDelete: "cascade"
    //   });
    // };
  
>>>>>>> e79d41dc3c6f3d55dbfbe2f7cc27ee2449e042ab
    return UserInfo;
  };