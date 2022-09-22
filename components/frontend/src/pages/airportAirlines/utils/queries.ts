import { gql } from "@apollo/client";

export const getAirportAirlinesQuery = gql`
  query getAirportAirlines($id: Int!) {
    airport(id: $id) {
      iata
      routes(bothDirections: true) {
        dep
        arr
        airline {
          name
        }
      }
    }
  }
`;
