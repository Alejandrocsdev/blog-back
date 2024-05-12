const fs = require('fs')
const path = require('path')

class ArticlesCategoriesModel {
  constructor() {
    this.filePath = path.join(__dirname, '../public/data/articles_categories.json')
  }

  read() {
    return JSON.parse(fs.readFileSync(this.filePath, 'utf8'))
  }

  write(data) {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2))
  }
}

const articlesCategoriesModel = new ArticlesCategoriesModel()

module.exports = articlesCategoriesModel
