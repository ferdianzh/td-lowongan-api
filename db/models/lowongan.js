'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lowongan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lowongan.init({
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deskripsi: DataTypes.STRING,
    edukasi: DataTypes.STRING,
    tgl_dibuka: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    tgl_ditutup: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    kuota: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      },
    },
  }, {
    sequelize,
    modelName: 'lowongan',
    timestamps: false,
  });
  return Lowongan;
};