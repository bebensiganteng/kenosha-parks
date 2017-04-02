const express = require('express')
const expressNunjucks = require('express-nunjucks')
const expressSession = require('express-session')
const expressFlash = require('express-flash')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const routes = require('./app/routes')
const firebase = require('firebase')
const admin = require('firebase-admin')
const config = require('./app/config')
const { isAuthenticated } = require('./app/middleware/auth')
const { info } = require('console')
const { join } = require('path')

const app = express()
const isDev = app.get('env') === 'development'

/**
 * Configure Firebase.
 */
firebase.initializeApp(config.firebase.client)
admin.initializeApp(config.firebase.admin)


/**
 * Configure Express.
 */
app.use(express.static('app/public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressSession(isDev ? config.session.dev : config.session.prod))
app.use(expressFlash())
app.set('port', process.env.PORT || 3000)
app.set('views', join(__dirname, 'app/views'))
app.set('view engine', 'njk')

app.locals.defaultTitle = 'Express'
app.locals.appName = 'Farmers Market'
app.locals.registrationTypes = ['On-Site', 'Online']
app.locals.ageGroups = ['Family', 'Public', 'Adults']
app.locals.parks = ['Lincoln Park', 'Colonial Park', 'Lockwood Park', 'Island Park']

expressNunjucks(app, {
  watch: isDev,
  noCache: isDev
})

/**
 * Configure routes; all routes use Express' Router.
 */
app.get('/', (req, res) => { res.redirect('/dashboard') })
app.use('/auth', routes.auth)
app.use('/dashboard', isAuthenticated, routes.dashboard)
app.use('/events', isAuthenticated, routes.events)

app.listen(app.get('port'), () => {
  info(`🚀 App is running on port ${app.get('port')} in ${app.get('env')} mode.`)
  info('Press CTRL-C to stop\n')
})
