const db = require('../database/mysql')

exports.insert = (value) => {
  const columns = Object.keys(value).join(',')
  const values = Object.values(value).join('\',\'')

  return db.query(`INSERT INTO Notifications (${columns}) VALUES ('${values}')`)
}

exports.update = (id) => {
  return db.query(`UPDATE Notifications SET say = '1' WHERE id = '${id}'`)
}

exports.select = () => {
  return db.query(`SELECT * FROM Notifications`)
}

exports.selectById = (id) => {
  return db.query(`SELECT * FROM Notifications WHERE id = '${id}'`)
}

exports.drop = () => {
  return db.query(`DELETE FROM Notifications`)
}

exports.delete = (id) => {
  return db.query(`DELETE FROM Notifications WHERE id = '${id}'`)
}
