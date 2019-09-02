const db = require('../database/mysql')

exports.insert = (value) => {
  const columns = Object.keys(value).join(',')
  const values = Object.values(value).join('\',\'')

  return db.query(`INSERT INTO notifications (${columns}) VALUES ('${values}')`)
}

exports.update = (id) => {
  return db.query(`UPDATE notifications SET say = '1' WHERE id = ${id}`)
}

exports.select = () => {
  return db.query(`SELECT * FROM notifications`)
}

exports.selectById = async (id) => {
  const item = await db.query(`SELECT * FROM notifications WHERE id = ${id}`)
  return item[0]
}

exports.truncate = () => {
  return db.query(`DELETE FROM notifications`)
}

exports.delete = (id) => {
  return db.query(`DELETE FROM notifications WHERE id = ${id}`)
}
