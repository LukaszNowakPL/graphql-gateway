import {objectType} from 'nexus';
import {RouteModel} from "../Route/model";
import {AircraftModel} from "../Aircraft/model";

export const airlineType = objectType({
    name: 'Airline',
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.string('name');
        t.nonNull.int('countryOfRegistration');
        t.nonNull.list.nonNull.field('aircrafts', {
            type: 'Aircraft',
            async resolve({id}, _, context) {
                return await AircraftModel.findByAirlineId(id, context)
            }
        })
        t.nonNull.list.nonNull.field('routes', {
            type: 'Route',
            async resolve({id}, _, context) {
                return await RouteModel.findByAirlineId(id, context)
            }
        })
    },
});
