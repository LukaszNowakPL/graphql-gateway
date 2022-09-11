import {objectType} from 'nexus';

export const serviceType = objectType({
    name: 'Service',
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.string('name');
    },
});
