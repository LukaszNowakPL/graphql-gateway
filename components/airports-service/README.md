# GraphQL Gateway (Airports Service)

This components is a backend service responsible for geographical part of project's domain, namely countries, cities, airports and their services. It exposes Rest Api endpoints for fetching data. Data manipulation endpoints are not available.

## Architecture and technologies used

The component is based on `JSON Server` package. Data definition is stored on `db.json` file. It's shape defines basic endpoints being exposed by the server.

## Available scripts

It's recommended to use project-wise commands described on main Readme file as they provide e2e functionality of the project. However, they call component-specific scripts.

### `npm install`

Installs all dependencies.

### `npm run dev`

Starts backend server exposing Rest Api endpoints available on http://localhost:6001/

Using this url on the browser will fire up dashboard for exploring endpoints served by `JSON Server`.

## Learn More

Below is the list of most important technologies used to form this component:

- [JSON Server](https://github.com/typicode/json-server)
