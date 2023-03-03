const db = require("../../db/models/index.js")
const Lowongan = db.lowongan

async function addLowongan(request) {
  return await Lowongan.create(request)
}

async function getAllLowongan() {
  return await Lowongan.findAll()
}

async function getLowonganById(id) {
  const result = await Lowongan.findByPk(id)
  if (!result) {
    throw Error(`lowongan with id=${id} not found`)
  }
  return result
}

async function updateLowonganById(id, request) {
  const result = await Lowongan.update(request, { where: { id: id } })
  if (!result[0]) {
    throw Error(`lowongan with id=${id} not found`)
  }
  return await Lowongan.findByPk(id)
}

async function deleteLowonganById(id) {
  const result = await Lowongan.destroy({ where: { id: id } })
  if (!result) {
    throw Error(`lowongan with id=${id} not found`)
  }
  return await Lowongan.findByPk(id)
}

module.exports = {
  addLowongan,
  getAllLowongan,
  getLowonganById,
  updateLowonganById,
  deleteLowonganById,
}
