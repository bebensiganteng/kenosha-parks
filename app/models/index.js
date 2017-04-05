/**
 * @param {Object} spec - The specification object for an event.
 * @param {string} [spec.name] - The name for the event.
 * @param {string} [spec.description] - The description for the event.
 * @return {Object} An event object
 */
exports.Event = (spec) => {
  const {
    name, description, address,
    price, venue, organization,
    contactName, contactNumber,
    registration, park, ageGroup,
    startDateTime, endDateTime
  } = spec

  return Object.freeze({
    name, description, address,
    price, venue, organization,
    contactName, contactNumber,
    registration, park, ageGroup,
    startDateTime, endDateTime
  })
}

exports.createPayload = (spec) => {
  const { title, body } = spec
  return Object.freeze({
    data: {},
    notification: { title, body }
  })
}
