'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('books','BookController').validator(new Map([
    [['books.store'],['StoreBook']],
    [['books.update'],['UpdateBook']]
])).apiOnly()

Route.resource('authors','AuthorController').validator(new Map([
  [['authors.store'],['StoreAuthor']],
  [['authors.update'],['UpdateAuthor']]
])).apiOnly()
