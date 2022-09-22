import { gql } from "@apollo/client";

export const getAirportQuery = gql`
  query getAirport($id: Int!) {
    airport(id: $id) {
      name
      iata
    }
  }
`;
