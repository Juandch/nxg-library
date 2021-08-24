'use strict'

class StoreBook {
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

module.exports = StoreBook
