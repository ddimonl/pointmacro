'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('User', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            displayName: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                validation: {
                    notEmpty: true,
                },
            },
            role: {
                type: Sequelize.ENUM(["CUSTOMER", "CREATIVE"]),
                allowNull: false,
            },
            balance: {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: false,
                defaultValue: 0
            },
            profilePicture: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            linkedInURL: {
                type: Sequelize.STRING,
                allowNull: true
            },
            twitterHandle: {
                type: Sequelize.STRING,
                allowNull: true
            },
            bio: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            address: {
                type: Sequelize.STRING,
                allowNull: true
            },
            city: {
                type: Sequelize.STRING,
                allowNull: true
            },
            state: {
                type: Sequelize.STRING,
                allowNull: true
            },
            pincode: {
                type: Sequelize.STRING,
                allowNull: true
            },
            country: {
                type: Sequelize.STRING,
                allowNull: true
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: true
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
        return queryInterface.dropTable('User');
    }
};
