'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tag extends Model {
  books(){
    return this.belongsToMany('App/Models/Book')
  }
}

module.exports = Tag
