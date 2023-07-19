const express = require("express");

const CityController = require('../../controllers/city-controller');
const FlightsController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');

const {FlightMiddlewares} = require('./../../middelwares/index');

const router = express.Router();

router.post('/city', CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);

router.post('/flight',
    FlightMiddlewares.validateCreateFlight, 
    FlightsController.create
);

router.get('/flight', FlightsController.getAll);

router.post('/airports', AirportController.create);

module.exports = router;
