const { messaging } = require('firebase-admin')

exports.create = async (req, res) => {
  // Prepare notification payload
  const { title, body } = req.body
  const payload = {
    data: {},
    notification: {
      title,
      body
    }
  }

  // We don't need to actually send the notification
  // during development.
  const mock = {
    dryRun: req.app.get('env') === 'development'
  }

  try {
    const response = await messaging().sendToTopic('alerts', payload, mock)
    res.status(200).json({
      status: 200,
      response
    })
  } catch (error) {
    res.status(500).json({
      status: 500,
      error
    })
  }
}
