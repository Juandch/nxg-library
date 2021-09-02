'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AuthorBookSchema extends Schema {
  async up() {
    const exits = await this.hasTable('author_book')
    if (!exits) {
      this.createTable('author_book', (table) => {
        table.increments('id')
        table.timestamps(true)
        table.integer('author_id').notNullable().unsigned().references('id').inTable('authors').onDelete('CASCADE')
        table.integer('book_id').notNullable().unsigned().references('id').inTable('books').onDelete('CASCADE')
      })
    }
  }


  async down() {
    const exits = await this.hasTable('author_book')
    if (exits) {
      this.drop('author_book')
    }
  }
}

module.exports = AuthorBookSchema
