const express = require('express')
const { register, login } = require('../services/authentication.service.js')

const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const result = await register(req.body)
    return res.status(201).send({
      status: 'success',
      data: result,
    })
  } catch (e) {
    return res.status(422).send({
      status: 'fail',
      message: e.message,
    })
  }
})

router.post('/login', async (req, res) => {
  try {
    const result = await login(req.body)
    return res.status(200).send({
      status: 'success',
      data: result,
    }) 
  } catch (e) {
    return res.status(400).send({
      status: 'fail',
      message: e.message,
    })
  }
})

module.exports = router
