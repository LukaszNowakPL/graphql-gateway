import {extendType} from 'nexus';
import {AircraftModel} from './model';

export const aircraftQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('aircrafts', {
            type: 'Aircraft',
            async resolve(_, __, context) {
                return await AircraftModel.findAll(context);
            },
        });
    },
});
