const Caches = require('./modules/caches')
const Notifications = require('./modules/notifications')

module.exports = app => {
  Caches(app)
  Notifications(app)
}
