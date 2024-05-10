const fs = require('fs')
const path = require('path')

class UsersModel {
  constructor() {
    this.filePath = path.join(__dirname, '../public/data/users.json')
  }

  read() {
    return JSON.parse(fs.readFileSync(this.filePath, 'utf8'))
  }

  write(data) {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2))
  }
}

const usersModel = new UsersModel()

module.exports = usersModel