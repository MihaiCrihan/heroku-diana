const ListController = require('../../controllers/list')

module.exports = (app) => {
  /**
   * RETERTRETRETERTERTRETRETERTRET
   * @route GET /diana
   * @group get -   этот роут
   * @returns {object} 200 - Массив 
   * @returns {Error}  default - Unexpected error
   */
  app.get('/diana', [
    ListController.getAll
  ])

  /**
   * This function comment is parsed by doctrine
   * @route GET /diana/{id}
   * @group get -  этот роут
   * @param {string} id.path.required - id
   * @returns {object} 200 - Данные об одном пользователе
   * @returns {Error}  default - Unexpected error
   */
  app.get('/diana/:id', [
    ListController.get
  ])

  /**
   * @typedef Profesori
   * @property {string} Nume.required
   * @property {string} Prenume.required
   * @property {string} data_nasterii.required
   * @property {string} Adresa_domicil.required
   * @property {string} adresa_email.required
   * @property {integer} nr_telefon.required
   */
  

  /**
   * This function comment is parsed by doctrine
   * @route POST /diana
   * @group get -  роут
   * @param {Profesori.model} body.body.required - the new professor
   * @returns {object} 200 - Данные об одном пользователе
   * @returns {Error}  default - Unexpected error
   */
  app.post('/diana', [
    ListController.post
  ])


  /**
   * This function comment is parsed by doctrine
   * @route PATCH /diana/{id}
   * @group get -  этот роут
   * @param {string} id.path.required - id
   * @param {Profesori.model} body.body.required - the new professor
   * @returns {object} 200 - Данные об одном пользователе
   * @returns {Error}  default - Unexpected error
   */
  app.patch('/diana/:id', [
    ListController.patch
  ])

  /**
   * This function comment is parsed by doctrine
   * @route DELETE /diana/{id}
   * @group get - этот роут
   * @param {string} id.path.required - id
   * @returns {object} 200 - Данные об одном пользователе
   * @returns {Error}  default - Unexpected error
   */
  app.delete('/diana/:id', [
    ListController.delete
  ])
}
