const mongoose = require('mongoose')

mongoose.connect(process.env.mongoDbURI)

mongoose.Promise = global.Promise

module.exports = mongoose