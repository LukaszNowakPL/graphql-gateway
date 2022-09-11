const {delegateToSchema} = require("@graphql-tools/delegate");

module.exports = function({airportsGraphqlSubschema}) {
    return {
        Manufacturer: {
            countryDetails: {
                selectionSet: `{ country }`,
                resolve(manufacturer, args, context, info) {
                    return delegateToSchema({
                        schema: airportsGraphqlSubschema,
                        operation: 'query',
                        fieldName: 'country',
                        args: {id: manufacturer.country},
                        context,
                        info
                    })
                }
            }
        },
        Airline: {
            countryInfo: {
                selectionSet: `{ countryOfRegistration }`,
                resolve(airline, args, context, info) {
                    return delegateToSchema({
                        schema: airportsGraphqlSubschema,
                        operation: 'query',
                        fieldName: 'country',
                        args: { id: airline.countryOfRegistration },
                        context,
                        info
                    })
                }
            }
        },
        Route: {
            depAirport: {
                selectionSet: `{ dep }`,
                resolve(route, args, context, info) {
                    return delegateToSchema({
                        schema: airportsGraphqlSubschema,
                        operation: 'query',
                        fieldName: 'airport',
                        args: { iata: route.dep },
                        context,
                        info
                    })
                }
            },
            arrAirport: {
                selectionSet: `{ arr }`,
                resolve(route, args, context, info) {
                    return delegateToSchema({
                        schema: airportsGraphqlSubschema,
                        operation: 'query',
                        fieldName: 'airport',
                        args: { iata: route.arr },
                        context,
                        info
                    })
                }
            }
        }
    }
}