const router = require('express').Router();
let Voyage = require('../models/voyage.model');
const voyagesCtrl = require('../controllers/voyages');

router.route('/').get((req, res) => {
  Voyage.find()
    .then(voyages => res.json(voyages))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const location = req.body.location;
  const date = Date.parse(req.body.date);
  const rating = Number(req.body.rating);
  const companions = req.body.companions;
  const duration = Number(req.body.duration);
  const cost = Number(req.body.cost);
  const notes = req.body.notes;

  const newVoyage = new Voyage({
    location,
    date,
    rating,
    companions,
    duration,
    cost,
    notes,
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
      voyage.date = Date.parse(req.body.date);
      voyage.rating = Number(req.body.duration);
      voyage.companions = req.body.companions;
      voyage.duration = Number(req.body.duration);
      voyage.cost = Number(req.body.cost);
      voyage.notes = req.body.notes;
      voyage.save()
        .then(() => res.json('Voyage updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../config/auth'));
router.post('/', checkAuth, voyagesCtrl.create);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;