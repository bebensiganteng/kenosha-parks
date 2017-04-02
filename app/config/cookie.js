exports.dev = {
  secret: '007'
}

exports.prod = {
  secret: process.env.COOKIE_SECRET
}
