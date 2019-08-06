'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Bank', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			cardNumber: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false
			},
			expiration: {
				type: Sequelize.DATE,
				allowNull: false
			},
			cvv: {
				type: Sequelize.STRING,
				allowNull: false
			},
			balance: {
				type: Sequelize.DECIMAL(15, 2),
				default: 0,
				allowNull: false
			}

		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Bank');
	}
};
