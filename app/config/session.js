exports.dev = {
  secret: '007',
  resave: false,
  saveUninitialized: true
}

exports.prod = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}
