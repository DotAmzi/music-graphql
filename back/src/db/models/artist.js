
'use strict';

module.exports = function(sequelize, DataTypes) {
  var artist = sequelize.define('artist', {
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
    bio: {
      type: DataTypes.STRING(250),
      allowNull: false
    }
  }, {
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });

  artist.associate = models => {
    artist.hasMany(models.album, { foreignKey: 'id_artist'} );
  }

  return artist;
};
