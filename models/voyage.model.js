const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const voyageSchema = new Schema({
  location: { type: String, required: true },
  date: { type: Date, required: true },
  rating: { type: Number },
  companions: { type: String },
  duration: { type: Number },
  cost: { type: Number },
  notes: { type: String },
}, {
  timestamps: true,
});

const Voyage = mongoose.model('Voyage', voyageSchema);

module.exports = Voyage;