import {extendType, intArg, nonNull} from 'nexus';
import {CountryModel} from "./model";

export const countryQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('countries', {
            type: 'Country',
            async resolve(_, __, context) {
                return await CountryModel.findAll(context)
            },
        });
        t.nonNull.field('country', {
            type: 'Country',
            args: {id: nonNull(intArg())},
            async resolve(_, {id}, context) {
                return await CountryModel.findById(id, context)
            },
        });
    },
});
