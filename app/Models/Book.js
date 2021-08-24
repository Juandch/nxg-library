'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Book extends Model {
  genres(){
    return this.belongsTo('App/Models/Genre')
  }
  tags(){
    return this.belongsToMany('App/Models/Tag')
  }
  authors(){
    return this.belongsToMany('App/Models/Author')
  }
}

module.exports = Book
