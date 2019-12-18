const UploadController = require('../../controllers/upload')

module.exports = (app) => {
  app.post('/upload', [
    UploadController.upload
  ])
}
