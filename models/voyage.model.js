const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const voyageSchema = new Schema({
  date: { type: Date, required: true },
  region: { type: String, required: true },
  country: { type: String, required: true },
  territory: { type: String },
  location: { type: String },
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