module.exports = function (sequelize, DataTypes) {
  var UserInfo = sequelize.define("UserInfo", {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT
  });

  // UserInfo.associate = function(models) {
  //   // Associating UserInfo with Posts
  //   // When an UserInfo is deleted, also delete any associated Posts
  //   UserInfo.hasMany(models.Reminders, {
  //     onDelete: "cascade"
  //   });
  // };

  return UserInfo;
};