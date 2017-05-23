const { auth } = require('firebase-admin')

module.exports = (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    const token = req.headers.authorization.split(' ')[1]
    auth().verifyIdToken(token)
      .then(decodedToken => {
        next()
      })
      .catch(({ code }) => {
        res.status(400).json({
          status: 400,
          error: {
            code,
            message: 'Invalid token.'
          }
        })
      })
  } else if (req.query && req.query['access_token']) {
    auth().verifyIdToken(req.query['access_token'])
      .then(decodedToken => {
        next()
      })
      .catch(({ code }) => {
        res.status(400).json({
          status: 400,
          error: {
            code,
            message: 'Invalid token.'
          }
        })
      })
  } else {
    res.status(401).json({
      error: {
        status: 401,
        message: 'Unauthorized.'
      }
    })
  }
}
