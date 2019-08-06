const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                notEmpty: true,
            },
        },
        role: {
            type: DataTypes.ENUM(["CUSTOMER", "CREATIVE"]),
            allowNull: false,
            defaultValue: "CREATIVE"
        },
        balance: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
            defaultValue: 0
        },
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        linkedInURL: {
            type: DataTypes.STRING,
            allowNull: true
        },
        twitterHandle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pincode: {
            type: DataTypes.STRING,
            allowNull: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            allowNull: true,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            allowNull: true,
            type: DataTypes.DATE
        }
    },
        {
            // disable the modification of table names; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            // if you don't want that, set the following
            freezeTableName: true,
        });




    User.associate = function (models) {
        User.hasMany(models.Project, { foreignKey: 'userId', targetKey: 'id' });
    };
    /*User.associate = function (models) {
        User.hasMany(models.RefreshToken, { foreignKey: 'userId', targetKey: 'id' });
    };*/
    User.associate = function (models) {
        User.hasMany(models.Entry, { foreignKey: 'userId', targetKey: 'id' });
    };

    return User;
};
