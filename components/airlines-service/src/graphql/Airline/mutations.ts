import {extendType, intArg, nonNull, stringArg} from 'nexus';
import {AirlineModel} from './model';

export const airlineMutation = extendType({
    type: 'Mutation',
    definition(t) {
        /*t.nonNull.field('postAirline', {
            type: 'Airline',
            args: {
                name: nonNull(stringArg()),
                countryOfRegistration: nonNull(intArg()),
            },
            async resolve(_, data, context) {
                return await AirlineModel.createAirline(data, context)
            },
        });*/
    },
});
