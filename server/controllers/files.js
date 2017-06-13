const google = require('googleapis')
const auth = require('../google-apis')
const Promise = require('bluebird')

const { files } = google.drive('v3')

exports.show = async ({ query, params }, res) => {
  if (query.alt && query.alt.toLowerCase().trim() === 'media') {
    // Set to JSON as we need to get the content type of the resource
    query.alt = 'json'

    // Get the Files Resource object
    const options = createOptions(query, params.fileId)
    const filesResource = await Promise.fromCallback(cb => files.get(options, cb))

    // Grab the raw image bytes
    query.alt = 'media'
    await createAPIRequest(createOptions(query, params.fileId), 'get', res, filesResource)
  } else {
    await createAPIRequest(createOptions(query, params.fileId), 'get', res)
  }
}

function createOptions (query, fileId, props = {}) {
  let options = Object.assign({ auth, fileId }, query)
  options = Object.assign(options, props)
  return options
}

async function createAPIRequest (options, method, res, filesResource = {}) {
  try {
    const response = await Promise.fromCallback(cb => files[method](options, { encoding: null }, cb))
    if (filesResource.hasOwnProperty('mimeType')) {
      res.type(filesResource.mimeType)
      res.end(response)
    } else {
      res.json(response)
    }
  } catch (error) {
    res.json(error)
  }
}
