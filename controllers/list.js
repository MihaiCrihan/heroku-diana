const db = require('../database/mysql')

exports.getAll = async (req, res) => {
//   await db.query(`CREATE TABLE profesori
// (
// id_prof INT AUTO_INCREMENT PRIMARY KEY,
// Nume VARCHAR(50) not null,
// Prenume VARCHAR(50) not null,
// data_nasterii date not null,
// Adresa_domicil VARCHAR(50) not null,
// adresa_email VARCHAR(50),
// nr_telefon int(14)
// );`)
  try {
    res.status(200).send(await db.query(`SELECT * FROM profesori`))
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.get = async (req, res) => {
  try {
    const [item] = await db.query(`SELECT * FROM profesori WHERE id_prof = ${req.params.id}`)
    if (item) {
      res.status(200).send(item)
    } else {
      res.status(404).send({
        message: 'Запись не найдена'
      })
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.post = async (req, res) => {
  try {
    const columns = Object.keys(req.body).join(',')
    const values = Object.values(req.body).join('\',\'')
    const response = await db.query(`INSERT INTO profesori (${columns}) VALUES ('${values}')`)
    const [insertedItem] = await db.query(`SELECT * FROM profesori WHERE id_prof = ${response.insertId}`)

    res.status(201).send(insertedItem)
  } catch (err) {
    res.status(500).send(err.message)
  }
}


exports.patch = async (req, res) => {
  try {
    const updatedFields = Object.entries(req.body).map(([column, value]) => `${column} = '${value}'`)
      .join(', ')

    await db.query(`UPDATE profesori SET ${updatedFields} WHERE id_prof = ${req.params.id}`)
    const [insertedItem] = await db.query(`SELECT * FROM profesori WHERE id_prof = ${req.params.id}`)

    if (insertedItem) {
      res.status(200).send(insertedItem)
    } else {
      res.status(404).send({
        message: 'Запись не найдена'
      })
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.delete = async (req, res) => {
  try {
    const response = await db.query(`DELETE FROM profesori WHERE id_prof = ${req.params.id}`)

    if (response.affectedRows) {
      res.status(200).send('Запись успешно удалена')
    } else {
      res.status(404).send({
        message: 'Запись не найдена'
      })
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}
