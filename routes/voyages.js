const router = require('express').Router();
let Voyage = require('../models/voyage.model');

router.route('/').get((req, res) => {
  Voyage.find()
    .then(voyages => res.json(voyages))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const location = req.body.location;
  const date = Date.parse(req.body.date);

  const newVoyage = new Voyage({
    location,
    date,
  });

  newVoyage.save()
  .then(() => res.json('Voyage added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Voyage.findById(req.params.id)
      .then(voyage => res.json(voyage))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    Voyage.findByIdAndDelete(req.params.id)
      .then(() => res.json('Voyage deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').post((req, res) => {
    Voyage.findById(req.params.id)
      .then(voyage => {
        voyage.location = req.body.location;
        voyage.date = 
  Date.parse(req.body.date);
        voyage.save()
          .then(() => res.json('Voyage updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;