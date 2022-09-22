import React from "react";
import { GetAirportInfoQuery } from "../../../../generated/graphql";
import { Link } from "react-router-dom";
// @ts-ignore
import { Button } from "agnostic-react";

export const getTableRows = ({
  name,
  iata,
  country: { name: countryName },
  paxAmount,
  routes,
  airlines,
  services
}: GetAirportInfoQuery["airport"]) => {
  return [
    { key: "Name:", data: name },
    { key: "Iata code:", data: iata },
    { key: "Country:", data: countryName },
    { key: "Pax:", data: paxAmount },
    {
      key: "Routes:",
      data: (
        <>
          {
            routes.reduce(
              (prev, route) => {
                if (!prev.includes(route.arr)) {
                  prev.push(route.arr);
                }
                return prev;
              },
              [] as string[]
            ).length
          }
          &nbsp;
          <Link to={"routes"}>
            <Button isBordered>&gt;</Button>
          </Link>
        </>
      )
    },
    {
      key: "Airlines:",
      data: (
        <>
          {airlines.length}&nbsp;
          <Link to={"airlines"}>
            <Button isBordered>&gt;</Button>
          </Link>
        </>
      )
    },
    {
      key: "Services available:",
      data: (
        <ul>
          {services.map(service => (
            <li key={service.name}>{service.name}</li>
          ))}
        </ul>
      )
    }
  ];
};
