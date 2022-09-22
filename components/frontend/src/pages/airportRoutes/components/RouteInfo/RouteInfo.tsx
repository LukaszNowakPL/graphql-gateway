import React from "react";
import { GetAirportRoutesQuery } from "../../../../generated/graphql";

interface RouteInfoProps {
  routes: GetAirportRoutesQuery["airport"]["routes"];
  subjectAirportIata: string;
}

export const RouteInfo: React.FC<RouteInfoProps> = ({
  routes,
  subjectAirportIata
}) => {
  const oppositeAirport =
    routes[0].dep === subjectAirportIata
      ? routes[0].arrAirport
      : routes[0].depAirport;
  return (
    <div>
      <h4>
        {oppositeAirport.name}, {oppositeAirport.iata}
      </h4>
      <ul>
        {routes.map(route => (
          <li key={route.flightNumber}>
            {route.airline.name} - {route.flightNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};
