import { GetAirportsQuery } from "../../../../generated/graphql";

export const getTableRows = (airports: GetAirportsQuery["airports"]) =>
  airports.map(({ name, iata, id, airlines, routes }) => {
    return {
      name: `${name} (${iata})`,
      routes: routes.reduce(
        (prev, route) => {
          if (!prev.includes(route.arr)) {
            prev.push(route.arr);
          }
          return prev;
        },
        [] as string[]
      ).length,
      airlines: airlines.map(({ name }) => name).join(", "),
      link: { id, name, iata }
    };
  });
