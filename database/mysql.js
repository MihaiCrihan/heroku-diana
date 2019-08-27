const mysql = require('mysql')
const config = require('../config/db')

const connect = (sql) => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(config)

    connection.connect((err) => {
      if (err) {
        reject(err)
      }
    })

    connection.query(sql, (error, results, fields) => {
      if (error) {
        reject(error)
        connection.end()
      } else {
        resolve(results)
        connection.end()
      }
    })
  })
}

const query = (sql) => {
  return new Promise((resolve, reject) => {
    connect(sql)
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

module.exports = { query }
