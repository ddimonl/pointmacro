
const bcrypt = require('bcrypt');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('User', [{
            firstName: 'Justin',
            lastName: 'Bieber',
            displayName: 'dlutsenko',
            email: 'qwerty137@gmail.com',
            password: bcrypt.hashSync('1qaz2w3e4r', bcrypt.genSaltSync(8)),
            role: 'CREATIVE'
        },
            {
                firstName: 'Justin',
                lastName: 'Bieber',
                displayName: 'qwerty',
                email: 'smallemail@gmail.com',
                password: bcrypt.hashSync('1qaz2w3e4r', bcrypt.genSaltSync(8)),
                role: 'CREATIVE'
            },
            {
                firstName: 'Justin',
                lastName: 'Bieber',
                displayName: 'dlutsenko',
                email: 'test@gmail.com',
                password: bcrypt.hashSync('1qaz2w3e4r', bcrypt.genSaltSync(8)),
                role: 'CREATIVE'
            }], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};