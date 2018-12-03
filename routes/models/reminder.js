
module.exports = function (sequelize, DataTypes) {
  var Reminder = sequelize.define("Reminder", {
    title: DataTypes.TEXT,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    alarmType: DataTypes.TEXT
  });

  // Reminder.associate = function (models) {
  //   // We're saying that a Reminder should belong to an Author
  //   // A Reminder can't be created without an Author due to the foreign key constraint
  //   Reminder.belongsTo(models.infoUser, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Reminder;

};

