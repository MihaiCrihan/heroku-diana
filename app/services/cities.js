const City = require('../models/cities')
const Region = require('../models/regions')

exports.createCity = async (req, res) => {
  try {
    const city = await City.create(req.body)
    res.send({
      value: city.id,
      text: city.name
    })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.getCreateSchema = async (req, res) => {
  try {
    const regions = await Region.aggregate([
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
          regions: {
            name: 'regions',
            title: 'Regions field',
            description: '',
            rules: '',
            props: {
              type: 'select',
              multiple: true,
              mutable: true,
              editable: true
            },
            component: 'select',
            data: regions
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

exports.getCitiesSelect = async (req, res) => {
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

exports.getCities = async (req, res) => {
  try {
    const city = await City.aggregate([
      {
        $project: {
          _id: 0,
          value: '$_id',
          text: '$name'
        }
      }
    ])
    res.send(city)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.getCityById = async (req, res) => {
  try {
    const city = await City.find({ _id: req.params.id })
    res.send({
      value: city.id,
      text: city.name
    })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.getUpdateSchema = async (req, res) => {
  try {
    const { id, name, regions } = await City.findById(req.params.id)
    const region = await Region.aggregate([
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
        regions
      },
      schema: {
        title: 'Test form title',
        description: 'Test form description',
        fields: {
          regions: {
            name: 'regions',
            title: 'regions field',
            description: '',
            rules: '',
            props: {
              type: 'select',
              multiple: true,
              mutable: true,
              editable: true
            },
            component: 'select',
            data: region
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

exports.updateCity = async (req, res) => {
  try {
    await City.updateOne(
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
