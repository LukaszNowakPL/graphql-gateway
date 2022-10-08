import {extendType, intArg, list, nonNull, stringArg} from 'nexus';
import {AirlineModel} from './model';

export const airlineMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('addAirline', {
            type: 'Airline',
            args: {
                name: nonNull(stringArg()),
                countryOfRegistration: nonNull(intArg()),
                aircrafts: nonNull(list(nonNull(intArg()))),
            },
            async resolve(_, data, context) {
                return await AirlineModel.createAirline(data, context);
            },
        });
    },
});
