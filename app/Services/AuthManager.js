const User = require('../Models/User.js')
const bcrypt = require('bcrypt')

module.exports = {
  async authorize (email, password) {
    let user = await User.findOne({ where: { 'email': email } })

    let isAuthorized = bcrypt.compareSync(password, user.password)

    return {
      id: user.id,
      email: user.email,
      authorized: isAuthorized
    }
  }
}