'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          user_name: 'exe',
          password: '123456',
          email: 'exe.@exe.com.vn',
          phone_number: '0167892710',
          company_name: 'exe Corp',
          masked_name: 'exe Corp'
        },
        {
          user_name: 'nash',
          password: '123456',
          email: 'exe.@exe.com.vn',
          phone_number: '0167892710',
          company_name: 'Nash tech',
          masked_name: 'Nash tech'
        },
        {
          user_name: 'nal',
          password: '123456',
          email: 'nal.@nal.com.vn',
          phone_number: '0167892710',
          company_name: 'Nal',
          masked_name: 'Nal'
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
