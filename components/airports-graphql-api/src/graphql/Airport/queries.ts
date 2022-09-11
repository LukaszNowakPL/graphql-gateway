import {extendType, intArg, stringArg} from 'nexus';
import {AirportModel} from "./model";

export const airportQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('airports', {
            type: 'Airport',
            async resolve(_, __, context) {
                return await AirportModel.findAll(context)
            },
        });
        t.nonNull.field('airport', {
            type: 'Airport',
            args: {
                id: intArg(),
                iata: stringArg(),
            },
            async resolve(_, {id, iata}, context) {
                if(!!iata) {
                    const airport = await AirportModel.findByIata(iata, context)
                    if (!airport) {
                        throw `NotFoundError: No airport found error - iata: ${iata}`;
                    }
                    return airport
                }
                if(!!id) {
                    const airport = await AirportModel.findById(id, context)
                    if (!airport) {
                        throw `NotFoundError: No airport found error - id: ${id}`;
                    }
                    return airport
                }
                throw 'NoArgumentError: No argument for airport query';
            },
        });
    },
});
