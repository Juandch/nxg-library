'use strict'

/*
|--------------------------------------------------------------------------
| GenreSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Moment = use('moment')

const genres = ['pasion','aventura','terror','infatil','naturaleza']

class GenreSeeder {
  async run () {
    await Database.truncate('genres')
    for (let i in genres){
      await Database.from('genres').insert({
        name:genres[i],
        created_at: Moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: Moment().format('YYYY-MM-DD HH:mm:ss')
      })
    }

  }
}

module.exports = GenreSeeder
