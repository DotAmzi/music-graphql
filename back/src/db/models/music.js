
'use strict';

module.exports = function (sequelize, DataTypes) {
  var music = sequelize.define('music', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
      timestamps: false,
      underscored: true,
      freezeTableName: true
    });

  music.associate = models => {
    music.belongsTo(models.album, { foreignKey: 'id_album' });
  }

  return music;
};
