'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('music', 'id_album', {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'album',
        key: 'id'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('music', 'id_album');
  }
};
