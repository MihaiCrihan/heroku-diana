const Notification = require('../../models/notifications')

module.exports = async (app) => {
  await Notification.insert({
    sender: 'Marin',
    title: 'title',
    body: 'body',
    say: '1',
    status: 'urgent'
  })

  console.log(await Notification.get())
}
