import {extendType, intArg, nonNull} from 'nexus';
import {ManufacturerModel} from './model';

export const manufacturerQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('manufacturers', {
            type: 'Manufacturer',
            args: {
                country: nonNull(intArg()),
            },
            async resolve(_, {country}, context) {
                return await ManufacturerModel.findByCountryId(country, context);
            },
        });
    },
});
