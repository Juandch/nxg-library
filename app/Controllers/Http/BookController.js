'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Book = use('App/Models/Book')
const Genre = use('App/Models/Genre')
const Mail = use('Mail')
const Tag = use('App/Models/Tag')

/**
 * Resourceful controller for interacting with books
 */
class BookController {
  /**
   * Show a list of all books.
   * GET books
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index ({ request, response, view }) {
    const books = await Book.query()
      .with("genre")
      .fetch()  
    return response.ok({
      status: 201,
      message: 'PAPA RE LISTO',
      data: books,
    })
  }

  /**
   * Render a form to be used for creating a new book.
   * GET books/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new book.
   * POST books
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const book = await Book.create(request.only(['title','genre_id','publishe_at','resume']))
    const authors = request.only(['authors'])
    const tags = request.only(['tags'])

    await book.load("genre")
    console.log("tipo authors recibido: "+typeof authors.authors)
    await book.syncAuthors(authors)
    await book.syncTags(tags)

    await Mail.send('emails.email', {book:book.toJSON()}, (message) => {
      message
        .to('rivas.jesus93@gmail.com')
        .subject('Wenas probando lo de la library')
    })
    return response.created({
      status: 201,
      message: 'MAMALON SE CREO',
      data: book,
    })
  }

  /**
   * Display a single book.
   * GET books/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show ({ params, request, response,  }) {
    const book = await Book.find(params.id)
    return response.ok({
      status: 201,
      message: 'PAPA RE LISTO',
      data: book,
    })
  }

  /**
   * Render a form to update an existing book.
   * GET books/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async edit ({ params, request, response,  }) {
  }

  /**
   * Update book details.
   * PUT or PATCH books/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
    async update ({ params, request, response }) {
    const book = await Book.find(params.id)
    book.merge(request.all())
    await book.save()
    return response.ok({
      status: 201,
      message: 'PAPA RE UPDATEADO ESO ESTA YA CHANGED',
      data: book,
    })
  }

  /**
   * Delete a book with id.
   * DELETE books/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const book = await Book.findOrFail(params.id)
    await book.delete()
    return response.ok({
      status: 201,
      message: 'PAPA RE ELMINADO NI EL PADRINO TE LO HACE ASI',
      data: book,
    })
  }
}

module.exports = BookController
