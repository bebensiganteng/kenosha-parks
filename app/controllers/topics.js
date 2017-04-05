const { database } = require('firebase')
const { strings } = require('../util')

const { normalize, capitalize } = strings

exports.create = (req, res) => {
  let { name, description } = req.body

  // Fix user input
  const readableName = normalize(name)
  name = readableName.replace(/ /g, '_')
  description = `${capitalize(normalize(description))}.`

  const topicsRef = database().ref().child('topics')
  const topic = { name, readableName, description }

  topicsRef.orderByChild('name').equalTo(topic.name).once('value')
    .then((snapshot) => {
      if (!snapshot.exists()) {
        database().ref().child('topics').push(topic)
        req.flash('success', 'Successfully created topic')
        res.status(201).redirect('/dashboard')
      } else {
        req.flash('error', 'Topic already exists.')
        res.status(400).redirect('/dashboard')
      }
    })
    .catch((error) => {
      req.flash('error', error.message)
      res.status(500).render('dashboard/index', { title: 'Dashboard' })
    })
}
