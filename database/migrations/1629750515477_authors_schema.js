'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AuthorsSchema extends Schema {
  async up() {
    const exits = await this.hasTable('authors')
    if (!exits) {
      this.createTable('authors', (table) => {
        table.increments('id')
        table.timestamps(true)
        table.string('name').notNullable()
        table.string('gender').notNullable()
        table.dateTime('bth_day')
        table.string('bio')
      })
    }
  }

  async down() {
    const exits = await this.hasTable('authors')
    if (exits) {
      this.drop('authors')
    }
  }
}

module.exports = AuthorsSchema
