const firebase = require('firebase')

exports.login = (req, res) => {
  firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
    .then((user) => {
      req.session.user = user.uid
      res.status(200).redirect('/dashboard')
    })
    .catch((error) => {
      switch (error.code) {
        case 'auth/wrong-password':
          req.flash('error', 'Invalid password/email combination.')
          break
        case 'auth/invalid-email':
          req.flash('error', 'Invalid password/email combination.')
          break
        case 'auth/user-not-found':
          req.flash('error', 'No such user exists.')
          break
        case 'auth/user-disabled':
          req.flash('error', 'Your account is disabled. Contact the admin.')
          break
        default:
          req.flash('error', 'Something went wrong.')
          break
      }
      res.status(400).redirect('/auth/signin')
    })
}

exports.logout = (req, res) => {
  firebase.auth().signOut()
    .then(() => {
      req.session.destroy()
    })
  res.redirect('/auth/signin')
}

exports.signin = (req, res) => {
  if (req.session.user) {
    res.redirect('/dashboard')
  } else {
    res.render('auth/login')
  }
}
