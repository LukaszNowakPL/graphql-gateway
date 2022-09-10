import {ApolloServer} from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import {schema} from './schema';
import {context} from './context';

export const server = new ApolloServer({
    schema,
    context,
    // introspection: false,
    introspection: true, // https://www.howtographql.com/typescript-apollo/9-deployment/
    // plugins: [],
    plugins: [ApolloServerPluginLandingPageLocalDefault()], // https://www.howtographql.com/typescript-apollo/9-deployment/
    cache: "bounded",
});

const port = process.env.PORT || 5001;

server.listen({port}).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});
