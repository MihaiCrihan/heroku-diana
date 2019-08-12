const Region = require('../models/regions')
const Country = require('../models/countries')

exports.createRegion = async (req, res) => {
  try {
    const region = await Region.create(req.body)
    res.send({
      value: region.id,
      text: region.name
    })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.getCreateSchema = async (req, res) => {
  try {
    const countries = await Country.aggregate([
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
          countries: {
            name: 'countries',
            title: 'Countries field',
            description: '',
            rules: '',
            props: {
              type: 'select',
              multiple: true,
              mutable: true,
              editable: true
            },
            component: 'select',
            data: countries
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

exports.getRegions = async (req, res) => {
  try {
    const region = await Region.aggregate([
      {
        $project: {
          _id: 0,
          value: '$_id',
          text: '$name'
        }
      }
    ])
    res.send(region)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.getRegionById = async (req, res) => {
  try {
    const region = await Region.find({ _id: req.params.id })
    res.send({
      value: region.id,
      text: region.name
    })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.getUpdateSchema = async (req, res) => {
  try {
    const { id, name, countries } = await Region.findById(req.params.id)
    const country = await Country.aggregate([
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
        countries
      },
      schema: {
        title: 'Test form title',
        description: 'Test form description',
        fields: {
          countries: {
            name: 'countries',
            title: 'Countries field',
            description: '',
            rules: '',
            props: {
              type: 'select',
              multiple: true,
              editable: true
            },
            component: 'select',
            data: country
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

exports.updateRegion = async (req, res) => {
  try {
    await Region.updateOne(
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
