import {objectType} from 'nexus';
import {ManufacturerModel} from "../Manufacturer/model";
import {AirlineModel} from "../Airline/model";

export const aircraftType = objectType({
    name: 'Aircraft',
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.string('name');
        t.nonNull.int('manufacturerId');
        t.nonNull.field('manufacturer', {
            type: 'Manufacturer',
            async resolve({manufacturerId}, _, context) {
                const manufacturer = await ManufacturerModel.findById(manufacturerId, context)
                if (!manufacturer) {
                    throw `NotFoundError: No manufacturer found error - id: ${manufacturerId}`;
                }
                return manufacturer
            }
        })
        t.nonNull.int('capacity');
        t.nonNull.list.nonNull.field('airlines', {
            type: 'Airline',
            async resolve({id}, _, context) {
                return await AirlineModel.findByAircraftId(id, context)
            }
        })
    },
});
