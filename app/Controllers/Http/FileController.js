'use strict';
const Helpers = use('Helpers');
const Book = use('App/Models/Book')
const Drive = use('Drive');

class FileController {
  async download ({ params, response }) {
    const filePath = `uploads/${params.fileName}`;
    let isExist = await Drive.exists(Helpers.publicPath(filePath));

    if (isExist) {
      return response.download(Helpers.publicPath(filePath));
    }
    return 'File does not exist';
  }

  async upload ({ request, params }) {

    const book_id = params.id
    const book = await Book.find(book_id)
    const image_name = 'image_' + book.title
    const image_name_mod = image_name.split(' ').join('_')

    const file = request.file('image', {
      types: ['image'],
      size: '2mb',
      extnames: ['png','jpg','jpeg','gif']
    })

    await file.move(Helpers.publicPath('uploads'), {
      name: image_name_mod+'.'+file.extname,
      overwrite: true,
    });

    if(file.extname === 'png'||file.extname === 'jpg'||file.extname === 'jpge'|file.extname === 'gif'){
      book.image = image_name_mod+'.'+file.extname
      await book.save()
    }else{
      return file.error().message;
    }

    if (!file.moved()) {
      return file.error();
    }
    return 'File uploaded PUTITO ' + book.image  ;
  }
}
module.exports = FileController;
