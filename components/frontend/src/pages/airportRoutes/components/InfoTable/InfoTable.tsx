import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../../../components/Loader/Loader";
import { useAirportRoutes } from "../../hooks/useAirportRoutes";
import {RouteInfo} from "../RouteInfo/RouteInfo";
import {routesListContainer} from "./InfoTable.styles";

export const InfoTable: React.FC = () => {
  const { airportId } = useParams<{ seoPart: string; airportId: string }>();
  const { data, loading } = useAirportRoutes(Number(airportId));

  if (loading || !data) {
    return <Loader />;
  }

  return (
    <>
      <h3>Routes departing from the airport:</h3>
        <section className={routesListContainer}>
      {data.from.map(airport => <RouteInfo key={`from_${airport}`} subjectAirportIata={data.iata} routes={data?.routes.filter(route => airport === route.arr)} />)}
        </section>
      <h3>Routes arriving to the airport:</h3>
        <section className={routesListContainer}>
        {data.to.map(airport => <RouteInfo key={`to_${airport}`} subjectAirportIata={data.iata} routes={data?.routes.filter(route => airport === route.dep)} />)}
        </section>
    </>
  );
};
