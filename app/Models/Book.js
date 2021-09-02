'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Tag = use('App/Models/Tag')
const Author = use('App/Models/Author')

class Book extends Model {
  genre(){
    return this.belongsTo('App/Models/Genre')
  }
  tags(){
    return this.belongsToMany('App/Models/Tag')
  }
  authors(){
    return this.belongsToMany('App/Models/Author')
  }

  async syncTags(tags){
    let tagsIds = []
      for (let x in tags.tags){
        let thisTag = await Tag.findBy('name', tags.tags[x])
        if (!thisTag) {
          thisTag = await Tag.create({'name':tags.tags[x]})
        }
        tagsIds.push(thisTag.id)
      }
    this.tags().sync(tagsIds)
  }

  async syncAuthors(authors){
    var authorsIds = []
    if(typeof authors.authors == "string"){
      let thisAuthor = await Author.findBy('name', authors.authors)
      authorsIds.push(thisAuthor.id)
    }else{
      for (let x in authors.authors){
        let thisAuthor = await Author.findBy('name', authors.authors[x])
        console.log(thisAuthor)
        authorsIds.push(thisAuthor.id)
      }
    }
    this.authors().sync(authorsIds)
  }
}

module.exports = Book
