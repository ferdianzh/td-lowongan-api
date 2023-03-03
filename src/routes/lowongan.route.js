const express = require('express')
const {
  addLowongan,
  getAllLowongan,
  getLowonganById,
  deleteLowonganById,
  updateLowonganById,
} = require('../services/lowongan.service.js')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const result = await addLowongan(req.body)

    return res.status(201).send({
      status: 'success',
      data: result,
    })
  } catch(e) {
    return res.status(422).send({
      status: 'fail',
      message: e.message,
    })
  }
})

router.get('/', async (req, res) => {
  const result = await getAllLowongan()
  return res.status(200).send({
    status: 'success',
    data: result,
  })
})

router.get('/:id', async (req, res) => {
  try {
    const result = await getLowonganById(req.params.id)
    return res.status(200).send({
      status: 'success',
      data: result,
    })
  } catch (e) {
    return res.status(404).send({
      status: 'fail',
      data: e.message,
    })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const result = await updateLowonganById(req.params.id, req.body)
    return res.status(200).send({
      status: 'success',
      data: result,
    })
  } catch (e) {
    return res.status(400).send({
      status: 'fail',
      data: e.message,
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const result = await deleteLowonganById(req.params.id)
    return res.status(200).send({
      status: 'success',
      data: result,
    })
  } catch (e) {
    return res.status(404).send({
      status: 'fail',
      data: e.message,
    })
  }
})

module.exports = router
