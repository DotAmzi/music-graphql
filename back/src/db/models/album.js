
'use strict';

module.exports = function(sequelize, DataTypes) {
  var album = sequelize.define('album', {
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
    release: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });

  album.associate = models => {
    album.belongsTo(models.artist, { foreignKey: 'id_artist'} );
    album.hasMany(models.music, { foreignKey: 'id_album'} );
  }

  return album;
};
