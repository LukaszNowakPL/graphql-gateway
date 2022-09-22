import { useQuery } from '@apollo/client';
import {getAirportsQuery} from "../utils/queries";
import {GetAirportsQuery} from "../../../generated/graphql";

export const useAirportsList = () => {

    const {data, loading} = useQuery<GetAirportsQuery>(getAirportsQuery, {fetchPolicy: "no-cache"});

    const sortedData: GetAirportsQuery['airports'][0][][] = [];
    data?.airports.forEach(airport => {
        if(!Boolean(sortedData[airport.country.id])) {
            sortedData[airport.country.id] = []
        }
        sortedData[airport.country.id].push(airport)
    })

    return {
        data: sortedData,
        loading,
    }

}
