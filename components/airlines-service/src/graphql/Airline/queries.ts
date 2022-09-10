import {extendType, intArg, nonNull, stringArg} from 'nexus';
import {AirlineModel} from './model';

export const airlineQuery = extendType({
    type: 'Query',
    definition(t) {
        // admin
        t.nonNull.list.nonNull.field('airlines', {
            type: 'Airline',
            args: {
                airport: nonNull(stringArg()),
            },
            async resolve(_, {airport}, context) {
                return await AirlineModel.findByAirport(airport, context);
            },
        });
        t.nonNull.field('airline', {
            type: 'Airline',
            args: {
                id: nonNull(intArg()),
            },
            async resolve(_, {id}, context) {
                const airline = await AirlineModel.findById(id, context);
                if (!airline) {
                    throw `NotFoundError: No Airline found - id: ${id}`;
                }
                return airline;
            },
        });
    },
});
