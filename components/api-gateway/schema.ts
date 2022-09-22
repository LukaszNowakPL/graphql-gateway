const { stitchSchemas } = require('@graphql-tools/stitch');
const { introspectSchema } = require('@graphql-tools/wrap');
const makeRemoteExecutor = require('./lib/make_remote_executor');
const airlinesServiceTypeDefs = require('./services/airlines-service/extendedTypes');
const airlinesServiceResolvers = require('./services/airlines-service/extendedTypesResolvers');
const airportsGraphqlApiTypeDefs = require('./services/airports-graphql-api/extendedTypes');
const airportsGraphqlApiResolvers = require('./services/airports-graphql-api/extendedTypesResolvers');

export const getSchema = async () => {
    const airlinesServiceExec = makeRemoteExecutor('http://localhost:5001');
    const airlinesServiceSubschema = {
        schema: await introspectSchema(airlinesServiceExec),
        executor: airlinesServiceExec,
    }

    const airportsGraphqlExec = makeRemoteExecutor('http://localhost:6002');
    const airportsGraphqlSubschema = {
        schema: await introspectSchema(airportsGraphqlExec),
        executor: airportsGraphqlExec,
    }

    return stitchSchemas({
        subschemas: [
            airlinesServiceSubschema,
            airportsGraphqlSubschema
        ],
        typeDefs: /* GraphQL */ `
      ${airlinesServiceTypeDefs}
      ${airportsGraphqlApiTypeDefs}
    `,
        resolvers: {
            ...airlinesServiceResolvers({airportsGraphqlSubschema}),
            ...airportsGraphqlApiResolvers({airlinesServiceSubschema}),
        }
    });
}