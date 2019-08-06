
module.exports = (sequelize, DataTypes) => {
    const Bank = sequelize.define('Bank', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        cardNumber: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        balance: {
            type: DataTypes.DECIMAL(15, 2),
            default: 0,
            allowNull: false
        },

    });

    return Bank;
};