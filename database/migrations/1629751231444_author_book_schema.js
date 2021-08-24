'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AuthorBookSchema extends Schema {
  async up() {
    const exits = await this.hasTable('author_books')
    if (!exits) {
      this.createTable('author_books', (table) => {
        table.increments('id')
        table.timestamps(true)
        table.integer('author_id').notNullable().unsigned()
        table.integer('book_id').notNullable().unsigned()
      })
    }
  }


  async down() {
    const exits = await this.hasTable('author_books')
    if (exits) {
      this.drop('author_books')
    }
  }
}

module.exports = AuthorBookSchema
