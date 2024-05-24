const { ObjectId } = require('mongoose')
const mongoose = require('mongoose')

const episodeSchema = new mongoose.Schema({
	_id: {
		type: Number,
		required: true,
	},
	season: {
		type: Number,
		required: true,
		ref: 'SeasonsModel',
	},
	episode_in_season: {
		type: Number,
	},
	title: {
		type: String,
	},
	directed_by: {
		type: String,
	},
	written_by: {
		type: String,
	},
	air_date: {
		type: Date,
	},
	us_viewers_in_millions: {
		type: Number,
	}
})

module.exports = mongoose.model('EpisodesModel', episodeSchema, 'episodes')