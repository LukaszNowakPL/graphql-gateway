import {getSchema} from "./schema";

const waitOn = require('wait-on');
const makeServer = require('./lib/make_server');

waitOn({ resources: ['tcp:5001', 'tcp:6002'] }, async () => {
  makeServer(await getSchema(), 'gateway', 4000);
});
