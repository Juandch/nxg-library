'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Genre extends Model {
  books(){
    return this.belongsTo('App/Models/Book')
  }
}

module.exports = Genre
