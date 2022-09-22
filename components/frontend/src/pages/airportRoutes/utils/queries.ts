import { gql } from "@apollo/client";

export const getAirportRoutesQuery = gql`
  query getAirportRoutes($id: Int!) {
    airport(id: $id) {
      iata
      routes(bothDirections: true) {
        dep
        depAirport {
          name
          iata
        }
        arr
        arrAirport {
          name
          iata
        }
        flightNumber
        airline {
          name
        }
      }
    }
  }
`;
