import { useQuery } from "@apollo/client";
import { getAircraftsListQuery } from "../utils/queries";
import { GetAircraftsListQuery } from "../../../generated/graphql";

export const useAircraftsList = () => {
  const { data, loading } = useQuery<GetAircraftsListQuery>(
    getAircraftsListQuery
  );

  const formattedData = data?.aircrafts.map(
    ({ id, name, manufacturer: { name: manufacturerName } }) => {
      return {label: `${manufacturerName} (${name})`, value: id.toString()};
    }
  );

  return {
    data: formattedData,
    loading
  };
};
