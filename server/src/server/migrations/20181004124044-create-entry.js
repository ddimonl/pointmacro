'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Entry', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            contestId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'Contest',
                    key: 'id'
                }
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'User',
                    key: 'id'
                }
            },
            entryContent: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            isWinner: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            }

        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Entry');
    }
};
