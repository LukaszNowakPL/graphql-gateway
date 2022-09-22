import { gql } from "@apollo/client";

export const getAirportInfoQuery = gql`
  query getAirportInfo($id: Int!) {
    airport(id: $id) {
      name
      iata
      country {
        name
      }
      paxAmount
      routes {
        arr
      }
      airlines {
        id
      }
      services {
        name
      }
    }
  }
`;
