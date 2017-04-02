exports.isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next()
  } else {
    req.flash('error', 'Unauthorized.')
    res.status(401).redirect('/auth/signin')
  }
}
