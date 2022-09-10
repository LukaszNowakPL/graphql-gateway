import {objectType} from 'nexus';
import {AircraftModel} from "../Aircraft/model";

export const manufacturerType = objectType({
    name: 'Manufacturer',
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.string('name');
        t.nonNull.int('country');
        t.nonNull.list.nonNull.field('aircrafts', {
            type: 'Aircraft',
            async resolve({id}, _, context) {
                return await AircraftModel.findByManufacturerId(id, context)
            }
        })
    },
});
