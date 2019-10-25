'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('album', 'id_artist', {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'artist',
        key: 'id'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('album', 'id_artist');
  }
};
