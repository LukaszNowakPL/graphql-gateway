# GraphQL Gateway (Api gateway Service)

This components is a backend service responsible for merging GraphQL Apis into one. It's architecture is a scratch of two different concepts:
- Api Gateway as a single entry point for accessing data from different backend services
- Backend for frontend pattern that gathers and exposes all data consumed by dedicated frontend application

## Architecture and tech-stack scheme

![Api Gateway Service Architecture schema](/../../readme-img/api-gateway-service-architectural-schema.png)

Components uses several tools of `@graphql-tools` environment for manipulation over existing GraphQL schemas exposed by several services in order to create and manage final schema.

Component uses `Express` and `express-graphql` for serving GraphQL endpoint and handling overall server functionalities.

## Existing schema manipulations

Existing services and their schemas consumed by the service are defined on `schema.ts` file. The service consumes `Airlines Service` (available under http://localhost:5001 url) and `Airports GraphQL Api Service` (available under http://localhost:6002 url).

Type extension of existing schema is defined on `/services/**/extendedTypes.js` file, while resolvers for extending fields are defined on `/services/**/extendedTypeResolvers` file.

For example `Airline` type of `Airlines Service` is extended by `countryInfo` field. The field is of `Country` type, and it's resolver calls `country` query of `Airports GraphQL Api Service`.

## Available scripts

It's recommended to use project-wise commands described on main Readme file as they provide e2e functionality of the project. However, they call component-specific scripts.

### `npm install`

Installs all dependencies.

### `npm run dev`

Starts server in development mode. It exposes GraphQL endpoint available on http://localhost:4000/graphql

Using this url in the browser will fire up `GraphiQL` tool for manual issuing GraphQL queries. The tool is provided by `express-graphql`.

In order to start the service all services consumed by it has to be available at the first place.

### `npm run generate`

Creates GraphQL schema exposed by service.

In order to generate the schema all services consumed by `Airports GraphQL Api Service` has to be available at the first place.

## Learn More

Below is the list of most important technologies used to form this component:

- [GraphQL Tools](https://www.the-guild.dev/graphql/tools)
- [express-graphql](https://www.npmjs.com/package/express-graphql)
