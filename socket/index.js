const Caches = require('./modules/caches')
const Users = require('./modules/users')
const Notifications = require('./modules/notifications')

module.exports = (app) => {
  Caches(app)
  Users(app)
  Notifications(app)
}
