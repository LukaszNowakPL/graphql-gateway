import React from "react";
import { Loader } from "../../components/Loader/Loader";
import { Outlet, useParams } from "react-router-dom";
import { useAirport } from "./hooks/useAirport";
import { AirportTabs } from "./components/AirportTabs/AirportTabs";

export const AirportPage: React.FC = () => {
  const { airportId } = useParams<{ seoPart: string; airportId: string }>();
  const { data, loading } = useAirport(Number(airportId));

  if (loading || !data) {
    return <Loader />;
  }

  return (
    <>
      <h2>
        {data.airport.name} ({data.airport.iata})
      </h2>
      <AirportTabs />
      <Outlet />
    </>
  );
};
