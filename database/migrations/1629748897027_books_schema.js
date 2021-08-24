'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BooksSchema extends Schema {
  async up() {
    const exits = await this.hasTable('books')
    if (!exits) {
      this.createTable('books', (table) => {
        table.increments('id')
        table.timestamps(true)
        table.string('title').notNullable()
        table.integer('genre_id').notNullable().unsigned()
        table.dateTime('publishe_at')
        table.string('resume')
        table.string('image').nullable()
      })
    }
  }

  async down() {
    const exits = await this.hasTable('books')
    if (exits) {
      this.drop('books')
    }
  }

}

module.exports = BooksSchema
