'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lowongan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lowongan.init({
    nama: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    edukasi: DataTypes.STRING,
    tgl_dibuka: DataTypes.DATE,
    tgl_ditutup: DataTypes.DATE,
    kuota: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lowongan',
  });
  return lowongan;
};