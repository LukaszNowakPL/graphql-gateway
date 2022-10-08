import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Aircraft = {
  __typename?: 'Aircraft';
  airlines: Array<Airline>;
  capacity: Scalars['Int'];
  id: Scalars['Int'];
  manufacturer: Manufacturer;
  manufacturerId: Scalars['Int'];
  name: Scalars['String'];
};

export type Airline = {
  __typename?: 'Airline';
  aircrafts: Array<Aircraft>;
  countryInfo: Country;
  countryOfRegistration: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  routes: Array<Route>;
};


export type AirlineRoutesArgs = {
  arr?: InputMaybe<Scalars['String']>;
  dep?: InputMaybe<Scalars['String']>;
};

export type Airport = {
  __typename?: 'Airport';
  airlines: Array<Airline>;
  city: City;
  country: Country;
  iata: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  paxAmount?: Maybe<Scalars['Int']>;
  routes: Array<Route>;
  services: Array<Service>;
};


export type AirportRoutesArgs = {
  bothDirections?: InputMaybe<Scalars['Boolean']>;
};

export type City = {
  __typename?: 'City';
  airports: Array<Airport>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  airports: Array<Airport>;
  cities: Array<City>;
  id: Scalars['Int'];
  manufacturers: Array<Manufacturer>;
  name: Scalars['String'];
};

export type Manufacturer = {
  __typename?: 'Manufacturer';
  aircrafts: Array<Aircraft>;
  country: Scalars['Int'];
  countryDetails: Country;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAirline: Airline;
};


