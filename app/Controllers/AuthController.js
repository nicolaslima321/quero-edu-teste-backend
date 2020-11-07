const AuthManager = require('../Services/AuthManager.js')
var jwt = require('jsonwebtoken');

module.exports = {
  async login (request, response) {
    const { email, password } = request.body

    var user = await AuthManager.authorize(email, password)

    if (!user.authorized) {
      return response.json({
        message: "Unauthorized! Password does not match!"
      }, 401)
    }

    var token = jwt.sign({ id: user.id }, process.env.API_KEY, {
      expiresIn: 5200
    });

    return response.json({
      message: "Successfully authorized",
      authorization: token,
      expiresIn: 5200
    }, 200)
  }
}