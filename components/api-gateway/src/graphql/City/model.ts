import {Context} from '../../context';

export const CityModel = {
    async findById(id: number, context: Context) {
        return await this.findOne(id, context)
    },
    // fetch calls
    async findOne(id: number, context: Context) {
        return await context.dataSources.airportsApi.getCity(id)
    }
};
