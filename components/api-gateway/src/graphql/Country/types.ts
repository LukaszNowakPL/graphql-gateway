import {objectType} from 'nexus';
import {CountryDto} from "../../services/airportsService/types";

export interface AirportsApiCountry extends CountryDto {}

export const countryType = objectType({
    name: 'Country',
    sourceType: {
        module: __filename,
        export: 'AirportsApiCountry',
    },
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.string('name');
    },
});
