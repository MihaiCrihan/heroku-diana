const config = require(`../config/db`);
const MongoClient = require(`mongodb`).MongoClient;
const client = new MongoClient(config.url, { useNewUrlParser: true });

let db = null

const connect = () => {
  return new Promise(resolve => {
    client.connect(err => {
      console.log('connect')
      db = client.db("test");
      resolve()
    })
  })
}

const database = () => {
  if (!db) {
    connect().then(() => {
      return db
    })
  }
  return db
}


module.exports = database()




