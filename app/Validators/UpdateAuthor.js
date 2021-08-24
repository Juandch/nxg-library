'use strict'

class UpdateAuthor {
  get rules () {
    return {
      // validation rules
      name: 'required',
      gender: 'required',
      bth_day: 'required',
      bio: 'required'
    }
  }
}

module.exports = UpdateAuthor
