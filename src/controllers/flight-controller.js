const {FlightService} = require('./../services/index');
const {SuccessCodes, ServerErrorCodes} = require('../utils/error-codes');
const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            err: {},
            message: "Successfully created a flight"
        })
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            err: error,
            message: "Not able to create a flight"
        })
    }
}

const getAll = async (req, res) => {
    try {
        const flight = await flightService.getAllFlights(req.query);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            err: {},
            message: "Successfully fetched all flights"
        })
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            err: error,
            message: "Not able to fetch a flight"
        })
    }
}

const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            err: {},
            message: "Successfully fetched all flights"
        })
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            err: error,
            message: "Not able to fetch a flight"
        })
    }
}

const update = async (req, res) => {
    try {
        const flight = await flightService.updateFlight(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            err: {},
            message: "Successfully updated the flight"
        })
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            err: error,
            message: "Not able to fetch a flight"
        })
    }
}

module.exports = {
    create,
    getAll,
    get,
    update
}