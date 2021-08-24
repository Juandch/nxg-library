'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookTagSchema extends Schema {
  async up() {
    const exits = await this.hasTable('book_tags')
    if (!exits) {
      this.createTable('book_tags', (table) => {
        table.increments('id')
        table.timestamps(true)
        table.integer('tag_id').notNullable().unsigned()
        table.integer('book_id').notNullable().unsigned()
      })
    }
  }


  async down() {
    const exits = await this.hasTable('book_tags')
    if (exits) {
      this.drop('book_tags')
    }
  }
}


module.exports = BookTagSchema
