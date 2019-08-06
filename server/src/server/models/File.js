
module.exports = (sequelize, DataTypes) => {
    const File = sequelize.define('File', {
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
        path: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    File.associate = function (models) {
        File.belongsTo(models.Contest, {foreignKey: 'contestId', sourceKey: 'id'});
    };

    return File;
};