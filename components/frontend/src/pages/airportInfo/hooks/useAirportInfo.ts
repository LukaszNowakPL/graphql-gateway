import { useQuery } from "@apollo/client";
import { getAirportInfoQuery } from "../utils/queries";
import { GetAirportInfoQuery } from "../../../generated/graphql";

export const useAirportInfo = (id: number) => {
  const { data, loading } = useQuery<GetAirportInfoQuery>(getAirportInfoQuery, {
    fetchPolicy: "no-cache",
    variables: { id }
  });

  return {
    data,
    loading
  };
};
