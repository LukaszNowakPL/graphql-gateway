const express = require('express');
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql');

module.exports = function makeServer(schema, name, port=4000) {
  const app = express();
  app.use(cors()) // enable `cors` to set HTTP response header: Access-Control-Allow-Origin: *
  app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
  app.listen(port, () => console.log(`${name} running at http://localhost:${port}/graphql`));
};
