'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Contest', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            projectId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'Project',
                    key: 'id'
                }
            },
            c_type: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            budget: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            venture: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            whatVentureDoes: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            targetDescription: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            winner: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: "none"
            },
            /*NAME CONTEST*/
            typeOfName: {
                type: Sequelize.STRING,
                allowNull: true
            },
            nameStyle: {
                type: Sequelize.STRING,
                allowNull: true

            },
            /*tagline contest*/
            taglinePreference: {
                type: Sequelize.STRING,
                allowNull: true
            },
            /*Logo*/
            logoStyle: {
                type: Sequelize.STRING,
                allowNull: true
            },
            status: {
                type: Sequelize.ENUM(["ACTIVE", "ENDED"]),
                defaultValue: "ACTIVE",
            },
            createdAt: {
                allowNull: true,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DATE
            }

        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Contest');
    }
};
