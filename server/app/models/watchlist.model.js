const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const WatchlistSchema = mongoose.Schema(
  {
    title: String,
    movieId: Number,
    poster: String,
    watched: Boolean,
    userId: ObjectId
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Watchlist', WatchlistSchema);
