const { database } = require('firebase')

exports.index = (req, res) => {
  database().ref().child('topics').once('value')
    .then((snapshot) => {
      res.render('dashboard/index', {
        topics: Object.values(snapshot.val()),
        title: 'Dashboard'
      })
    })
    .catch((error) => {
      req.flash('error', `An error occured: ${error}`)
      res.render('dashboard/index')
    })
}
