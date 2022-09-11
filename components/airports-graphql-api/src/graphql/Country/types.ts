import {objectType} from 'nexus';
import {CityModel} from "../City/model";
import {AirportModel} from "../Airport/model";

export const countryType = objectType({
    name: 'Country',
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.string('name');
        t.nonNull.list.nonNull.field('cities', {
            type: 'City',
            async resolve({id}, _, context) {
                return await CityModel.findByCountryId(id, context)
            }
        })
        t.nonNull.list.nonNull.field('airports', {
            type: 'Airport',
            async resolve({id}, _, context) {
                return await AirportModel.findByCountryId(id, context)
            }
        })
    },
});
