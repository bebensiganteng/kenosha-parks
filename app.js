const express = require('express')
const { info } = require('console')
const path = require('path')
const dashboardRoutes = require('./app/routes/dashboard')

/**
 * Configure Express.
 */
const app = express()
app.use(express.static('app/public'))
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'app/views'))
app.set('view engine', 'pug')

/**
 * Configure routes; all routes use Express' Router.
 */
app.use('/dashboard', dashboardRoutes)

app.listen(app.get('port'), () => {
  info(`🚀 App is running on port ${app.get('port')} in ${app.get('env')} mode.`)
  info('Press CTRL-C to stop\n')
})
