const express = require('express')
const expressNunjucks = require('express-nunjucks')
const { info } = require('console')
const path = require('path')
const routes = require('./app/routes')

/**
 * Configure Express.
 */
const app = express()
const isDev = app.get('env') === 'development'

app.use(express.static('app/public'))
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'app/views'))
app.set('view engine', 'njk')

app.locals.defaultTitle = 'Express'
app.locals.appName = 'Farmers Market'

expressNunjucks(app, {
  watch: isDev,
  noCache: isDev
})

/**
 * Configure routes; all routes use Express' Router.
 */
app.use('/dashboard', routes.dashboard)
app.use('/events', routes.events)

app.listen(app.get('port'), () => {
  info(`🚀 App is running on port ${app.get('port')} in ${app.get('env')} mode.`)
  info('Press CTRL-C to stop\n')
})
