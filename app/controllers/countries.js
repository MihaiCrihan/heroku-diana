const Country = require('../models/countries')
const City = require('../models/cities')

exports.createCountry = async (req, res) => {
  try {
    const country = await Country.create(req.body)
    res.send({
      value: country.id,
      text: country.name
    })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.getCreateSchema = async (req, res) => {
  try {
    const cities = await City.aggregate([
      {
        $project: {
          _id: 0,
          value: '$_id',
          text: '$name'
        }
      }
    ])
    const form = {
      schema: {
        title: 'Test form title',
        description: 'Test form description',
        fields: {
          cities: {
            name: 'cities',
            title: 'Cities field',
            description: '',
            rules: '',
            props: {
              type: 'select',
              multiple: true,
              mutable: true,
              editable: true
            },
            component: 'select',
            data: cities
          },
          name: {
            name: 'name',
            title: 'Name',
            description: 'Name',
            rules: 'required|min:1|max:50|unique_with:countries,code,name_ro,name_ru',
            props: {
              type: 'text'
            },
            component: 'input'
          }
        },
        params: {
          created_at: 1565379789
        }
      }
    }
    res.send(form)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.getUpdateSchema = async (req, res) => {
  try {
    const { id, name, cities } = await Country.findById(req.params.id)
    const city = await City.aggregate([
      {
        $project: {
          _id: 0,
          value: '$_id',
          text: '$name'
        }
      }
    ])
    const form = {
      dataObject: {
        id,
        name,
        cities
      },
      schema: {
        title: 'Test form title',
        description: 'Test form description',
        fields: {
          cities: {
            name: 'cities',
            title: 'Cities field',
            description: '',
            rules: '',
            props: {
              type: 'select',
              multiple: true,
              mutable: true,
              editable: true
            },
            component: 'select',
            data: city
          },
          name: {
            name: 'name',
            title: 'Name',
            description: 'Name field',
            rules: 'required|min:1|max:50|unique_with:countries,code,name_ro,name_ru',
            props: {
              type: 'text'
            },
            component: 'input'
          }
        },
        params: {
          created_at: 1565379789
        }
      }
    }
    res.send(form)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.updateCountry = async (req, res) => {
  try {
    await Country.updateOne(
      {
        _id: req.params.id
      },
      {
        $set: req.body
      }
    )
    res.send({
      value: req.body.id,
      text: req.body.name
    })
  } catch (err) {
    res.status(500).send(err.message)
  }
}
