# GraphQL Gateway (Airlines Service)

This components is a backend service responsible for airline part of project's domain, namely manufacturer companies, aircrafts, airlines and their routes. It exposes GraphQL endpoint for queries and mutations.

## Architecture and tech-stack scheme

![Architecture schema](/../../readme-img/architectural-schema.png)

Component consumes `SQLite` database for storing the data. It's simple in-process database that stores data in `/prisma/devDB/dev.db` file. The file is delivered within the component so the database is prefilled with some example data.

Communication between storage and application is handled by `Prisma ORM`. Db schema (structure) is defined on `/prisma/schema.prisma` file. Data for initial db seeding is defined on `/prisma/seed.data.ts` file. Db migrations are stored by `/prisma/migration` folder. Direct calls of methods exposed by Prisma takes place in `/graphql/**/model.ts` files.

Component uses `Nexus` to create GraphQL schema in TypeScript. It is consumed on `/prisma/**/(queries|mutations|types).ts` files. It serves type-safe connections with `Prisma ORM` as well as is a base for GraphQL schema creation.

Component uses `Apollo Server` for serving GraphQL endpoint and handling overall server functionalities.

## Nexus type definition architecture

Items used for GraphQL schema creation are available on `/src/graphql` folder.

They are encapsulated by domain parts that are mostly aligned with db tables. Once domain exposes direct query or mutation, there are `queries.ts` or `mutations.ts` file created with respective Nexus type extensions.

In order to domain-parts encapsulation (helps with managing the scale), those functionalities should make calls to each domain's model. They should call descriptive, database-independent methods like `findByAirlineId` method of `AircraftModel`.

Those methods then are forming arguments and further call context-dependent methods of same model. Those methods are strictly related with db handler. For example `findMany` method will then call `findMany` method of `prisma` db handler with unchanged `where` argument.

Data returned by queries or mutations are of defined shape. Shape definitions for each domain-parts are defined in `/src/graphql/**/types.ts` file. They contain resolver definitions for each field. Once field is of other domain, it's resolver should call method of respective domain-based model. For example in order to get values of  `airlines` field of `Aircraft` model, the resolver should make a call to `findByAircraftId` method exposed by `AirlineModel`.

## Available scripts

It's recommended to use project-wise commands described on main Readme file as they provide e2e functionality of the project. However, they call component-specific scripts.

### `npm install`

Installs all dependencies.

### `npx prisma generate`

Generates Prisma client. This command is necessary to run only for starting up the project or when `node_modules` folder is being deleted. This is because Prisma client is being created directly on the folder.

### `npm run dev`

Starts server in development mode. It exposes GraphQL endpoint available on http://localhost:5001/

Using this url in the browser will fire up `Apollo Studio` for manual issuing GraphQL queries. The tool is provided by `Apollo`.

It is recommended to restart the server after any changes made to nexus types definition, queries or mutations. This is for regeneration of Nexus types, relinting and typecheck of the project using new type definitions.

### `npx prisma studio`

Starts Prisma Studio. This tool is very helpful for previewing and basic manipulations over data stored into database.

Prisma Studio should fire up automatically and be available on http://localhost:5555/

### `npm run generate`

Creates GraphQL schema exposed by service.

## Learn More

Below is the list of most important technologies used to form this component:

- [SQLite](https://www.sqlite.org/index.html)
- [Prisma ORM](https://www.prisma.io/docs/)
- [Nexus](https://nexusjs.org/docs/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
