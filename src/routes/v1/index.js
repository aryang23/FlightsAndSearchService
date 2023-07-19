const express = require("express");

const CityController = require('../../controllers/city-controller');
const FlightsController = require('../../controllers/flight-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);

router.post('/flight', FlightsController.create);
router.get('/flight', FlightsController.getAll);

module.exports = router;
