import { gql } from "@apollo/client";

export const addAirlineMutation = gql`
  mutation addAirline(
    $name: String!
    $countryOfRegistration: Int!
    $aircrafts: [Int!]!
  ) {
    addAirline(
      name: $name
      countryOfRegistration: $countryOfRegistration
      aircrafts: $aircrafts
    ) {
      id
    }
  }
`;
