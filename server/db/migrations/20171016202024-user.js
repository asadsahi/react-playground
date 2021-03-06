'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      username: {
        // Act as required
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      provider: {
        allowNull: false,
        type: Sequelize.STRING
      },
      profileData: {
        type: Sequelize.STRING
      },
      additionalProvidersData: {
        type: Sequelize.STRING
      },
      resetPasswordToken: {
        type: Sequelize.STRING
      },
      resetPasswordExpires: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
      {
        indexes: [
          // Create a unique index on poem
          {
            unique: true,
            fields: ['email']
          },
          {
            unique: true,
            fields: ['username']
          }
        ]
      }
    );

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
