import { useQuery } from "@apollo/client";
import { getAirportQuery } from "../utils/queries";
import { GetAirportQuery } from "../../../generated/graphql";

export const useAirport = (id: number) => {
  const { data, loading } = useQuery<GetAirportQuery>(getAirportQuery, {
    fetchPolicy: "no-cache",
    variables: { id }
  });

  return {
    data,
    loading
  };
};
