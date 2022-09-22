import React from "react";
import { useAirportsList } from "./hooks/useAirportsList";
import { Loader } from "../../components/Loader/Loader";
import { AirportsByCountry } from "./components/AirportsByCountry/AirportsByCountry";

export const AirportsPage: React.FC = () => {
  const { data, loading } = useAirportsList();

  if (loading || !data) {
    return <Loader />;
  }

  return (
    <>
      <h2>List of airports by country</h2>
      {data.map((airportsByCountry, id) => (
        <AirportsByCountry key={id} airports={airportsByCountry} />
      ))}
    </>
  );
};
