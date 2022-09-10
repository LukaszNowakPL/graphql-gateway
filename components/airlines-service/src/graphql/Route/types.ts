import {objectType} from 'nexus';
import {AirlineModel} from "../Airline/model";

export const routeType = objectType({
    name: 'Route',
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.string('dep');
        t.nonNull.string('arr');
        t.nonNull.string('flightNumber');
        t.nonNull.int('airlineId');
        t.nonNull.field('airline', {
            type: 'Airline',
            async resolve({airlineId}, _, context) {
                const airline = await AirlineModel.findById(airlineId, context)
                if (!airline) {
                    throw `NotFoundError: No airline found error - id: ${airlineId}`;
                }
                return airline
            }
        })
    },
});
