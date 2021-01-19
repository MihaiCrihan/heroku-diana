const db = require('../database/mysql')

exports.getAll = async (req, res) => {
  try {
    res.status(200).send(await db.query(`SELECT * FROM todo_list`))
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.get = async (req, res) => {
  try {
    const [item] = await db.query(`SELECT * FROM todo_list WHERE id = ${req.params.id}`)
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

    const errors = {
      title: [],
      body: [],
      execution_time: []
    }

    for (const key in errors) {
      if (!req.body[key]) {
        errors[key].push('Поле обязательно для заполнения')
      }

      if (['title', 'body'].includes(key)) {
        if (req.body[key] && req.body[key].length > 255) {
          errors[key].push('Поле должно содержать меньше 255 символов')
        }
        if (req.body[key] && req.body[key].length < 3) {
          errors[key].push('Поле должно содержать больше 3 символов')
        }
      }
    }

    if (Object.values(errors).flat().length) {
      res.status(422).send({
        message: 'Ошибка валидации',
        errors
      })
      return
    }

    const response = await db.query(`INSERT INTO todo_list (${columns}) VALUES ('${values}')`)
    const [insertedItem] = await db.query(`SELECT * FROM todo_list WHERE id = ${response.insertId}`)

    res.status(201).send(insertedItem)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.put = async (req, res) => {
  try {
    const updatedFields = Object.entries(req.body).map(([column, value]) => `${column} = '${value}'`)
      .join(', ')

    await db.query(`UPDATE todo_list SET ${updatedFields} WHERE id = ${req.params.id}`)
    const [insertedItem] = await db.query(`SELECT * FROM todo_list WHERE id = ${req.params.id}`)

    res.send(insertedItem)

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

exports.patch = async (req, res) => {
  try {
    const updatedFields = Object.entries(req.body).map(([column, value]) => `${column} = '${value}'`)
      .join(', ')

    await db.query(`UPDATE todo_list SET ${updatedFields} WHERE id = ${req.params.id}`)
    const [insertedItem] = await db.query(`SELECT * FROM todo_list WHERE id = ${req.params.id}`)

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
    const response = await db.query(`DELETE FROM todo_list WHERE id = ${req.params.id}`)

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
