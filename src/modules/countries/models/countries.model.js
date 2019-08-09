exports.insert = (req, res) => {
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

exports.list = (req, res) => {

};

exports.getById = (req, res) => {

};

exports.patchById = (req, res) => {

};
