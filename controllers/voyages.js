var Voyage = require('../models/voyage.model');

module.exports = {
  create,
};

async function create(req, res) {
  console.log(req)
  try {
    await Voyage.create(req.body);
  } catch (err) {
    res.json({err});
  }
}
