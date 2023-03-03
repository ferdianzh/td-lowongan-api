const db = require("../../db/models/index.js")
const lowongan = db.lowongan

async function addLowongan(request) {
  return await lowongan.create(request)
}

async function getAllLowongan() {
  return await lowongan.findAll()
}

async function getLowonganById(id) {
  const result = await lowongan.findByPk(id)
  if (!result) {
    throw Error(`lowongan with id=${id} not found`)
  }
  return result
}

async function updateLowonganById(id, request) {
  const result = await lowongan.update(request, { where: { id: id } })
  if (!result[0]) {
    throw Error(`lowongan with id=${id} not found`)
  }
  return await lowongan.findByPk(id)
}

async function deleteLowonganById(id) {
  const result = await lowongan.destroy({ where: { id: id } })
  if (!result) {
    throw Error(`lowongan with id=${id} not found`)
  }
  return await lowongan.findByPk(id)
}

module.exports = {
  addLowongan,
  getAllLowongan,
  getLowonganById,
  updateLowonganById,
  deleteLowonganById,
}
