const express = require('express')
const cors = require('cors')
const { Sequelize } = require('sequelize')

const auth = require('./middleware/auth.js')
const authRouter = require('./routes/authentication.route.js')
const lowonganRouter = require('./routes/lowongan.route.js')

const app = express()
app.use(express.json())
app.use(cors())
require('dotenv').config()

app.use('/auth', authRouter)
app.use('/lowongan', auth, lowonganRouter)

const sequelize = new Sequelize(
  process.env.MYSQL_DBNAME,
  process.env.MYSQL_USER,
  undefined,
  {
    host: process.env.MYSQL_HOST,
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
