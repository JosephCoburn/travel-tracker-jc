const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const voyageSchema = new Schema({
  location: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Voyage = mongoose.model('Voyage', voyageSchema);

module.exports = Voyage;