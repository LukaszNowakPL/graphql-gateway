import {Context} from '../../context';

export const AirportModel = {
    async findById(id: number, context: Context) {
        return await this.findOne(id, context)
    },
    async findByCityId(id: number, context: Context) {
        const airports = await this.findAll(context)
        return airports.filter(airport => airport.airport.city === id)
    },
    async findByCountryId(id: number, context: Context) {
        const airports = await this.findAll(context)
        return airports.filter(airport => airport.country_id === id)
    },
    async findByIata(iata: string, context: Context) {
        const airports = await this.findAll(context)
        return airports.find(airport => airport.airport.iata === iata)
    },
    // fetch calls
    async findAll(context: Context) {
        return await context.dataSources.airportsApi.getAllAirports()
    },
    async findOne(id: number, context: Context) {
        return await context.dataSources.airportsApi.getAirport(id)
    }
};
