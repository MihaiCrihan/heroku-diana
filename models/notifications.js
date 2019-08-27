const db = require('../database/mysql')

exports.insert = async (value) => {
  const columns = Object.keys(value).join(',')
  const values = Object.values(value).join('\',\'')
  return db.query(`INSERT INTO Notifications (${columns}) VALUES ('${values}')`)
}

exports.get = async () => {
  return db.query(`SELECT * FROM Notifications`)
}
