'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GenresSchema extends Schema {
  async up() {
    const exits = await this.hasTable('genres')
    if (!exits) {
      this.createTable('genres', (table) => {
        table.increments('id')
        table.timestamps(true)
        table.string('name').notNullable()
      })
    }
  }


  async down() {
    const exits = await this.hasTable('genres')
    if (exits) {
      this.drop('genres')
    }
  }
}
module.exports = GenresSchema
