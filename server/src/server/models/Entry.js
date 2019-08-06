const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const Entry = sequelize.define('Entry', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        contestId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            references: {
                model: 'Contest',
                key: 'id'
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            references: {
                model: 'User',
                key: 'id'
            }
        },
        entryContent: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        isWinner: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    });

    Entry.associate = function (models) {
        Entry.belongsTo(models.User, {foreignKey: 'userId', sourceKey: 'id'});
    };
    Entry.associate = function (models) {
        Entry.belongsTo(models.Contest, {foreignKey: 'contestId', sourceKey: 'id'});
    };

    return Entry;
};