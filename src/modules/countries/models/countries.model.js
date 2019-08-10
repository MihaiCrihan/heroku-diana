exports.create = country => {
  return new Promise(resolve => {
    resolve({
      text: country.name_en,
      value: 23
    })
  })
};

exports.schema = () => {
  const form = {
    schema: {
      "title": "Test form title",
      "description": "Test form description",
      "fields": {
        'regions': {
          'name': 'regions',
          'title': 'Regions field',
          'description': '',
          'rules': '',
          'props': {
            'type': 'select',
            'multiple': true,
            mutable: true
          },
          'component': 'select',
          'data': [
            {
              'value': 1,
              'text': 'Regions 1'
            },
            {
              'value': 2,
              'text': 'Regions 2'
            }
          ]
        },
        "name_en": {
          "name": "name_en",
          "title": "Name(EN)",
          "description": "Name(EN) field",
          "rules": "required|min:1|max:50|unique_with:countries,code,name_ro,name_ru",
          "props": {
            "type": "text"
          },
          "component": "input"
        },
        "name_ro": {
          "name": "name_ro",
          "title": "Name(RO)",
          "description": "Name(RO) field",
          "rules": "required|min:1|max:50|unique_with:countries,name_en,code,name_ru",
          "props": {
            "type": "text"
          },
          "component": "input"
        },
        "name_ru": {
          "name": "name_ru",
          "title": "Name(RU)",
          "description": "Name(RU) field",
          "rules": "required|min:1|max:50|unique_with:countries,name_en,name_ro,code",
          "props": {
            "type": "text"
          },
          "component": "input"
        }
      },
      "params": {
        "created_at": 1565379789
      }
    }
  }

  return new Promise(resolve => {
    resolve(form)
  })
};

exports.store = () => {
  const countries = [
    {
      value: 1,
      text: 'lol'
    },
    {
      value: 2,
      text: 'lol2'
    },
    {
      value: 3,
      text: 'lol3'
    },
    {
      value: 4,
      text: 'lol4'
    },
    {
      value: 5,
      text: 'lol5'
    },
    {
      value: 6,
      text: 'lol6'
    },
    {
      value: 7,
      text: 'lol7'
    }
  ]

  return new Promise(resolve => {
    resolve(countries)
  })
};

exports.get = id => {
  return new Promise(resolve => {
    resolve({
      value: id,
      text: 'lol'
    })
  })
};

exports.edit = id => {
  const form = {
    schema: {
      "title": "Test form title",
      "description": "Test form description",
      "fields": {
        'regions': {
          'name': 'regions',
          'title': 'Regions field',
          'description': '',
          'rules': '',
          'props': {
            'type': 'select',
            'multiple': true,
            mutable: true
          },
          'component': 'select',
          'data': [
            {
              'value': 1,
              'text': 'Regions 1'
            },
            {
              'value': 2,
              'text': 'Regions 2'
            }
          ]
        },
        "name_en": {
          "name": "name_en",
          "title": "Name(EN)",
          "description": "Name(EN) field",
          "rules": "required|min:1|max:50|unique_with:countries,code,name_ro,name_ru",
          "props": {
            "type": "text"
          },
          "component": "input"
        },
        "name_ro": {
          "name": "name_ro",
          "title": "Name(RO)",
          "description": "Name(RO) field",
          "rules": "required|min:1|max:50|unique_with:countries,name_en,code,name_ru",
          "props": {
            "type": "text"
          },
          "component": "input"
        },
        "name_ru": {
          "name": "name_ru",
          "title": "Name(RU)",
          "description": "Name(RU) field",
          "rules": "required|min:1|max:50|unique_with:countries,name_en,name_ro,code",
          "props": {
            "type": "text"
          },
          "component": "input"
        }
      },
      "params": {
        "created_at": 1565379789
      }
    },
    dataObject: {
      id: 1001,
      name_ru: '1',
      name_ro: '2',
      name_en: '3'
    }
  }

  return new Promise(resolve => {
    resolve(form)
  })
};

exports.patch = (country, id) => {
  return new Promise(resolve => {
    resolve({
      text: country.name_en,
      value: id
    })
  })
};
