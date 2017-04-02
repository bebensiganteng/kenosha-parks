exports.Event = (spec) => {
  const {
    name, description, address,
    price, isIndoor, lat, lon,
    organization, contactName,
    contactNumber, registration,
    park, ageGroup, isRecurringEvent,
    start, end, schedules
  } = spec

  return Object.freeze({
    name, description, address,
    price, isIndoor, lat, lon,
    organization, contactName,
    contactNumber, registration,
    park, ageGroup, isRecurringEvent,
    start, end, schedules
  })
}
