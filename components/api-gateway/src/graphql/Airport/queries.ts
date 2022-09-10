import {extendType, intArg, nonNull} from 'nexus';
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
            args: {id: nonNull(intArg())},
            async resolve(_, {id}, context) {
                return await AirportModel.findById(id, context)
            },
        });
    },
});
