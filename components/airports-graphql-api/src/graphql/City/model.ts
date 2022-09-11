import {Context} from '../../context';

export const CityModel = {
    async findById(id: number, context: Context) {
        return await this.findOne(id, context)
    },
    async findByCountryId(id: number, context: Context) {
        const cities = await this.findAll(context)
        return cities.filter(city => city.country_id === id)
    },
    // fetch calls
    async findAll(context: Context) {
        return await context.dataSources.airportsApi.getAllCities()
    },
    async findOne(id: number, context: Context) {
        return await context.dataSources.airportsApi.getCity(id)
    }
};
