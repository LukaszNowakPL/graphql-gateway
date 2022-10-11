# GraphQL Gateway (Frontend application)

This components is a frontend application consuming data exposed by `Api Gateway Service`. It displays list of airports as well as details of an airport. It also exposes form for creating an airline.

## Architecture and tech-stack scheme

This React application is build on top of `Vite` tooling. The UI is based on `Agnostic UI` library with some small help of `emotion` library. It's routing is based on `React Router` (v.6). Form handling was delegated into `React Hook Form` library together with `YUP` for data validation. GraphQL functionalities are covered by `Apollo Client` and type safety is provided by `GraphQL Codegen` tool. Overall it is written using Typescript.

## End to end type safety solution.

In order to connect with GraphQL endpoint exposed by `Api Gateway Service`, application uses `useQuery` or `useMutation` hooks of `@apollo/client` library. Those hooks take `gql` commands that are stored on `/src/pages/**/utils/(queries|mutations).ts` file.

Given location is crucial for `GraphQL Codegen` tool (check `/codegen.yml` configuration). It expects consumed `gql` commands being there in order to create types of data returned by `@apollo/client` hook. Those types are created based on GraphQL schema exposed by `Api Gateway Service`.

Names of types generated are aligned with names of const holding `gql` command. For example `gql` command stored under `getAircraftsListQuery` const will be given name of `GetAircraftsListQuery`. This type should be use as generic type passed to `useQuery` hook calling `getAircraftsListQuery` command (i.e. `useQuery<GetAircraftsListQuery>(getAircraftsListQuery)`). This way data exposed by hook is aligned with expected shape of response from GraphQL Api.

Once the shape of `gql` command changes, the type definition should be regenerated.

## Available scripts

It's recommended to use project-wise commands described on main Readme file as they provide e2e functionality of the project. However, they call component-specific scripts.

### `npm install`

Installs all dependencies.

### `npm run dev`

Starts server in development mode. The frontend application is available on http://localhost:3000/

In order to make application consuming GraphQL data all backend services have to be available at the first place.

### `npm run generate`

Creates types of data returned and variables consumed by identified `gql` commands.

In order to generate types all backend services consumed by application have to be available at the first place.

## Learn More

Below is the list of most important technologies used to form this component:

- [GraphQL](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [GraphQL Code Generator](https://github.com/dotansimha/graphql-code-generator#readme)
- [Vite](https://vitejs.dev/)
- [React Hook Form](https://react-hook-form.com/get-started)
- [Agnostic UI](https://www.agnosticui.com/)
- [React Router](https://reactrouter.com/en/main)