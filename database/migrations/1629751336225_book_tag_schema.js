'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookTagSchema extends Schema {
  async up() {
    const exits = await this.hasTable('book_tag')
    if (!exits) {
      this.createTable('book_tag', (table) => {
        table.increments('id')
        table.timestamps(true)
        table.integer('tag_id').notNullable().unsigned()
        table.integer('book_id').notNullable().unsigned()
      })
    }
  }


  async down() {
    const exits = await this.hasTable('book_tag')
    if (exits) {
      this.drop('book_tag')
    }
  }
}


module.exports = BookTagSchema
