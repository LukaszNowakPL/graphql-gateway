import {Context} from '../../context';

export const CountryModel = {
    async findById(id: number, context: Context) {
        return await this.findOne(id, context)
    },
    // fetch calls
    async findAll(context: Context) {
        return await context.dataSources.airportsApi.getAllCountries()
    },
    async findOne(id: number, context: Context) {
        return await context.dataSources.airportsApi.getCountry(id)
    }
};
