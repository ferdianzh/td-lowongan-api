const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const db = require('../../db/models/index.js')
const User = db.user

async function register(request) {
  const { username, password } = request
  const encrypted = await bcrypt.hash(password, 10)

  const user = await User.create({
    username: username,
    password: encrypted,
  })

  const token = jwt.sign(
    { user_id: user.id, username },
    process.env.TOKEN_KEY,
    { expiresIn: '2h' },
  )

  return { token }
}

async function login(request) {
  const { username, password } = request
  const validation = await User.build({ username, password })
  await validation.validate()

  const user = await User.findOne({ username })

  const compare = await bcrypt.compare(password, user.password)
  if (!compare) {
    throw Error('invalid password')
  }

  const token = jwt.sign(
    { user_id: user.id, username },
    process.env.TOKEN_KEY,
    { expiresIn: '2h' },
  )

  return { token }
}

module.exports = {
  register,
  login,
}
