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
   * @typedef Produs
   * @property {string} denumire.required
   * @property {integer} pret.required
   */

  /**
   * This function comment is parsed by doctrine
   * @route POST /diana
   * @group get -  роут
   * @param {Produs.model} body.body.required - the new produs
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
   * @param {Produs.model} body.body.required - the new produs
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
