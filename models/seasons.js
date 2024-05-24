const mongoose = require('mongoose')

const SeasonSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  number_of_episodes: {
    type: Number,
    maxlength: [30, 'A név nem tartalmazhat 30 karakternél többet!'],
  },
  release_date: {
    type: Date,
    required: true,
  },
})

module.exports = mongoose.model('SeasonsModel', SeasonSchema, 'seasons')
