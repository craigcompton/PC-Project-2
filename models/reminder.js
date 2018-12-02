
module.exports = function(sequelize, DataTypes) {
  var Reminder = sequelize.define("Reminder", {
    title: DataTypes.TEXT,
    time: DataTypes.TEXT,
    alarmType: DataTypes.TEXT
  });
  return Reminder;
};
  
Author.associate = function(models) {
  // Associating Author with Posts
  // When an Author is deleted, also delete any associated Posts
  Author.hasMany(models.Post, {
    onDelete: "cascade"
  });
};
   return UserInfo;
 };