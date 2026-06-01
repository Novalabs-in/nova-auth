const jwt = require('jsonwebtoken')

class Authenticator {
  constructor(secret = 'default-secret') {
    this.secret = secret
  }

  generateToken(user) {
    return jwt.sign({ id: user.id, email: user.email }, this.secret, { expiresIn: '1h' })
  }

  verifyToken(token) {
    try {
      return jwt.verify(token, this.secret)
    } catch (e) {
      return null
    }
  }
}

module.exports = Authenticator
