const Caches = require('./modules/caches')
const Users = require('./modules/users')
const Notifications = require('./modules/notifications')
const Messages = require('./modules/messages')

module.exports = (app) => {
  Caches(app)
  Users(app)
  Messages(app)
  Notifications(app)
}
