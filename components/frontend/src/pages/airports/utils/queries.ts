import { gql } from "@apollo/client";

export const getAirportsQuery = gql`
  query getAirports {
    airports {
      id
      name
      iata
      country {
        id
        name
      }
      airlines {
        name
      }
      routes {
        arr
      }
    }
  }
`;
