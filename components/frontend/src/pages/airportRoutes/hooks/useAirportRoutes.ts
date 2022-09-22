import { useQuery } from "@apollo/client";
import { getAirportRoutesQuery } from "../utils/queries";
import { GetAirportRoutesQuery } from "../../../generated/graphql";

export const useAirportRoutes = (id: number) => {
  const { data, loading } = useQuery<GetAirportRoutesQuery>(
    getAirportRoutesQuery,
    {
      fetchPolicy: "no-cache",
      variables: { id }
    }
  );

  const sortedData = data
    ? {
        iata: data.airport.iata,
        routes: data.airport.routes,
        from: data.airport.routes
          .filter(route => route.dep === data.airport.iata)
          .reduce(
            (prev, route) => {
              if (!prev.includes(route.arr)) {
                prev.push(route.arr);
              }
              return prev;
            },
            [] as string[]
          ),
        to: data.airport.routes
          .filter(route => route.arr === data.airport.iata)
          .reduce(
            (prev, route) => {
              if (!prev.includes(route.dep)) {
                prev.push(route.dep);
              }
              return prev;
            },
            [] as string[]
          )
      }
    : undefined;

  return {
    data: sortedData,
    loading
  };
};
