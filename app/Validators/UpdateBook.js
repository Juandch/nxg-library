'use strict'

class UpdateBook {
  get rules () {
    return {
      // validation rules
      title: 'required',
      genre_id: 'required',
      publishe_at: 'required',
      resume: 'required',
      image: 'alpha'
    }
  }
}

module.exports = UpdateBook
