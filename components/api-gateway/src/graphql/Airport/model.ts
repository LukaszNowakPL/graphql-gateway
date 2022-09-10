import {Context} from '../../context';

export const AirportModel = {
    async findAll(context: Context) {
        return await context.dataSources.airportsApi.getAllAirports()
    },
    async findById(id: number, context: Context) {
        return await this.findOne(id, context)
    },
    // fetch calls
    async findOne(id: number, context: Context) {
        return await context.dataSources.airportsApi.getAirport(id)
    }
};
