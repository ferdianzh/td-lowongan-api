const express = require('express')
const { Sequelize } = require('sequelize')

const lowonganRouter = require('./routes/lowongan.route.js')

const app = express()
app.use(express.json())
require('dotenv').config()

app.use('/lowongan', lowonganRouter)

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  undefined,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql'
  }
)

sequelize.authenticate().then(() => {
  console.log('Database connection success.');
}).catch((error) => {
  console.error('Database connection fail: ', error);
});

app.listen(process.env.APP_PORT, () => {
  console.log(`server is listening on port ${process.env.APP_PORT}`)
})
