const { FlightRepository, AirplaneRepository } = require("../repository/index");
const {compareTime} = require('../utils/helper');

class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    try {
      if(!compareTime(data.arrivalTime, data.departureTime)) {
        throw {error:"Arrival time cannot be less than arrival time"};
      }
      const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
      const flight = await this.flightRepository.createFlight({...data, totalSeats: airplane.capacity});
      return flight;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await this.flightRepository.getFlight(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async getAllFlights() {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async updateFlight(flightId, data) {
    try {
      const res = await this.flightRepository.updateFlight(flightId, data);
      return res;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }
}

module.exports = FlightService;

/**
 * {
 *  flightNumber,
 *  airplaneId,
 *  departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price,
 * totalSeats -> airplane
 * }
 */