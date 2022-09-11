import {objectType} from 'nexus';
import {AirportDto} from "../../services/airportsService/types";
import {CountryModel} from "../Country/model";
import {CityModel} from "../City/model";
import {ServiceModel} from "../Service/model";

export interface AirportsApiAirport extends AirportDto {}

export const airportType = objectType({
    name: 'Airport',
    sourceType: {
        module: __filename,
        export: 'AirportsApiAirport',
    },
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.string('name', {
            resolve({airport: {name}}) {
                return name
            },
        });
        t.nonNull.string('iata', {
            resolve({airport: {iata}}) {
                return iata
            },
        });
        t.nonNull.field('city', {
            type: 'City',
            async resolve({airport: {city}}, _, context) {
                return await CityModel.findById(city, context)
            }
        });
        t.int('paxAmount', {
            resolve({airport: {pax}}) {
                return pax || null
            }
        });
        t.nonNull.field('country', {
            type: 'Country',
            async resolve({country_id}, _, context) {
                return await CountryModel.findById(country_id, context)
            }
        });
        t.nonNull.list.nonNull.field('services', {
            type: 'Service',
            async resolve({airport: {services}}, _, context) {
                if(!services) {
                    return []
                }
                return await Promise.all(services.map(id => ServiceModel.findById(id, context)))
            }
        });
    },
});
