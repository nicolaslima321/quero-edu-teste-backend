var jwt = require('jsonwebtoken');

module.exports = {
  verifyJWTAuthorization (request, response, next) {
    var token = request.headers['authorization'];

    if (!token) {
      return response.status(401).json({
        authorization: false,
        message: 'Unauthorized theres no token provided.'
      })
    }
    
    jwt.verify(token, process.env.API_KEY, function (error, decoded) {
      if (error) {
        return response.status(401).json({
          auth: false,
          message: 'Unauthorized, token is invalid or expired.' 
        })
      }

      request.userId = decoded.userId;
      next()
    })
  }
}