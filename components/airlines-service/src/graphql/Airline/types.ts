import {objectType, stringArg} from 'nexus';
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
            args: {
                dep: stringArg(),
                arr: stringArg(),
            },
            async resolve({id}, {dep, arr}, context) {
                return await RouteModel.findByAirlineId(id, {dep, arr}, context)
            }
        })
    },
});
