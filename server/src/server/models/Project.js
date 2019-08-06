
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
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

    },
        {
            // disable the modification of table names; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            // if you don't want that, set the following
            freezeTableName: true,
            timestamps: false
        });
    Project.associate = function (models) {
        Project.belongsTo(models.User, {foreignKey: 'userId', sourceKey: 'id'});
    };
    Project.associate = function (models) {
        Project.hasMany(models.Contest, { foreignKey: 'projectId', targetKey: 'id' });
    };
    return Project;
};