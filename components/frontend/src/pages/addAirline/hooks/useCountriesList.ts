import { useQuery } from "@apollo/client";
import { getCountriesListQuery } from "../utils/queries";
import { GetCountriesListQuery } from "../../../generated/graphql";

export const useCountriesList = () => {
  const { data, loading } = useQuery<GetCountriesListQuery>(
    getCountriesListQuery
  );

  const formattedData = data?.countries.map(({id, name}) => {return {label: name, value: id}})

  return {
    data: formattedData,
    loading
  };
};
