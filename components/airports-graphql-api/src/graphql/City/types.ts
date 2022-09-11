import {objectType} from 'nexus';
import {AirportModel} from "../Airport/model";

export const cityType = objectType({
    name: 'City',
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.string('name');
        t.nonNull.list.nonNull.field('airports', {
            type: 'Airport',
            async resolve({id}, _, context) {
                return await AirportModel.findByCityId(id, context)
            }
        })
    },
});
