exports.create = city => {
  return new Promise(resolve => {
    resolve({
      text: city.name_en,
      value: 23
    })
  })
};

exports.schema = () => {
  const form = {
    "title": "Test form title",
    "description": "Test form description",
    "fields": {
      "phone_prefix": {
        "name": "phone_prefix",
        "title": "Phone prefix",
        "description": "Phone prefix field",
        "rules": "required|min:1|max:3",
        "props": {
          "type": "number"
        },
        "component": "input"
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

  return new Promise(resolve => {
    resolve(form)
  })
};

exports.store = () => {
  const cities = [
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
    resolve(cities)
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

exports.patch = (city, id) => {
  return new Promise(resolve => {
    resolve({
      text: city.name_en,
      value: id
    })
  })
};