export type MutationAddAirlineArgs = {
  aircrafts: Array<Scalars['Int']>;
  countryOfRegistration: Scalars['Int'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  aircrafts: Array<Aircraft>;
  airline: Airline;
  airlines: Array<Airline>;
  airport: Airport;
  airports: Array<Airport>;
  countries: Array<Country>;
  country: Country;
  manufacturers: Array<Manufacturer>;
  routes: Array<Route>;
};


export type QueryAirlineArgs = {
  id: Scalars['Int'];
};


export type QueryAirlinesArgs = {
  airport: Scalars['String'];
};


export type QueryAirportArgs = {
  iata?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryCountryArgs = {
  id: Scalars['Int'];
};


export type QueryManufacturersArgs = {
  country: Scalars['Int'];
};


export type QueryRoutesArgs = {
  arr?: InputMaybe<Scalars['String']>;
  dep: Scalars['String'];
};

export type Route = {
  __typename?: 'Route';
  airline: Airline;
  airlineId: Scalars['Int'];
  arr: Scalars['String'];
  arrAirport: Airport;
  dep: Scalars['String'];
  depAirport: Airport;
  flightNumber: Scalars['String'];
  id: Scalars['Int'];
};

export type Service = {
  __typename?: 'Service';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type AddAirlineMutationVariables = Exact<{
  name: Scalars['String'];
  countryOfRegistration: Scalars['Int'];
  aircrafts: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type AddAirlineMutation = { __typename?: 'Mutation', addAirline: { __typename?: 'Airline', id: number } };

export type GetCountriesListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesListQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', id: number, name: string }> };

export type GetAircraftsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAircraftsListQuery = { __typename?: 'Query', aircrafts: Array<{ __typename?: 'Aircraft', id: number, name: string, manufacturer: { __typename?: 'Manufacturer', name: string } }> };

export type GetAirportQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetAirportQuery = { __typename?: 'Query', airport: { __typename?: 'Airport', name: string, iata: string } };

export type GetAirportAirlinesQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetAirportAirlinesQuery = { __typename?: 'Query', airport: { __typename?: 'Airport', iata: string, routes: Array<{ __typename?: 'Route', dep: string, arr: string, airline: { __typename?: 'Airline', name: string } }> } };

export type GetAirportInfoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetAirportInfoQuery = { __typename?: 'Query', airport: { __typename?: 'Airport', name: string, iata: string, paxAmount?: number | null, country: { __typename?: 'Country', name: string }, routes: Array<{ __typename?: 'Route', arr: string }>, airlines: Array<{ __typename?: 'Airline', id: number }>, services: Array<{ __typename?: 'Service', name: string }> } };

export type GetAirportRoutesQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetAirportRoutesQuery = { __typename?: 'Query', airport: { __typename?: 'Airport', iata: string, routes: Array<{ __typename?: 'Route', dep: string, arr: string, flightNumber: string, depAirport: { __typename?: 'Airport', name: string, iata: string }, arrAirport: { __typename?: 'Airport', name: string, iata: string }, airline: { __typename?: 'Airline', name: string } }> } };

export type GetAirportsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAirportsQuery = { __typename?: 'Query', airports: Array<{ __typename?: 'Airport', id: number, name: string, iata: string, country: { __typename?: 'Country', id: number, name: string }, airlines: Array<{ __typename?: 'Airline', name: string }>, routes: Array<{ __typename?: 'Route', arr: string }> }> };


export const AddAirlineDocument = gql`
    mutation addAirline($name: String!, $countryOfRegistration: Int!, $aircrafts: [Int!]!) {
  addAirline(
    name: $name
    countryOfRegistration: $countryOfRegistration
    aircrafts: $aircrafts
  ) {
    id
  }
}
    `;
export type AddAirlineMutationFn = Apollo.MutationFunction<AddAirlineMutation, AddAirlineMutationVariables>;

/**
 * __useAddAirlineMutation__
 *
 * To run a mutation, you first call `useAddAirlineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAirlineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAirlineMutation, { data, loading, error }] = useAddAirlineMutation({
 *   variables: {
 *      name: // value for 'name'
 *      countryOfRegistration: // value for 'countryOfRegistration'
 *      aircrafts: // value for 'aircrafts'
 *   },
 * });
 */
export function useAddAirlineMutation(baseOptions?: Apollo.MutationHookOptions<AddAirlineMutation, AddAirlineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAirlineMutation, AddAirlineMutationVariables>(AddAirlineDocument, options);
      }
export type AddAirlineMutationHookResult = ReturnType<typeof useAddAirlineMutation>;
export type AddAirlineMutationResult = Apollo.MutationResult<AddAirlineMutation>;
export type AddAirlineMutationOptions = Apollo.BaseMutationOptions<AddAirlineMutation, AddAirlineMutationVariables>;
export const GetCountriesListDocument = gql`
    query getCountriesList {
  countries {
    id
    name
  }
}
    `;

/**
 * __useGetCountriesListQuery__
 *
 * To run a query within a React component, call `useGetCountriesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountriesListQuery(baseOptions?: Apollo.QueryHookOptions<GetCountriesListQuery, GetCountriesListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountriesListQuery, GetCountriesListQueryVariables>(GetCountriesListDocument, options);
      }
export function useGetCountriesListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountriesListQuery, GetCountriesListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountriesListQuery, GetCountriesListQueryVariables>(GetCountriesListDocument, options);
        }
export type GetCountriesListQueryHookResult = ReturnType<typeof useGetCountriesListQuery>;
export type GetCountriesListLazyQueryHookResult = ReturnType<typeof useGetCountriesListLazyQuery>;
export type GetCountriesListQueryResult = Apollo.QueryResult<GetCountriesListQuery, GetCountriesListQueryVariables>;
export const GetAircraftsListDocument = gql`
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

/**
 * __useGetAircraftsListQuery__
 *
 * To run a query within a React component, call `useGetAircraftsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAircraftsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAircraftsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAircraftsListQuery(baseOptions?: Apollo.QueryHookOptions<GetAircraftsListQuery, GetAircraftsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAircraftsListQuery, GetAircraftsListQueryVariables>(GetAircraftsListDocument, options);
      }
export function useGetAircraftsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAircraftsListQuery, GetAircraftsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAircraftsListQuery, GetAircraftsListQueryVariables>(GetAircraftsListDocument, options);
        }
export type GetAircraftsListQueryHookResult = ReturnType<typeof useGetAircraftsListQuery>;
export type GetAircraftsListLazyQueryHookResult = ReturnType<typeof useGetAircraftsListLazyQuery>;
export type GetAircraftsListQueryResult = Apollo.QueryResult<GetAircraftsListQuery, GetAircraftsListQueryVariables>;
export const GetAirportDocument = gql`
    query getAirport($id: Int!) {
  airport(id: $id) {
    name
    iata
  }
}
    `;

/**
 * __useGetAirportQuery__
 *
 * To run a query within a React component, call `useGetAirportQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAirportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAirportQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAirportQuery(baseOptions: Apollo.QueryHookOptions<GetAirportQuery, GetAirportQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAirportQuery, GetAirportQueryVariables>(GetAirportDocument, options);
      }
export function useGetAirportLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAirportQuery, GetAirportQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAirportQuery, GetAirportQueryVariables>(GetAirportDocument, options);
        }
export type GetAirportQueryHookResult = ReturnType<typeof useGetAirportQuery>;
export type GetAirportLazyQueryHookResult = ReturnType<typeof useGetAirportLazyQuery>;
export type GetAirportQueryResult = Apollo.QueryResult<GetAirportQuery, GetAirportQueryVariables>;
export const GetAirportAirlinesDocument = gql`
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

/**
 * __useGetAirportAirlinesQuery__
 *
 * To run a query within a React component, call `useGetAirportAirlinesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAirportAirlinesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAirportAirlinesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAirportAirlinesQuery(baseOptions: Apollo.QueryHookOptions<GetAirportAirlinesQuery, GetAirportAirlinesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAirportAirlinesQuery, GetAirportAirlinesQueryVariables>(GetAirportAirlinesDocument, options);
      }
export function useGetAirportAirlinesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAirportAirlinesQuery, GetAirportAirlinesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAirportAirlinesQuery, GetAirportAirlinesQueryVariables>(GetAirportAirlinesDocument, options);
        }
export type GetAirportAirlinesQueryHookResult = ReturnType<typeof useGetAirportAirlinesQuery>;
export type GetAirportAirlinesLazyQueryHookResult = ReturnType<typeof useGetAirportAirlinesLazyQuery>;
export type GetAirportAirlinesQueryResult = Apollo.QueryResult<GetAirportAirlinesQuery, GetAirportAirlinesQueryVariables>;
export const GetAirportInfoDocument = gql`
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

/**
 * __useGetAirportInfoQuery__
 *
 * To run a query within a React component, call `useGetAirportInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAirportInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAirportInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAirportInfoQuery(baseOptions: Apollo.QueryHookOptions<GetAirportInfoQuery, GetAirportInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAirportInfoQuery, GetAirportInfoQueryVariables>(GetAirportInfoDocument, options);
      }
export function useGetAirportInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAirportInfoQuery, GetAirportInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAirportInfoQuery, GetAirportInfoQueryVariables>(GetAirportInfoDocument, options);
        }
export type GetAirportInfoQueryHookResult = ReturnType<typeof useGetAirportInfoQuery>;
export type GetAirportInfoLazyQueryHookResult = ReturnType<typeof useGetAirportInfoLazyQuery>;
export type GetAirportInfoQueryResult = Apollo.QueryResult<GetAirportInfoQuery, GetAirportInfoQueryVariables>;
export const GetAirportRoutesDocument = gql`
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

/**
 * __useGetAirportRoutesQuery__
 *
 * To run a query within a React component, call `useGetAirportRoutesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAirportRoutesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAirportRoutesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAirportRoutesQuery(baseOptions: Apollo.QueryHookOptions<GetAirportRoutesQuery, GetAirportRoutesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAirportRoutesQuery, GetAirportRoutesQueryVariables>(GetAirportRoutesDocument, options);
      }
export function useGetAirportRoutesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAirportRoutesQuery, GetAirportRoutesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAirportRoutesQuery, GetAirportRoutesQueryVariables>(GetAirportRoutesDocument, options);
        }
export type GetAirportRoutesQueryHookResult = ReturnType<typeof useGetAirportRoutesQuery>;
export type GetAirportRoutesLazyQueryHookResult = ReturnType<typeof useGetAirportRoutesLazyQuery>;
export type GetAirportRoutesQueryResult = Apollo.QueryResult<GetAirportRoutesQuery, GetAirportRoutesQueryVariables>;
export const GetAirportsDocument = gql`
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

/**
 * __useGetAirportsQuery__
 *
 * To run a query within a React component, call `useGetAirportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAirportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAirportsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAirportsQuery(baseOptions?: Apollo.QueryHookOptions<GetAirportsQuery, GetAirportsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAirportsQuery, GetAirportsQueryVariables>(GetAirportsDocument, options);
      }
export function useGetAirportsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAirportsQuery, GetAirportsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAirportsQuery, GetAirportsQueryVariables>(GetAirportsDocument, options);
        }
export type GetAirportsQueryHookResult = ReturnType<typeof useGetAirportsQuery>;
export type GetAirportsLazyQueryHookResult = ReturnType<typeof useGetAirportsLazyQuery>;
export type GetAirportsQueryResult = Apollo.QueryResult<GetAirportsQuery, GetAirportsQueryVariables>;