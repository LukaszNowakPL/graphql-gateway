import {ApolloServer} from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import {schema} from './schema';

const AirportsServiceApi = require('./services/airportsService/airportsService')

const dataSources = () => ({
    airportsApi: new AirportsServiceApi(),
})

export const server = new ApolloServer({
    schema,
    dataSources,
    // introspection: false,
    introspection: true, // https://www.howtographql.com/typescript-apollo/9-deployment/
    // plugins: [],
    plugins: [ApolloServerPluginLandingPageLocalDefault()], // https://www.howtographql.com/typescript-apollo/9-deployment/
    cache: "bounded",
});

const port = process.env.PORT || 4000;

server.listen({port}).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});
