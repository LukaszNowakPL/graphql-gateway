import { gql } from "@apollo/client";

export const getCountriesListQuery = gql`
  query getCountriesList {
    countries {
      id
      name
    }
  }
`;

export const getAircraftsListQuery = gql`
  query getAircraftsList {
    aircrafts {
      id
      name
      manufacturer {
        name
      }
    }
  }
`;
