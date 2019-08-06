'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('File', {
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
			path: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('File');
	}
};