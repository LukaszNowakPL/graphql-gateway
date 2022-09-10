import {objectType} from 'nexus';
import {ServiceDto} from "../../services/airportsService/types";

export interface AirportsApiService extends ServiceDto {}

export const serviceType = objectType({
    name: 'Service',
    sourceType: {
        module: __filename,
        export: 'AirportsApiService',
    },
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.string('name');
    },
});
