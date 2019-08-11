const config = require(`../config/db`);
const MongoClient = require(`mongodb`).MongoClient;
const client = new MongoClient(config.url, { useNewUrlParser: true });

const connect = () => {
  return new Promise(resolve => {
    client.connect(err => {
      resolve(client.db("test"))
    })
  })
}

module.exports = connect()




