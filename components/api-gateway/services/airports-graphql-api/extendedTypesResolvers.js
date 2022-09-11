const {delegateToSchema} = require("@graphql-tools/delegate");

module.exports = function({airlinesServiceSubschema}) {
    return {
        Country: {
            manufacturers: {
                selectionSet: `{ id }`,
                resolve(country, args, context, info) {
                    return delegateToSchema({
                        schema: airlinesServiceSubschema,
                        operation: 'query',
                        fieldName: 'manufacturers',
                        args: { country: country.id },
                        context,
                        info
                    })
                }
            }
        },
        Airport: {
            airlines: {
                selectionSet: `{ iata }`,
                resolve(airport, args, context, info) {
                    return delegateToSchema({
                        schema: airlinesServiceSubschema,
                        operation: 'query',
                        fieldName: 'airlines',
                        args: { airport: airport.iata },
                        context,
                        info
                    })
                }
            }
        }
    }
}