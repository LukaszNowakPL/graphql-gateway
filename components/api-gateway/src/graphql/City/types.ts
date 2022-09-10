import {objectType} from 'nexus';
import {CityDto} from "../../services/airportsService/types";

export interface AirportsApiCity extends CityDto {}

export const cityType = objectType({
    name: 'City',
    sourceType: {
        module: __filename,
        export: 'AirportsApiCity',
    },
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.string('name');
    },
});
