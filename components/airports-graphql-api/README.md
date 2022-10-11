# GraphQL Gateway (Airports GraphQL Api Service)

This components is a backend service responsible for translating and remapping Rest Api exposed by `Airports Service` into GraphQL Api.

## Architecture and tech-stack scheme

Component's stack and overall architecture is very similar to one applied to `Airlines Service` of the project. The main difference is source of data, as the component uses Rest Api exposed by `Airports Service` instead od `Prisma ORM`.

Component uses `Nexus` to create GraphQL schema in TypeScript. It is consumed on `/prisma/**/(queries|mutations|types).ts` files. It serves type-safe connections with Dtos returned from Rest api (however Dto definitions have to be created manually) as well as is a base for GraphQL schema creation.

Component uses `Apollo Server` for serving GraphQL endpoint and handling overall server functionalities.

## Nexus type definition architecture

Items used for GraphQL schema creation are available on `/src/graphql` folder.

They are encapsulated by domain parts that are mostly aligned with Rest Api endpoints. Once domain exposes direct query, there are `queries.ts` file created with respective Nexus type extensions. Mutations are not available as `Airports Service` does not expose POST/PUT endpoints.

In order to domain-parts encapsulation (helps with managing the scale), those functionalities should make calls to each domain's model. They should call descriptive, source-independent methods like `findByCountryId` method of `AirportModel`.

Those methods then are forming arguments and further call context-dependent methods of same model. Those methods are strictly related with an endpoint. For example `findOne` method of `AirportModel` will then call `getAirport` method of `airportsApi` with unchanged `id` argument. Once all data has been fetched from Api, it then may be filtered or reshaped.

Data returned by queries are of defined shape (type). Type definitions for each domain-parts are defined in `/src/graphql/**/types.ts` file. They contain resolver definitions for each field. Once field is of other type, it's resolver should call method of respective domain-based model.

For example in order to get values of `city` field of `Airport` model, the resolver should make a call to `findById` method exposed by `CityModel`.

## Available scripts

It's recommended to use project-wise commands described on main Readme file as they provide e2e functionality of the project. However, they call component-specific scripts.

### `npm install`

Installs all dependencies.

### `npm run dev`

Starts server in development mode. It exposes GraphQL endpoint available on http://localhost:6002/

Using this url in the browser will fire up `Apollo Studio` for manual issuing GraphQL queries. The tool is provided by `Apollo`.

It is recommended to restart the server after any changes made to nexus types definition, queries or mutations. This is for regeneration of Nexus types, relinting and typecheck of the project using new type definitions.

### `npm run generate`

Creates GraphQL schema exposed by service.

## Learn More

Below is the list of most important technologies used to form this component:

- [Apollo Datasource](https://www.apollographql.com/docs/apollo-server/data/data-sources/)
- [Nexus](https://nexusjs.org/docs/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
