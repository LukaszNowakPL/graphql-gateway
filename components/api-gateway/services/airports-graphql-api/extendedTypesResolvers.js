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
        }
    }
}