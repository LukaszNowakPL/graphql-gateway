import {getSchema} from "./schema";
import {printSchema} from "graphql";
import * as fs from "fs";

(async () => {
    const schema = await getSchema();
    const sdl = printSchema(schema);
    await fs.writeFile(__dirname + '/schema.graphql', sdl, () => {});
})();