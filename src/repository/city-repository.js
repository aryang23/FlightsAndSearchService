const { City } = require("./../models/index");

class CityRepository {
  async createCity({ name }) {
    console.log("Name as", name);
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
        console.log(error);
      throw { error };
    }
  }

  async deleteCity({ cityId }) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityRepository;
