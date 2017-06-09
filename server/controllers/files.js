const google = require('googleapis')
const auth = require('../google-apis')
const Promise = require('bluebird')

const { files } = google.drive('v3')

exports.show = async ({ query, params }, res) => {
  await createAPIRequest(createOptions(query, params.fileId), 'get', res)
}

function createOptions (query, fileId, props = {}) {
  let options = Object.assign({ auth, fileId }, query)
  options = Object.assign(options, props)
  options = options.hasOwnProperty('alt') ? options : Object.assign(options, { alt: 'media' })
  return options
}

async function createAPIRequest (options, method, res) {
  try {
    const response = await Promise.fromCallback(cb => files[method](options, cb))
    res.json(response)
  } catch (error) {
    res.json(error)
  }
}
