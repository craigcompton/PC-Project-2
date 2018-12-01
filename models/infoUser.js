module.exports = function(sequelize, DataTypes) {
    var UserInfo = sequelize.define("UserInfo", {
      firstName: DataTypes.TEXT,
      lastName: DataTypes.TEXT,
      email: DataTypes.TEXT
    });
    return UserInfo;
  };