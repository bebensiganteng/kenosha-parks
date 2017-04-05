const { database } = require('firebase')

exports.index = (req, res) => {
  const topicNames = []
  database().ref().child('topics').once('value')
    .then((snapshot) => {
      const topics = snapshot.val()
      Object.keys(snapshot.val()).forEach((pushId) => {
        const topic = topics[pushId]
        topicNames.push(topic.name)
      })
      res.render('dashboard/index', {
        topicNames,
        title: 'Dashboard'
      })
    })
}
