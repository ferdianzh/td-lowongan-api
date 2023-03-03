'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('lowongans', [{
      nama: 'Lowongan 1',
      deskripsi: 'Deskripsi lowongan satu',
      edukasi: 'SLTA/D3',
      tgl_dibuka: '2023-03-02 15:24:48',
      tgl_ditutup: '2023-03-09 15:24:48',
      kuota: 10,
    }, {
      nama: 'Lowongan 2',
      deskripsi: 'Deskripsi lowongan dua',
      edukasi: 'SLTA/D3',
      tgl_dibuka: '2023-03-02 15:24:48',
      tgl_ditutup: '2023-03-09 15:24:48',
      kuota: 20,
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
