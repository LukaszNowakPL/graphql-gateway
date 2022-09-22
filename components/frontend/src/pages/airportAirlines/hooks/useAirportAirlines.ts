import { useQuery } from "@apollo/client";
import { getAirportAirlinesQuery } from "../utils/queries";
import { GetAirportAirlinesQuery } from "../../../generated/graphql";

export const useAirportAirlines = (id: number) => {
  const { data, loading } = useQuery<GetAirportAirlinesQuery>(
    getAirportAirlinesQuery,
    {
      fetchPolicy: "no-cache",
      variables: { id }
    }
  );

  let airlines = {} as Record<string, string[]>
  data?.airport.routes.forEach(route => {
      const airlineName = route.airline.name
      if(!Boolean(airlines[airlineName])) {
          airlines[airlineName] = []
      }
      if(data.airport.iata === route.dep) {
          if(!airlines[airlineName].includes(route.arr)) {
              airlines[airlineName].push(route.arr)
          }
      }
      if(data.airport.iata === route.arr) {
          if(!airlines[airlineName].includes(route.dep)) {
              airlines[airlineName].push(route.dep)
          }
      }
  })

  return {
    data: airlines,
    loading
  };
};
