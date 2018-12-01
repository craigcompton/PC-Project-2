
module.exports = function(sequelize, DataTypes) {
  var Reminder = sequelize.define("Reminder", {
    title: DataTypes.TEXT,
    time: DataTypes.TEXT,
    alarmType: DataTypes.TEXT
  });
  return Reminder;
};

