'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TagsSchema extends Schema {
  async up() {
    const exits = await this.hasTable('tags')
    if (!exits) {
      this.createTable('tags', (table) => {
        table.increments('id')
        table.timestamps(true)
        table.string('name').notNullable()
      })
    }
  }


  async down() {
    const exits = await this.hasTable('tags')
    if (exits) {
      this.drop('tags')
    }
  }
}

module.exports = TagsSchema
