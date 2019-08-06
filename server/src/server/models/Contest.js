module.exports = (sequelize, DataTypes) => {
    const Contest = sequelize.define('Contest', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        projectId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            references: {
                model: 'Project',
                key: 'id'
            }
        },
        /*c_type - type of contest*/
        c_type: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        budget: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        venture: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        whatVentureDoes: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        targetDescription: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        /*createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },*/
        winner: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "none"
        },
        /*NAME CONTEST*/
        typeOfName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nameStyle: {
            type: DataTypes.STRING,
            allowNull: true

        },
        /*tagline contest*/
        taglinePreference: {
            type: DataTypes.STRING,
            allowNull: true
        },
        /*Logo*/
        logoStyle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM(["ACTIVE", "ENDED"]),
            defaultValue: "ACTIVE",
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
    Contest.associate = function (models) {
        Contest.belongsTo(models.Project, {foreignKey: 'projectId', sourceKey: 'id'});
    };
    Contest.associate = function (models) {
        Contest.hasMany(models.File, { foreignKey: 'contestId', targetKey: 'id' });
    };
    Contest.associate = function (models) {
        Contest.hasMany(models.Entry, { foreignKey: 'contestId', targetKey: 'id' });
    };
    return Contest;
};