'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Author = use('App/Models/Author')
/**
 * Resourceful controller for interacting with authors
 */
class AuthorController {
  /**
   * Show a list of all authors.
   * GET authors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index ({ request, response, view }) {
    const authors = await Author.all()
    return response.ok({
      status: 201,
      message: 'PAPA RE LISTO',
      data: authors,
    })
  }

  /**
   * Render a form to be used for creating a new author.
   * GET authors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async create ({ request, response }) {
  }

  /**
   * Create/save a new author.
   * POST authors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const author = await Author.create(request.all())
    //await author.save()
    return response.created({
      status: 201,
      message: 'Created successfully',
      data: author,
    })
  }

  /**
   * Display a single author.
   * GET authors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show ({ params, request, response }) {
    const authors = await Author.find(params.id)
    return response.ok({
      status: 201,
      message: 'PAPA RE LISTO',
      data: authors,
    })
  }


  /**
   * Render a form to update an existing author.
   * GET authors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async edit ({ params, request, response }){

  }

  /**
   * Update author details.
   * PUT or PATCH authors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const authors = await Author.find(params.id)
    authors.merge(request.all())
    await authors.save()
    return response.ok({
      status: 201,
      message: 'PAPA RE UPDATEADO ESO ESTA YA CHANGED',
      data: authors,
    })
  }

  /**
   * Delete a author with id.
   * DELETE authors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const authors = await Author.findOrFail(params.id)
    await authors.delete()
    return response.ok({
      status: 201,
      message: 'PAPA RE ELMINADO NI EL PADRINO TE LO HACE ASI',
      data: authors,
    })
  }
}

module.exports = AuthorController
