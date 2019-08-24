const Caches = require('./modules/Caches')
const Notifications = require('./modules/notifications')

module.exports = app => {
  Caches(app)
  Notifications(app)
}
